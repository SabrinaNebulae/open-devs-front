const API_BASE = import.meta.env.VITE_API_URL;
const TOKEN_KEY = "jwt.token";
const REFRESH_KEY = "jwt.refresh";

/**
 * Laravel routes :
 * - POST   /api/v1/auth/login
 * - POST   /api/v1/auth/register
 * - GET    /api/v1/auth/me
 * - POST   /api/v1/auth/refresh
 * - POST   /api/v1/auth/logout
 */
export async function apiFetch(
  path,
  { method = "GET", body, auth = true } = {}
) {
  const token = localStorage.getItem(TOKEN_KEY);
  const headers = { "Content-Type": "application/json" };
  if (auth && token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  // Tentative de refresh si 401
  if (res.status === 401 && auth) {
    const refreshed = await tryRefresh();
    if (refreshed) {
      const newToken = localStorage.getItem(TOKEN_KEY);
      const retryHeaders = { ...headers, Authorization: `Bearer ${newToken}` };
      const retryRes = await fetch(`${API_BASE}${path}`, {
        method,
        headers: retryHeaders,
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
      });
      if (!retryRes.ok) throw new Error(await retryRes.text());
      return retryRes.json();
    }
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

async function tryRefresh() {
  const refreshToken = localStorage.getItem(REFRESH_KEY);
  if (!refreshToken) return false;

  try {
    const res = await fetch(`${API_BASE}/api/v1/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
      credentials: "include",
    });
    if (!res.ok) return false;
    const data = await res.json();
    if (data.data?.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
      if (data.data.refresh_token)
        localStorage.setItem(REFRESH_KEY, data.data.refresh_token);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// Helpers pour les routes d’auth
export async function login(email, password) {
  const data = await apiFetch("/api/v1/auth/login", {
    method: "POST",
    body: { email, password },
    auth: false,
  });
  //console.log(data.data.token)
  localStorage.setItem(TOKEN_KEY, data.data.token);
  if (data.data.refresh_token)
    localStorage.setItem(REFRESH_KEY, data.data.refresh_token);
  return data;
}

export async function register(payload) {
  const data = await apiFetch("/api/v1/auth/register", {
    method: "POST",
    body: payload,
    auth: false,
  });
  localStorage.setItem(TOKEN_KEY, data.data.token);
  if (data.data.refresh_token)
    localStorage.setItem(REFRESH_KEY, data.data.refresh_token);
  return data;
}

export async function getProfile() {
  return apiFetch("/api/v1/auth/me");
}

export async function logout() {
  try {
    await apiFetch("/api/v1/auth/logout", { method: "GET" });
  } catch {
    //
  }
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export async function getProfiles() {
  const data = await apiFetch("/api/v1/users/all", { method: "GET" });
  return data;
}

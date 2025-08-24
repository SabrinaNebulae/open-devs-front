import { useState, useEffect } from "react";
import AppShell from "../components/AppShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getProfiles } from "../utils/api.js";

export default function Dashboard() {
  const { user } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const lastProfiles = await getProfiles();
        setProfiles(lastProfiles.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load profiles...");
      } finally {
        setLoading(false);
      }
    };
    loadProfiles();
  }, []);

  return (
    <AppShell>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <pre className="bg-black border border-white/20 rounded-xl p-4 text-sm">
        {JSON.stringify(user, null, 2)}
      </pre>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Oops...There is nobody!</p>
      ) : (
        <div>
          <ul>
            {profiles.map((profile, index) => (
              <li key={index}>{profile.name}</li>
            ))}
          </ul>
        </div>
      )}
    </AppShell>
  );
}

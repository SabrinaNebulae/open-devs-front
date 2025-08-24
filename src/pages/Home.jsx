import AppShell from "../components/AppShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Home() {
  const { user } = useAuth();
  return (
    <AppShell>
      <h1 className="text-3xl font-bold mb-4">Bienvenue {user ? user.data.name : "!"}</h1>
      <p className="text-gray-400">Application d’authentification en React 19 + Tailwind 4 (noir & blanc).</p>
    </AppShell>
  );
}

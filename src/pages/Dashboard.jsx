import AppShell from "../components/AppShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <AppShell>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <pre className="bg-black border border-white/20 rounded-xl p-4 text-sm">{JSON.stringify(user, null, 2)}</pre>
    </AppShell>
  );
}

import AppShell from "../components/organisms/AppShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Home() {
  const { user } = useAuth();
  return (
    <AppShell>
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Bienvenue {user ? user.data.name : "!"}
        </h1>
        <p className="text-gray-400">
          Connecte toi et trouve des développeureuses avec les mêmes valeurs que
          toi.
        </p>
      </div>
    </AppShell>
  );
}

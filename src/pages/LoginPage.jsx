import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import AppShell from "../components/AppShell.jsx";
import Card from "../components/Card.jsx";
import TextInput from "../components/TextInput.jsx";
import SubmitButton from "../components/SubmitButton.jsx";

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      nav("/dashboard");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <Card title="Connexion">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput label="Email" type="email" value={email} onChange={setEmail} />
          <TextInput label="Mot de passe" type="password" value={password} onChange={setPassword} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <SubmitButton loading={loading}>Se connecter</SubmitButton>
        </form>
        <p className="text-gray-400 text-sm mt-4">Pas encore inscrit ? <Link className="underline" to="/register">Créer un compte</Link></p>
      </Card>
    </AppShell>
  );
}

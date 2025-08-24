import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import AppShell from "../components/AppShell.jsx";
import Card from "../components/Card.jsx";
import TextInput from "../components/TextInput.jsx";
import SubmitButton from "../components/SubmitButton.jsx";

export default function RegisterPage() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== passwordConfirmation) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      await register({ name, email, password, password_confirmation: passwordConfirmation });
      nav("/dashboard");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <Card title="Créer un compte">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput label="Nom" value={name} onChange={setName} />
          <TextInput label="Email" type="email" value={email} onChange={setEmail} />
          <TextInput label="Mot de passe" type="password" value={password} onChange={setPassword} />
          <TextInput label="Confirmer le mot de passe" type="password" value={passwordConfirmation} onChange={setPasswordConfirmation} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <SubmitButton loading={loading}>Créer un compte</SubmitButton>
        </form>
        <p className="text-gray-400 text-sm mt-4">
          Déjà inscrit ?{" "}
          <Link className="underline" to="/login">
            Se connecter
          </Link>
        </p>
      </Card>
    </AppShell>
  );
}

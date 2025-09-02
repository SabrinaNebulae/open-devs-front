import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import Button from "../../atoms/button/button.jsx";
import SignInFormField from "../../molecules/forms/SignInFormField.jsx";

export default function SignIn() {
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
    <div>
      <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <SignInFormField
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <Button loading={loading} type="primary" text="Envoyer" />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button
            type="link"
            text="Mot de passe oublié ?"
            onclick={handleSubmit}
          />
        </form>
      </div>
      <div className="mx-auto">
        <p className="mt-4 text-sm text-center text-gray-400">
          Pas encore inscrit ?{" "}
          <Link className="underline" to="/register">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}

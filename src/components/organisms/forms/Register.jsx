import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import Button from "../../atoms/button/button.jsx";
import RegisterFormField from "../../molecules/forms/RegisterFormField.jsx";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.passwordConfirmation) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
      });
      nav("/dashboard");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <RegisterFormField values={formData} onChange={handleChange} />

          <Button loading={loading} type="primary" text="Envoyer" />

          {error && <p className="text-sm text-red-400">{error}</p>}
        </form>
      </div>
      <div className="mx-auto">
        <p className="mt-4 text-sm text-center text-gray-400">
          Déjà inscrit ?{" "}
          <Link className="underline" to="/register">
            Connectez-vous à votre compte
          </Link>
        </p>
      </div>
    </>
  );
}

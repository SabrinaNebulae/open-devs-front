import Input from "../../atoms/input/input";
import Label from "../../atoms/label/Label";

export default function SignInFormField({
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <div className="flex flex-col mt-4">
      <div className="mb-2">
        <Label text="Adresse Email" id="email" />
        <Input
          type="email"
          id="email"
          placeholder="Entrez une adresse mail valide"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div className="mb-2">
        <Label text="Mot de passe" id="password" />
        <Input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={setPassword}
        />
      </div>
    </div>
  );
}

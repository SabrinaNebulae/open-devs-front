import Input from "../../atoms/input/input";
import Label from "../../atoms/label/Label";

export default function RegisterFormField({ values, onChange }) {
  return (
    <div className="flex flex-col mt-4">
      <div className="mb-2">
        <Label text="Nom ou pseudo" id="name" />
        <Input
          type="text"
          id="name"
          placeholder="Entrez votre nom complet ou votre pseudonyme"
          value={values.name}
          onChange={onChange}
        />
      </div>

      <div className="mb-2">
        <Label text="Adresse Email" id="email" />
        <Input
          type="email"
          id="email"
          placeholder="Entrez une adresse mail valide"
          value={values.email}
          onChange={onChange}
        />
      </div>

      <div className="mb-2">
        <Label text="Mot de passe" id="password" />
        <Input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          value={values.password}
          onChange={onChange}
        />
      </div>

      <div className="mb-2">
        <Label text="Confirmation du mot de passe" id="passwordConfirmation" />
        <Input
          type="password"
          id="passwordConfirmation"
          placeholder="Entrez de nouveau votre mot de passe"
          value={values.passwordConfirmation}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

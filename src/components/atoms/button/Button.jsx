import "./button.css";

export default function Button({
  children,
  type,
  text = "Click me!",
  onclick,
  loading = false,
}) {
  return (
    <button
      type="submit"
      className={`btn btn-${type} mt-2 block w-full`}
      onClick={onclick}
      disabled={loading}
    >
      {text}
      {loading ? "Chargement…" : children}
    </button>
  );
}

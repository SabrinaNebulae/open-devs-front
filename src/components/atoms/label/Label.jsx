export default function Label({ id, text }) {
  return (
    <label htmlFor={id} className="font-secondary mb-4">
      {text}
    </label>
  );
}

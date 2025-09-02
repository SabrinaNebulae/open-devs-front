export default function Input({ type, id, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      className="block w-full px-4 py-5 my-2 font-light border border-gray-200 rounded-xl placeholder:text-gray-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

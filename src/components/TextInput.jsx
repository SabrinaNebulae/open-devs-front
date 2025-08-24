export default function TextInput({ label, type="text", value, onChange }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm text-gray-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/30 bg-black text-white px-3 py-2 focus:border-white focus:outline-none"
      />
    </label>
  );
}

export default function SubmitButton({ children, loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
    >
      {loading ? "Chargement…" : children}
    </button>
  );
}

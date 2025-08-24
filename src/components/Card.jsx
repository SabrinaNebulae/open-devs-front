export default function Card({ title, children }) {
  return (
    <div className="bg-black border border-white/20 rounded-2xl p-6 text-white max-w-md mx-auto shadow-md">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
}

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function AppShell({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/20 bg-black text-white">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="font-bold text-xl">⚪ Open Devs</Link>
          <nav className="space-x-3">
            {!user ? (
              <>
                <Link to="/login" className="px-3 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black">Login</Link>
                <Link to="/register" className="px-3 py-1 rounded-full bg-white text-black hover:bg-gray-200">Register</Link>
              </>
            ) : (
              <button onClick={logout} className="px-3 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black">Logout</button>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto p-6">{children}</main>
      <footer className="text-center text-gray-500 p-4 text-sm">Open Devs</footer>
    </div>
  );
}

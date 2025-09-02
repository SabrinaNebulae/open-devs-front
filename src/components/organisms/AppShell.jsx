import { Link } from "react-router-dom";
import "./appshell.css";
import Header from "./partials/Header";

export default function AppShell({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      {/* <main className="flex-1 max-w-4xl p-6 mx-auto">{children}</main> */}
      <main className="">{children}</main>
      <footer className="p-4 text-sm text-center text-gray-500">
        Open Devs
      </footer>
    </div>
  );
}

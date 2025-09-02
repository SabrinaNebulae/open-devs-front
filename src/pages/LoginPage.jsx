import AppShell from "../components/organisms/AppShell.jsx";
import SignIn from "../components/organisms/forms/SignIn.jsx";

export default function LoginPage() {
  return (
    <AppShell>
      <section>
        <div className="grid h-screen grid-cols-2">
          <div className="mt-20">
            <SignIn />
          </div>
          <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-one">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="img/login-banner-bg.png"
              alt=""
            />
            Slider
          </div>
        </div>
      </section>
    </AppShell>
  );
}

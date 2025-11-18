import { Mail } from "lucide-react";
import { useState } from "react";
import LoginForm from "../../components/pages/loginForm";
import SignupForm from "../../components/pages/SignupForm";
export default function Auth() {
  const [login, setLogin] = useState<Boolean>(false);
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      <div className="w-full md:w-6/12 bg-sky-500 p-8 text-white center-col">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to Chatty</h1>
          <p>Connect with friends and family, anytime and anywhere</p>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm opacity-80">Join thousands of users today!</p>
        </div>
      </div>

      <div className="w-full md:w-6/12 center">
        {login ? (
          <div className="w-full md:w-[400px] border border-gray-300 p-8 rounded shadow-xl">
            <LoginForm onSwitch={() => setLogin(true)} />
          </div>
        ) : (
          <div className="w-full md:w-[400px] border border-gray-300 p-8 rounded shadow-xl shadow-sky-300 hover:shadow-sky-500 transition-all duration-300">
            <SignupForm onSwitch={() => setLogin(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

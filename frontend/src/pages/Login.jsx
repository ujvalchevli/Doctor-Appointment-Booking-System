import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[300px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create your account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "signup" : "login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 w-full rounded py-2 px-1 mt-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 w-full rounded py-2 px-1 mt-1"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 w-full rounded py-2 px-1 mt-1"
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          onClick={onSubmitHandler}
          className="bg-blue-600 text-white py-2 rounded-md text-base w-full"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <p>
          {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={()=>setState('Sign In')} className="text-blue-600 underline cursor-pointer">Login</span></p>
            : <p>Don't have an account? <span onClick={()=>setState('Sign Up')} className="text-blue-600 underline cursor-pointer">Sign in</span></p>
          }

        </p>
      </div>
    </form>
  );
}

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function SigninForm() {
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
    } catch (error) {}
  };

  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl md:w-2/5 p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
      >
        <h1 className="text-5xl text-purple-500 font-Fredoka mb-2">
          User Login
        </h1>
        <input
          className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
          type="email"
          placeholder="EMAIL"
          name="email"
        />
        <input
          className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
          type="password"
          placeholder="PASSWORD"
          name="password"
        />
        <Button
          className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-purple-600 !hover:bg-purple-800 !transition !duration-300"
          variant="contained"
          type="submit"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default SigninForm;

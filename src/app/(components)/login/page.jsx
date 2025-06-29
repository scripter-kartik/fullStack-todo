"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (res.ok && data.success) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
        router.push("/Dashboard");
      } else {
        setMessage(`Error: ${data.message || "Login failed"}`);
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10 bg-teal-600 w-[35rem] h-[35rem] rounded-2xl p-6"
      >
        <h2 className="text-3xl text-white font-semibold">Login</h2>

        <input
          className="border-2 border-black w-[25rem] h-[4rem] text-2xl text-black outline-none select-none p-2 rounded-2xl"
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={handleChange}
          value={formData.email}
          required
        />

        <input
          className="border-2 border-black w-[25rem] h-[4rem] text-2xl text-black outline-none select-none p-2 rounded-2xl"
          type="password"
          name="password"
          placeholder="Enter your password..."
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          className="bg-black w-[15rem] h-[3.5rem] text-2xl text-teal-600 font-mono rounded-2xl hover:bg-gray-800"
          type="submit"
        >
          Login
        </button>

        <a className="text-white text-lg" href="/signup">
          Don't have an account?{" "}
          <strong className="hover:text-blue-300">Sign up</strong>
        </a>
      </form>

      {message && (
        <p className="text-white text-2xl absolute bottom-10">{message}</p>
      )}
    </div>
  );
}

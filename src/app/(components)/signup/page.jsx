"use client";

import { useState } from "react";

export default function Signup() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("user created successfully");
        setFormData({ name: "", email: "", password: "" });
      } else {
        setMessage(`Error ${data.message || "signup failed"}`);
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10 bg-teal-600 w-140 h-160 rounded-2xl"
      >
        <input
          className="border-2 border-black w-100 h-15 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="text"
          name="name"
          placeholder="Enter the name..."
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="border-2 border-black w-100 h-15 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="email"
          name="email"
          placeholder="Enter the email..."
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="border-2 border-black w-100 h-15 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="password"
          name="password"
          placeholder="Enter the password..."
          onChange={handleChange}
          value={formData.password}
        />
        <button
          className="bg-black w-60 h-15 text-3xl text-teal-600 font-mono not-only:p-2 my-[26px] rounded-2xl"
          type="submit"
        >
          SignUp
        </button>
        <a className="text-white" href="/login">
          already have an account -{" "}
          <strong className="hover:text-blue-900">login</strong>
        </a>
      </form>
      {message && <p className="text-white text-2xl">{message}</p>}
    </div>
  );
}

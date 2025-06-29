"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-teal-900 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to <span className="text-teal-300">TaskZen</span>
      </h1>
      <p className="text-lg max-w-xl text-center text-gray-200 mb-10">
        Your personal productivity partner. Create, manage, and conquer your
        daily tasks with ease and elegance.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="/signup"
          className="px-8 py-4 text-xl font-semibold bg-teal-500 hover:bg-teal-400 rounded-xl shadow-lg transition duration-300"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-8 py-4 text-xl font-semibold border-2 border-white hover:bg-white hover:text-teal-800 rounded-xl transition duration-300"
        >
          Login
        </a>
      </div>

      <div className="mt-16 max-w-3xl text-center text-gray-300 text-md">
        ✨ Stay organized, boost focus, and track progress all in one place.
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TaskZen. Built with 💙 by You.
      </footer>
    </div>
  );
}

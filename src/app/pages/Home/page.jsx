"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "flex" : "my-5 flex items-center"}>
      {!isActive && (
        <img
          className="m-5 w-8 h-8"
          src="/sidebar.png"
          alt=""
          onClick={() => setIsActive(true)}
        />
      )}
      {isActive && (
        <div className="bg-teal-600 w-100 h-screen relative">
          <img
            className="absolute right-2 top-2"
            src="/cross.png"
            alt=""
            onClick={() => setIsActive(false)}
          />
          <ul className="text-7xl flex flex-col gap-20 absolute top-60 left-5">
            <li>Home</li>
            <li>Notes</li>
            <li>Tasks</li>
            <li>Reminders</li>
          </ul>
        </div>
      )}
      <h1
        className={
          isActive
            ? "ml-108 text-teal-600 text-5xl my-8"
            : "ml-190 text-teal-600 text-5xl"
        }
      >
        To Do App
      </h1>
      <button
        className={
          isActive
            ? "bg-teal-600 ml-150 w-25 h-15 text-2xl font-mono rounded-4xl p-2 my-[26px]"
            : "bg-teal-600 ml-150 w-25 h-15 text-2xl font-mono rounded-4xl p-2"
        }
      >
        Login
      </button>
      <Link href="/components/signup">
        <button
          className={
            isActive
              ? "bg-teal-600 ml-10 w-25 h-15 text-2xl font-mono rounded-4xl p-2 my-[26px]"
              : "bg-teal-600 ml-10 w-25 h-15 text-2xl font-mono rounded-4xl p-2"
          }
        >
          Signup
        </button>
      </Link>
    </div>
  );
}

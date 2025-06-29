export default function signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center gap-10 bg-teal-600 w-140 h-160 rounded-2xl">
        <input
          className="border-2 border-black w-100 h-20 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="text"
          name="name"
          placeholder="Enter the name..."
        />
        <input
          className="border-2 border-black w-100 h-20 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="email"
          name="email"
          placeholder="Enter the email..."
        />
        <input
          className="border-2 border-black w-100 h-20 text-3xl text-black-600 outline-none select-none p-2 rounded-2xl"
          type="password"
          name="password"
          placeholder="Enter the password..."
        />
        <button
          className="bg-black w-50 h-15 text-4xl text-teal-600 font-mono not-only:p-2 my-[26px] rounded-2xl"
          type="submit"
        >
          SignUp
        </button>
        <a className="text-white" href="/login">
          already have an account -{" "}
          <strong className="hover:text-blue-900">login</strong>
        </a>
      </form>
    </div>
  );
}

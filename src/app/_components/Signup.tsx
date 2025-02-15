import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900">
          Sign Up
        </h1>

        <form className="flex flex-col space-y-4">
          {/* Full Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>

          {/* Signup Button */}
          <button className="rounded-md bg-blue-600 py-2 text-white transition duration-200 hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        {/* OAuth Signup */}
        <div className="mt-4 flex items-center justify-center w-full">
          <button className="flex items-center space-x-2 rounded-lg w-full justify-center bg-gray-100 px-4 py-2 transition duration-200 hover:bg-gray-200">
            <Image
              src="/discord-icon.png"
              alt="discord-icon"
              width={30}
              height={30}
            />
            <span className="font-medium text-gray-800">
              Signup with Discord
            </span>
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="cursor-pointer text-blue-600 hover:underline"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

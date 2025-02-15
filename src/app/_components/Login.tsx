import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-900">Login</h1>
        
        <form className="flex flex-col space-y-4">
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-medium mb-1">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button 
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* OAuth Login */}
        <div className="mt-4 flex items-center justify-center">
          <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200">
            <Image src="/discord-icon.png" alt="discord-icon" width={30} height={30} />
            <span className="text-gray-800 font-medium">Login with Discord</span>
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <Link href="/signup" className="text-blue-600 hover:underline">
            No account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

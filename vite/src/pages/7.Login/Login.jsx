import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-FXHwEXNgs-y5vbjBrC46w8qAB0QaniI",
  authDomain: "vaporware-4b2bc.firebaseapp.com",
  projectId: "vaporware-4b2bc",
  storageBucket: "vaporware-4b2bc.appspot.com",
  messagingSenderId: "861851951828",
  appId: "1:861851951828:web:a5a4161c73b82312ca5141",
  measurementId: "G-6XH0KDCD6J"
};

const firebaseApp = initializeApp(firebaseConfig);

// This function needs further development, where will we redirect once a user is logged in? 
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gradient-to-t from-stone-300 via-zinc-300 to-white flex flex-col justify-center items-center">
        <div className="sm:w-full sm:max-w-sm px-6 py-12 lg:px-8">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.cypresseg.com/img/logo/CypressEG.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-950">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold hover:text-green-600">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-950">
            Not a member?{' '}
            <a href="#" className="font-extrabold leading-6 text-zinc-950 hover:text-green-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
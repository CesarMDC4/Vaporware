import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Password reset failed:', error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gradient-to-t from-stone-300 via-zinc-300 to-white flex flex-col justify-center items-center">
        <div className="sm:w-full sm:max-w-sm px-6 py-12 lg:px-8">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-900">Reset Password</h2>
          {!resetSent ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full lg:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="w-full lg:w-96 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Reset Email
              </button>
            </form>
          ) : (
            <div className="mt-6">
              <p className="text-green-600">Password reset email sent. Please check your inbox .</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

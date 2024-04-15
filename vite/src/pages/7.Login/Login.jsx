import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [acceptCookies, setAcceptCookies] = useState(false);
  const [renderPrompt, setRenderPrompt] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        sessionStorage.setItem('userId', user.uid);
        setIsLoggedIn(true);
        setUserEmail(user.email);
      } else {
        // User is signed out
        sessionStorage.removeItem('userId');
        setIsLoggedIn(false);
        setUserEmail('');
      }
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []);

  const handleAcceptCookies = () => {
    setAcceptCookies(true);
    localStorage.setItem('cookiesAccepted', 'true'); 
    setRenderPrompt(false);
  };

  const handleDeclineCookies = () => {
    setAcceptCookies(false);
    localStorage.setItem('cookiesAccepted', 'false'); 
    setRenderPrompt(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const auth = getAuth(firebaseApp);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      localStorage.setItem('userId', response.user.uid); // Store user's authentication state in local storage
      setIsLoggedIn(true);
      setUserEmail(response.user.email);
      
      // Check if the server sent a redirect URL
      if (response && response.redirect) {
        navigate(response.redirect); // Redirect to the specified URL
      } else {
        navigate('/courseHistory'); // Default redirect to /test if no redirect URL is provided
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setIsLoggedIn(false);
    }
  };
  
  const handleLogout = async () => {
    const auth = getAuth(firebaseApp);
    await signOut(auth);
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/login');
  };

  // Clears session when user leaves site
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('userId');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gradient-to-t from-stone-300 via-zinc-300 to-white flex flex-col justify-center items-center">
        <div className="sm:w-full sm:max-w-sm px-6 py-12 lg:px-8">
          {isLoggedIn && (
            <div className="flex justify-end items-center mb-4">
              <p className="mr-2 text-md text-black-600">{`Logged in as ${userEmail}`}</p>
              <button onClick={handleLogout} className="text-md text-blue-500 cursor-pointer">Logout</button>
            </div>
          )}
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
                  <a href="/reset" className="font-semibold hover:text-green-600">
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
          <p className="mt-10 text-center text-sm text-zinc-950"></p>
        </div>
      </div>
  
      {/* Cookie Acceptance Buttons */}
      {renderPrompt && !acceptCookies && (
        <div className="flex justify-center mt-0 p-3 bg-gray-200 rounded-md text-sm">
          <p>We use cookies to provide better services, do you agree to the use of cookies?</p>
          <div className="flex justify-center mt-0">
            <button
              onClick={() => { handleAcceptCookies();}}
              className="mr-1 px-3 py-1 bg-green-500 text-white rounded-md"
            >
              Agree
            </button>
            <button
              onClick={() => { handleDeclineCookies();}}
              className="ml-1 px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

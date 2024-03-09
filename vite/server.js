import express from 'express';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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

const app = express();

const auth = getAuth(firebaseApp);

app.use(express.json());

// Middleware to check if user is authenticated
const isAuthenticated = async (req, res, next) => {
  const user = await new Promise(resolve => {
    onAuthStateChanged(auth, user => resolve(user));
  });

  if (user) {
    next();
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

// Update test route to finalized history route 
app.get('/test', (req, res) => {
  // If user is logged in, allow access to the route
  if (isLoggedIn) {
    res.send('User test page');
  } else {
    // If user is not logged in, redirect to the login page
    res.redirect('/login');
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    res.send({ message: 'Login successful' });
  } catch (error) {
    res.status(401).send({ message: 'Login failed', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

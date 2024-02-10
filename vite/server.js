import express from 'express';
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

const app = express();

const auth = getAuth();

app.use(express.json());

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

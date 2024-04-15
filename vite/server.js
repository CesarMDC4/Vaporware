import express from 'express';
import admin from 'firebase-admin';
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

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    res.send({ message: 'Login successful', redirect: '/test' }); // Include redirect URL
  } catch (error) {
    res.status(401).send({ message: 'Login failed', error: error.message });
  }
});


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    /* admin.credential.applicationDefault() automatically uses the Google Cloud application default
    *  credentials environment variable (GOOGLE_APPLICATION_CREDENTIALS) you've set up.
    *  Therefore, make sure you've set up an environment variable locally named GOOGLE_APPLICATION_CREDENTIALS
    *  with value being the path to the admin sdk key.
    *  Optional: you can specify other Firebase project configuration options here.
    */
});

const db = admin.firestore();

// Route to add data to Firestore Database (Cloud Firestore):
app.post('/tregserver', async (req, res) => {  // eg. http://localhost:3000/tregserver
    //console.log("Received data:", req.body); // log the body of the request (FOR TESTING ONLY!)
    try {
        // Destructure the received data
        const {
            uid,
            status,
            firstName,
            lastName,
            email,
            companyName,
            title,
            phoneNumber,
            attendDay1,
            day1Date,
            attendDay2,
            day2Date,
            attendDay3,
            day3Date,
            attendDay4,
            day4Date,
            paymentMethod,
            invoicePerson,
            invoiceEmail,
            poNumber,
            total,
            submissionTimestamp,
            collectionName
        } = req.body;

        // Check if collectionName is provided
        if (!collectionName) {
            return res.status(400).send('Collection name is required');
        }
        
        // Prepare the registration data for Firestore
        const registrationData = {
            uid,
            status,
            firstName,
            lastName,
            email,
            companyName,
            title,
            phoneNumber,
            attendDay1,
            day1Date,
            attendDay2,
            day2Date,
            attendDay3,
            day3Date,
            attendDay4,
            day4Date,
            paymentMethod,
            invoicePerson,
            invoiceEmail,
            poNumber,
            total,
            submissionTimestamp,
        };
        
        // Use the provided collectionName for adding the document to Cloud Firestore:
        const registrationRef = await db.collection(collectionName).add(registrationData);
        res.status(200).json({ id: registrationRef.id }); // send ID back as a JSON object (This ID is our invoice number)
    } catch (error) {
        res.status(500).send('Error adding registration: ' + error.message);
    }
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).send({status: "up"});
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

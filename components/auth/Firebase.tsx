import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize auth instance
const auth = getAuth(app)
const db = getFirestore(app)

// Initialize a provider for google auth
const provider = new GoogleAuthProvider()

export { auth, db, provider }
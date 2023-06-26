import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize auth instance
const auth = getAuth(app)
const db = getFirestore(app)

// Initialize a provider for google auth
const provider = new GoogleAuthProvider()

export { auth, db, provider }
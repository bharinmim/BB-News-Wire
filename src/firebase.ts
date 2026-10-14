import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported, Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDbVVp9tZ-buiTcvOO1v6GOwdLDd_pAAzk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bd-news-wire.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bd-news-wire",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bd-news-wire.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "36164587660",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:36164587660:web:ca6cf60bd133e64015aba9",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-992YYRQXFS"
};

// Initialize Firebase singleton
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Export Auth & Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics safely in supported browser environments
export let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics unavailable or blocked by ad-blocker
  });
}

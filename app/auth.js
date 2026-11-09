import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase.js";

// Create a new account
export function createAccount(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logoutUser() {
  return signOut(auth);
}

// Get current user
export function getCurrentUser(callback) {
  return onAuthStateChanged(auth, callback);
}

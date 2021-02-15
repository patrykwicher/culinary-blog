import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK4tZ9dUgvgZfjOCLqQhIsUfcnVJB7oqs",
  authDomain: "culinary-blog.firebaseapp.com",
  projectId: "culinary-blog",
  storageBucket: "culinary-blog.appspot.com",
  messagingSenderId: "833613317934",
  appId: "1:833613317934:web:83e78b587c03148d325cbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// collection references
const usersCollection = db.collection('users');
const recipesCollection = db.collection('recipes');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes')
// points to the root of Cloud storage bucket
const storageReference = storage.ref();
// reference to a locotaion lower in the tree

export {
  db,
  auth,
  usersCollection,
  recipesCollection,
  commentsCollection,
  likesCollection,
  storageReference,
  storage
}

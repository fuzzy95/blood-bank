import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyAxZgb5GBtlSRsJbSh1X1xZRH5CjwBELxo',
  authDomain: 'blood-bank-management-3166d.firebaseapp.com',
  projectId: 'blood-bank-management-3166d',
  storageBucket: 'blood-bank-management-3166d.appspot.com',
  messagingSenderId: '577927185077',
  appId: '1:577927185077:web:ca1f187f68e2b7015ab4fc',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

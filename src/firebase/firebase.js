import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCizxrQoQt8G3Vu6e8HSdd4-mmnRinRzKk',
  authDomain: 'instagram-lav3ll.firebaseapp.com',
  projectId: 'instagram-lav3ll',
  storageBucket: 'instagram-lav3ll.appspot.com',
  messagingSenderId: '1070014383607',
  appId: '1:1070014383607:web:40ddfca377c75602615af2',
  measurementId: 'G-03M2RFFNTJ',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

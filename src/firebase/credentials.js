import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC0jSKqQxWTgd7CsPr3XXe1--381ztmQ4Q',
  authDomain: 'cdc-construccion.firebaseapp.com',
  projectId: 'cdc-construccion',
  storageBucket: 'cdc-construccion.appspot.com',
  messagingSenderId: '278810386714',
  appId: '1:278810386714:web:58e3ec935494abaf770ca3'
};

export const app = initializeApp(firebaseConfig);
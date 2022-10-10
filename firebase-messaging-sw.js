importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAyFGuJiGHGZwCv5z7Lc9aM4GksS36dBJE',
  authDomain: 'togather-a5d1a.firebaseapp.com',
  projectId: 'togather-a5d1a',
  storageBucket: 'togather-a5d1a.appspot.com',
  messagingSenderId: '702850440485',
  appId: '1:702850440485:web:845cc5ac150d3fbd850ecc',
  measurementId: 'G-R30NCZZKWJ',
});

const messaging = firebase.messaging(app);

// messaging.onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: payload,
//     title: '성공',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

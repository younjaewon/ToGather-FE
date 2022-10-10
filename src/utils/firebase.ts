import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import Api from 'src/apis/Api';

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGE_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
  VITE_FIREBASE_VAPID_KEY,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

const fetchGetToken = async () => {
  let token = null;
  await getToken(messaging, {
    vapidKey: VITE_FIREBASE_VAPID_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        // setToken(currentToken);
        Api.post(`/fcm/token`, {
          registrationToken: currentToken,
        });
        token = currentToken;
        console.log('currentToken: ', currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });

  return token;
};

export const fetchFirebaseToken = () => {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        fetchGetToken();
      }
    })
    .catch((err) => console.log(err));
};

// 백그라운드 서비스워커 설정
// messaging.onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: payload,
//     icon: '/firebase-logo.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

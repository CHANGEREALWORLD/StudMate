// fcm.js

// Make sure Firebase SDK is included in your HTML
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js"></script>

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// // ✅ Register Service Worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then((registration) => {
//       console.log('Service Worker registered:', registration);
//       messaging.useServiceWorker(registration);
//       requestPermission();
//     })
//     .catch((err) => {
//       console.error('Service Worker registration failed:', err);
//     });
// }

// // ✅ Request Notification Permission
// async function requestPermission() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       getFcmToken();
//     } else {
//       console.log('Notification permission denied.');
//     }
//   } catch (err) {
//     console.error('Permission error:', err);
//   }
// }

// // ✅ Get FCM Token
// async function getFcmToken() {
//   try {
//     const currentToken = await messaging.getToken({
//       vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw" // 🔑 Replace with your Web Push VAPID key
//     });
//     if (currentToken) {
//       console.log('FCM Token:', currentToken);
//       // TODO: Save this token in your Firebase DB if needed
//     } else {
//       console.log('No registration token available. Request permission first.');
//     }
//   } catch (err) {
//     console.error('Error getting FCM token:', err);
//   }
// }

// // ✅ Handle foreground messages
// messaging.onMessage((payload) => {
//   console.log('Foreground message received:', payload);
//   if (payload.notification) {
//     alert(`${payload.notification.title}\n${payload.notification.body}`);
//   }
// });


// // firebase.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// };

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const messaging = getMessaging(app);
// const token = await getToken(messaging, { vapidKey });


// // Save token
// async function saveTokenToFirestore(uid, token) {
//   await setDoc(doc(db, "users", uid), { fcmToken: token }, { merge: true });
//   console.log("Token saved:", token);
// }

// export async function requestNotificationPermission() {
//   try {
//     const permission = await Notification.requestPermission();

//     // if (permission === "granted") {
//     //   const token = await getToken(messaging, {
//     //     vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw"
//     //   });

//     //   console.log("FCM Token:", token);
//     import { getToken } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";
//    getToken(messaging, {
//     vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw"
//   }).then(token => {
//   console.log("FCM token:", token);
// });


//       if (auth.currentUser) {
//         await saveTokenToFirestore(auth.currentUser.uid, token);
//       }
//     }
//   } catch (err) {
//     console.error("Error requesting notifications:", err);
//   }
// }

// // Foreground notifications
// onMessage(messaging, (payload) => {
//   console.log("Foreground message:", payload);
//   new Notification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   });
// });

// // Auto-run on login
// onAuthStateChanged(auth, (user) => {
//   if (user) requestNotificationPermission();
// });



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// };

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const messaging = getMessaging(app);

// // Save token
// async function saveTokenToFirestore(uid, token) {
//   await setDoc(doc(db, "users", uid), { fcmToken: token }, { merge: true });
//   console.log("Token saved:", token);
// }

// export async function requestNotificationPermission() {
//   const permission = await Notification.requestPermission();
//   if (permission !== "granted") return;

//   const token = await getToken(messaging, {
//     vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw"
//   });

//   console.log("FCM token:", token);

//   if (auth.currentUser && token) {
//     await saveTokenToFirestore(auth.currentUser.uid, token);
//   }
// }

// // Foreground notifications
// onMessage(messaging, (payload) => {
//   console.log("Foreground message:", payload);
// });

// // Auto-run on login
// onAuthStateChanged(auth, (user) => {
//   if (user) requestNotificationPermission();
// });


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
  authDomain: "studmate-e1527.firebaseapp.com",
  projectId: "studmate-e1527",
  storageBucket: "studmate-e1527.appspot.com",
  messagingSenderId: "156725135850",
  appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/firebase-messaging-sw.js")
    .then(() => console.log("Service Worker registered"));
}

// Save token
async function saveToken(uid, token) {
  await setDoc(doc(db, "users", uid), { fcmToken: token }, { merge: true });
  console.log("Token saved");
}

// Ask permission + get token
async function setupNotifications() {
  const permission = await Notification.requestPermission();
  // if (permission !== "granted") return;
   console.log("Notification permission not granted");
    return;
  }
   const registration = await navigator.serviceWorker.ready;
  const token = await getToken(messaging, {
    vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw",
    serviceWorkerRegistration: registration
  });
    if (!token) {
    console.log("No FCM token generated");
    return;
  }
  console.log("FCM TOKEN:", token);

  // if (auth.currentUser && token) {
  //   await saveToken(auth.currentUser.uid, token);
  // }


// Foreground messages
onMessage(messaging, (payload) => {
  console.log("Foreground message:", payload);
});

// Run after login
onAuthStateChanged(auth, (user) => {
  if (user) setupNotifications();
});

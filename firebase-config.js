// // firebase-config.js

// // Import Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js";

// // 🔹 Your Firebase config (your values here)
// const firebaseConfig = {
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// };

// // 🔹 Initialize Firebase services
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const messaging = getMessaging(app);

// // 🔹 Save FCM token to Firestore
// async function saveTokenToFirestore(uid, token) {
//   await setDoc(doc(db, "users", uid), { fcmToken: token }, { merge: true });
//   console.log("✅ Token saved for user:", uid);
// }

// // 🔹 Ask for notification permission
// export async function requestNotificationPermission() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       const token = await getToken(messaging, {
//         vapidKey: "BDzxroBm-YJ9yXFFR5FxaSuGl6GywXpuMz2DBdy8KvF2r1SAvqC05X1IgZW_Wk6Vibp0NYyUxH2tBNfCLfpUHbw" 
//       });
//       console.log("✅ Got FCM Token:", token);

//       if (auth.currentUser) {
//         await saveTokenToFirestore(auth.currentUser.uid, token);
//       }
//     } else {
//       console.log("❌ Notifications blocked by user");
//     }
//   } catch (err) {
//     console.error("⚠️ Error requesting notification:", err);
//   }
// }

// // 🔹 Foreground notifications
// onMessage(messaging, (payload) => {
//   console.log("📩 Foreground message:", payload);
//   new Notification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   });
// });

// // 🔹 Automatically request permission when user logs in
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     requestNotificationPermission();
//   }
// });
// // ...your existing firebase code (auth, messaging, etc.)

// // ✅ Register service worker for FCM
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then((registration) => {
//       console.log('✅ Service Worker registered with scope:', registration.scope);
//     })
//     .catch((err) => {
//       console.error('❌ Service Worker registration failed:', err);
//     });
// }


// firebase-messaging-sw.js
// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

// firebase.initializeApp({
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// });

// const messaging = firebase.messaging();

// // Background Notifications
// messaging.onBackgroundMessage((payload) => {
//   console.log("Background message:", payload);

//   const notificationTitle = payload.notification?.title || "StudMate";
//   const notificationOptions = {
//     body: payload.notification?.body,
//     icon: payload.notification?.icon || "/icon.png",
//     badge: "/icon.png"
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // Optional click behavior
// self.addEventListener("notificationclick", (event) => {
//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow("https://studmate-e1527.web.app")
//   );
// });


// firebase-messaging-sw.js

// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

// firebase.initializeApp({
//   apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
//   authDomain: "studmate-e1527.firebaseapp.com",
//   projectId: "studmate-e1527",
//   storageBucket: "studmate-e1527.appspot.com",
//   messagingSenderId: "156725135850",
//   appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
// });

// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//   const title =
//     payload.notification?.title ||
//     payload.data?.title ||
//     "StudMate";

//   const options = {
//     body:
//       payload.notification?.body ||
//       payload.data?.body ||
//       "You have a new update",
//     icon: "/icon.png",
//     badge: "/icon.png"
//   };

//   self.registration.showNotification(title, options);
// });

// // Notification click behavior
// self.addEventListener("notificationclick", (event) => {
//   event.notification.close();
//   event.waitUntil(
//     clients.matchAll({ type: "window", includeUncontrolled: true })
//       .then((clientList) => {
//         for (const client of clientList) {
//           if (client.url.includes("localhost") && "focus" in client) {
//             return client.focus();
//           }
//         }
//         return clients.openWindow("/");
//       })
//   );
// });


// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDt68xNiWU25HsWC2rsJfn0YlmCTd9Asbs",
  authDomain: "studmate-e1527.firebaseapp.com",
  projectId: "studmate-e1527",
  storageBucket: "studmate-e1527.appspot.com",
  messagingSenderId: "156725135850",
  appId: "1:156725135850:web:998c70a754ec3bbdb14a93"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "StudMate";
  const options = {
    body: payload.notification?.body || "You have a new update",
    icon: "/icon.png"
  };

  self.registration.showNotification(title, options);
});

// Click behavior
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

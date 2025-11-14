# Setting Up Firebase for RSVP Storage

Your wedding website is now ready to save RSVPs to a database! Here's how to set it up:

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name it something like "Wedding RSVP" or your couple name
4. Click "Create project"
5. Wait for the project to initialize

## Step 2: Set Up Firestore Database

1. In the Firebase Console, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Select "Start in production mode" (we'll secure it in the next step)
4. Choose your region (pick one closest to your location)
5. Click "Create"

## Step 3: Set Up Firestore Security Rules

1. In Firestore, go to the "Rules" tab
2. Replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{document=**} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

3. Click "Publish"

This allows anyone to submit RSVPs but prevents them from reading or deleting entries.

## Step 4: Get Your Firebase Config

1. In the Firebase Console, click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps"
3. Click on your web app (or create one if you don't see it)
4. Copy the configuration object that looks like:

```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
}
```

## Step 5: Configure Environment Variables

1. In your project root, copy `.env.example` to `.env.local`
2. Fill in each value from your Firebase config:
   - `REACT_APP_FIREBASE_API_KEY` = apiKey
   - `REACT_APP_FIREBASE_AUTH_DOMAIN` = authDomain
   - `REACT_APP_FIREBASE_PROJECT_ID` = projectId
   - `REACT_APP_FIREBASE_STORAGE_BUCKET` = storageBucket
   - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` = messagingSenderId
   - `REACT_APP_FIREBASE_APP_ID` = appId

3. Save the file

## Step 6: Restart Your Development Server

```bash
npm start
```

Your RSVPs will now be saved to the database!

## Viewing RSVPs

To see who has RSVP'd:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to "Firestore Database"
4. Look for the "rsvps" collection
5. Each entry shows:
   - name
   - attending (yes/no/maybe)
   - additionalGuests
   - totalGuests
   - timestamp

You can also export this data as CSV or download it anytime!

## Troubleshooting

**RSVPs not saving?**
- Check browser console for errors (F12)
- Make sure all environment variables are set correctly
- Verify Firestore security rules allow create
- Restart your development server after adding .env.local

**Want to see error messages?**
- Check the browser console (F12 → Console tab)
- Errors will be logged there with details

**Need to change limits?**
- Edit RSVP.js to change `max="10"` on the guests input
- Edit security rules to restrict submission (e.g., one per IP address)

Enjoy your wedding! 🎉

 ### CPSC349_Project 2 - Build a Web Game by using ReactJS
 If you'd like to contribute, help me create more games and upload into this branch.
 
 ### Documentation
  Follow all these instructions to run this project.
  
 ### Dependencies
  - Node: [http://nodejs.org/](http://nodejs.org/)
  - ReactJS: [https://reactjs.org](https://reactjs.org)
  - Bootstrap: [https://getbootstrap.com](https://getbootstrap.com)

### Initial Set Up

1. Clone the repository
2. `npm install`
3. `npm start` app start with your port number

### Setup Firebase Console to login into Facebook Authentication
In this Project, we will authenticate users with Firebase Facebook authentication.

**Step 1 - Enable Facebook Auth**
We need to open Firebase dashboard and click **Auth** in side menu. Next, we need to choose **SIGN-IN-METHOD** in tab bar. We will enable Facebook auth and leave this open since we need to add **App ID** and **App Secret** when we finish step 2.

**Step 2 - Create Facebook App**
To enable Facebook authentication, we need to create the Facebook app. Click on this link[https://developers.facebook.com/] to start. Once the app is created, we need to copy **App ID** and **App Secret** to the Firebase page, which we left open in step 1. We also need to copy **OAuth Redirect URI** from this window into the Facebook app. You can find **+ Add Product** inside side menu of the Facebook app dashboard.

Choose **Facebook Login** and it will appear in the side menu. You will find input field **Valid OAuth redirect URIs** where you need to copy the **OAuth Redirect URI** from Firebase.

**Step 3 - Connect to Facebook SDK**
Be sure to replace the 'APP_ID' from Facebook dashboard to the file public/index.html and also src/components/Facebook.js

**More Instruction how to connect FacebookSDK using Firebase**
[https://www.tutorialspoint.com/firebase/firebase_facebook_authentication.htm]
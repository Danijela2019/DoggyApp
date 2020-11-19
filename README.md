# DoggyApp

## Introduction

This is a mobile application for new dog owners developed by our team as part of the post gratuation project at [SALT](https://salt.study/) for the Lassy Company, a startup that is in still preparing too enter the market. 
 The app is developed with React Native (using [expo.io](https://expo.io/)) and TypeScript for the front end. The data is fetched from the backend using Apollo GraphQl.
 The back end code is in separate repo available on GitHub [here](https://github.com/Danijela2019/DoggyApp-backEnd). 

| ![DoggyApp Onboarding](onboarding.png)|  | ![DoggyApp Start](start.png) |  |![DoggyApp Knowledge](knowledge.png) |



## How to use it
- **Clone the repo: https://github.com/Danijela2019/DoggyApp.git**
- **Go (cd) to doggy-app folder**
- **Install packages: npm install**
- **Run the 'expo start' command**
- **Several options are available on how to proview the application on localhost:19002**
- **In order to see the full functionality of the app the backend part of the app must be runnig.**
-**To run the back end please clone this repo as well:https://github.com/Danijela2019/DoggyApp-backEnd and follow the instructions on how tu start the server[here](https://github.com/Danijela2019/DoggyApp-backEnd).** 

### Run it on a phisical device:
- **Go to Google Play or App Store and search for Expo**
- **Download the app, register and login for a free Expo account**
- **Open the app and in your terminal where Expo is running on your computer scan the QR code.**

### Run it on Android Studio Emulator:
- **Install Android Studio on your computer**
- **Follow the instructions how to set up the emulator for your own device [here](https://docs.expo.io/workflow/android-studio-emulator/).**
- **Open the app and in your terminal where Expo is running key press a to start the app in the emulator**

### Run it on IOS Simulator:
- **Follow the instructions how to set up the emulator for your own device [here](https://docs.expo.io/workflow/ios-simulator/).**
- **Open the app and in your terminal where Expo is running key press i to start the app in the emulator**

### Getting 'Error fetching articles' on the main screen
- If you are running the app on android studio emulator or android phisical device you might run into this problem. If that is the case go to the APP.tsx (doggy-app/App.tsx) file and change the IP adress from 'localhost:4000' to your own IP address here: 

```at App.tsx line:17
const client = new ApolloClient({
   uri: 'http://<your IP address>:4000',
  cache: new InMemoryCache(),
});
```


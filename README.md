# React Native Authentication App

This is a simple React Native app that includes a **Login** and **Sign Up** functionality, along with a "Remember Me" feature that saves the user's email in local storage. It is designed to demonstrate best practices in **form validation**, **local storage usage**, and **navigation**.

## Table of Contents

- [Installation](#installation)
- [How to Run the Project](#how-to-run-the-project)
- [Design Choices](#design-choices)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install dependencies**:
    - Ensure you have Node.js and npm installed. You can check this with:
    ```bash
    node -v
    npm -v
    ```
    - Install the required dependencies:
    ```bash
    npm install
    ```

3. **Install Expo CLI** (if you haven’t already):
    ```bash
    npm install -g expo-cli
    ```

4. **Run the project**:
    Start the Expo project using:
    ```bash
    expo start
    ```

    This will open a new page in your browser where you can scan the QR code to run the app on your mobile device.

## How to Run the Project

1. **Install Expo Go App**:
    - Download and install the Expo Go app from the App Store (iOS) or Google Play (Android).
   
2. **Scan QR Code**:
    - After running `expo start` in the terminal, a QR code will be displayed. Open Expo Go and scan the QR code to launch the app.

3. **Test the Application**:
    - Use the app to navigate between the **Sign Up**, **Login**, and **Home** screens.
    - **"Remember Me"** functionality will save the email to local storage.
    - If the email is found in local storage when the app starts, the user will be redirected to the **Home** screen.

## Design Choices

- **React Native with Expo**: The project uses Expo as a development environment for building the React Native app. Expo simplifies the setup process and provides built-in tools for fast development and testing.
  
- **Formik**: Formik is used for form management and validation. It helps with handling form values, errors, and submission in a concise way.

- **Yup**: Yup is used for form validation. It provides a clean way to define validation rules for form fields such as email and password.

- **Local Storage (AsyncStorage)**: Local storage is used to save the user's email when they choose the "Remember Me" checkbox. This helps improve user experience by retaining login credentials between app sessions.

- **Navigation**: React Navigation is used for navigating between the different screens in the app, including **Home**, **Login**, and **Sign Up**.

- **User Flow**: 
    - The app includes a simple user flow with **Login** and **Sign Up** forms.
    - The **Home screen** displays a welcome message if the user has previously logged in and saved their email via the "Remember Me" checkbox.

## Assumptions and Limitations

### Assumptions:
- The user has **React Native**, **Node.js**, and **npm** (or **yarn**) installed.
- The app uses **Expo Go** for testing, so the user needs the Expo Go app installed on their mobile device.
- The **remember me** feature is implemented by storing the email in **local storage** (using AsyncStorage), which is available in React Native by default.

### Limitations:
- **No Back-End Integration**: This app does not include any back-end authentication or user management. It only simulates a login and sign-up flow.
- **Password Handling**: The password is handled as plain text for the purposes of this project. In a production app, passwords should be hashed and securely stored using back-end services.
- **Local Storage Persistence**: The app depends on **AsyncStorage** for persisting the email. In real-world applications, it's better to use more secure solutions like **SecureStorage** for sensitive data.

### Future Improvements:
- **Back-End Integration**: In the future, this app can be connected to a back-end system for authentication, data persistence, and security.
- **Password Strength Indicator**: A password strength indicator could be added to the sign-up screen to improve the UX.
- **Multi-Platform Support**: The app can be enhanced for compatibility with both iOS and Android platforms.


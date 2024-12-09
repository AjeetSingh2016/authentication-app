import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

const Home = () => {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleLoginPress = () => {
    router.push("/login"); // Navigate to the login screen
  };

  const handleSignUpPress = () => {
    router.push("/signup"); // Navigate to the signup screen
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.logoContainer}>
        <Text style={{ fontWeight: "500", fontSize: 24 }}>Better</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ height: "60%", paddingTop: 50, paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 30 }}>Welcome</Text>
          <Text style={{ fontSize: 15, marginTop: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem temporibus molestiae.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: "40%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleLoginPress}
            style={[
              styles.button,
              { backgroundColor: "black", marginRight: 10 },
            ]}
          >
            <Text style={[styles.buttonText]}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
            <Text style={[styles.buttonText, { color: "black" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    backgroundColor: "white",
    // padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "#4CAF50",
    marginBottom: 20,
  },
  promptText: {
    fontSize: 18,
    color: "#FF5722",
    marginBottom: 20,
  },
  buttonContainer: {
    height: "50%",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FFB901",
  },
  logoContainer: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: "white",
    color: "black",
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "40%",
    // marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Home;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../src/utils/validation";
import Input from "../src/components/Input";
import Checkbox from "../src/components/Checkbox";
import { saveToStorage, getFromStorage } from "../src/utils/storage";
import { useRouter } from "expo-router";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const LoginScreen: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    const loadEmail = async () => {
      const savedEmail = await getFromStorage("userEmail");
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    };
    loadEmail();
  }, []);

  const handleLogin = async (values: { email: string; password: string }) => {
    if (rememberMe) {
      await saveToStorage("userEmail", values.email);
    }
    Alert.alert("Login Successful", `Welcome`);

    router.push("/welcome"); // Navigate to the home page after successful login
  };

  const handleCreateAccount = () => {
    router.push('/signup'); // Navigate to the sign-up page

    // Alert.alert('Login Successful');
  };

  return (
    <Formik
      initialValues={{ email: email, password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#FFB901" />
          {/* Top Container */}
          <View style={styles.topContainer}>
            <Text style={styles.headerText}>Welcome Back</Text>
            <Text style={styles.subHeaderText}>
              Login to your account to continue.
            </Text>
          </View>

          {/* Bottom Container */}
          <View style={styles.bottomContainer}>
            <Input
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={touched.email && errors.email}
              accessibilityLabel="Email Input"
            />
            <Input
              label="Password"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={touched.password && errors.password}
              accessibilityLabel="Password Input"
            />
            <View style={styles.checkboxContainer}>
              <Checkbox
                label="Remember Me"
                value={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                accessibilityLabel="Remember Me Checkbox"
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Create Account Link */}
            <TouchableOpacity onPress={handleCreateAccount} style={styles.link}>
              <Text style={styles.linkText}>
                Don't have an account? Create one
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB901",
  },
  topContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB901",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 40,
  },
  bottomContainer: {
    height: "50%",
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  checkboxContainer: {
    marginVertical: 10,
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "black",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  link: {
    marginTop: 15,
    alignItems: "center",
  },
  linkText: {
    color: "#FFB901",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;

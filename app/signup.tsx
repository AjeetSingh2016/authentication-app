import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Formik } from 'formik';
import { signUpValidationSchema } from '../src/utils/validation'; // Import the validation schema
import Input from '../src/components/Input';
import PasswordStrength from '../src/components/PasswordStrength';
import { saveToStorage } from '../src/utils/storage';
import { useRouter } from 'expo-router'; // Importing useRouter for navigation

const SignUpScreen: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState<'Weak' | 'Medium' | 'Strong'>('Weak');
  const router = useRouter(); // Initialize useRouter for navigation

  const handlePasswordChange = (password: string) => {
    const strength = password.length < 6
      ? 'Weak'
      : password.length < 12
      ? 'Medium'
      : 'Strong';
    setPasswordStrength(strength);
  };

  const handleSignUp = (values: { email: string; password: string }) => {
    saveToStorage('userEmail', values.email);
    Alert.alert('Sign Up Successful', `Welcome, ${values.email}!`);
  };

  const handleLogin = () => {
    router.push('/login'); // Navigate back to the login page
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSignUp}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#FFB901" />

          {/* Top Container */}
          <View style={styles.topContainer}>
            <Text style={styles.headerText}>Create Account</Text>
            <Text style={styles.subHeaderText}>
              Sign up to get started with your account.
            </Text>
          </View>

          {/* Bottom Container */}
          <View style={styles.bottomContainer}>
            <Input
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              accessibilityLabel="Email Input"
            />
            <Input
              label="Password"
              value={values.password}
              secureTextEntry
              onChangeText={(text) => {
                handleChange('password')(text);
                handlePasswordChange(text);
              }}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              accessibilityLabel="Password Input"
            />
            {values.password ? <PasswordStrength strength={passwordStrength} /> : null}
            <Input
              label="Confirm Password"
              value={values.confirmPassword}
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={touched.confirmPassword && errors.confirmPassword}
              accessibilityLabel="Confirm Password Input"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <TouchableOpacity onPress={handleLogin} style={styles.link}>
              <Text style={styles.linkText}>Already have an account? Log in</Text>
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
    backgroundColor: '#FFB901',
  },
  topContainer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB901',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 40,
  },
  bottomContainer: {
    height: '60%',
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFB901',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;

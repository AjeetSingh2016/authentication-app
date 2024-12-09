import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { removeFromStorage } from '@/src/utils/storage';
import { useRouter } from 'expo-router';

const Welcome: React.FC = () => {
  const router = useRouter();

  const handleLogoutPress = async () => {
    await removeFromStorage('userEmail');
    router.push('/'); // Navigate to the root screen (home)
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFB901" />
      
      {/* Top Container */}
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Text style={styles.subHeaderText}>
          It's great to see you!
        </Text>
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>We hope you’re enjoying the app.</Text>
        <TouchableOpacity onPress={handleLogoutPress} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB901',
  },
  topContainer: {
    height: '60%',
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
    height: '40%',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

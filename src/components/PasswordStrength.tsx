import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordStrengthProps {
  strength: 'Weak' | 'Medium' | 'Strong';
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const getStrengthColor = () => {
    switch (strength) {
      case 'Weak':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Strong':
        return 'green';
      default:
        return '#ccc';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: getStrengthColor() }]}>
        Password Strength: {strength}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default PasswordStrength;

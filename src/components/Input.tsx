import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  error?: string;
  accessibilityLabel?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  error,
  accessibilityLabel,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.errorBorder]}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        accessible={true}
        accessibilityLabel={accessibilityLabel}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Input;

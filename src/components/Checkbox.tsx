import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
  accessibilityLabel?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange, accessibilityLabel }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onChange}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={[styles.box, value && styles.checked]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#4CAF50',
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;

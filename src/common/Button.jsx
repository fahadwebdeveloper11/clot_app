import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Button = ({text, containerStyle = {}, textStyle = {}, ...props}) => {
  return (
    <TouchableOpacity  style={[styles.container, containerStyle]} {...props}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8E6CEF',
    padding: 12,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'center',
  },
});

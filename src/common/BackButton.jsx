import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIcon from '../assets/back.png';

const BackButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={BackIcon} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  image: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
});

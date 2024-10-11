import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText, onBlur, value, error, ...props}) => {
  return (
    <View style={{marginBottom: 12}}>
      <TextInput
        {...props}
        style={[styles.input, error && {borderColor: 'red', borderWidth: 1}]}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
        onChangeText={onChangeText} 
        onBlur={onBlur}
        value={value} 
      />
      {error && <Text style={{color: 'red', fontSize: 12}}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 56,
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#F4F4F4',
    color: '#262626',
    fontSize: 16,
    marginVertical: 8,
  },
});

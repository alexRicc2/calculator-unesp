import {Dimensions, StyleSheet, TouchableHighlight, Text} from 'react-native';
import React from 'react';

const Button = ({onPress, text, theme}: any) => {
  let buttonStyle;

  if (theme === 'secondary') {
    buttonStyle = [styles.button, {backgroundColor: '#666', height: Math.floor(screen.width / 5 - 2)}];
  } else {
    buttonStyle = [styles.button];
  }
  return (
    <TouchableHighlight onPress={onPress} style={buttonStyle}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};
export default Button;
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333333',
    height: Math.floor(buttonWidth),
    width: Math.floor(buttonWidth),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
 
});

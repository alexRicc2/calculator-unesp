import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Display = ({value, operador, prev}: any) => {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{prev}</Text>
      <Text style={styles.text}>{operador}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'flex-end',
    padding: 15,
  },
  text: {
    fontSize: 90,
  },
});

export default Display;

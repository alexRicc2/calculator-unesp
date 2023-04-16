/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Button from './components/calculator/button';
import Display from './components/calculator/display';

function App(): JSX.Element {
  const [valor, setValor] = useState<string>('0');
  const [operador, setOperador] = useState<string | null>(null);
  const [valorAnterior, setValorAnterior] = useState<string>('');

  const handleOperator = (operador: string) => {
    if (valorAnterior !== '') {
      resultado();
      return;
    }
    setValorAnterior(valor);
    setOperador(operador);
    setValor('0');
  };

  const concatNumber = (number: string) => {
    if (number === '.' && valor.includes('.')) {
      return;
    }
    if ((valor === '0' || valor === '') && number === '.') {
      setValor('0.');
      return;
    }
    if (valor === '0' || valor === '') {
      setValor(number);
      return;
    }
    setValor(prev => prev + number);
  };
  const del = () => {
    if (valor === '' && operador !== '') {
      setValor('');
      setOperador('');
    } else if (valor === '' && operador === '') {
      setValorAnterior(prev => prev.slice(0, -1));
    } else {
      setValor(prev => prev.slice(0, -1));
    }
  };
  const resultado = () => {
    const valorFloat = parseFloat(valor);
    if (valorAnterior == null) {
      setValor(prev => prev);
      return;
    }
    const valorAnteriorFloat = parseFloat(valorAnterior);
    switch (operador) {
      case '*':
        setValor(String(valorFloat * valorAnteriorFloat));
        break;
      case '+':
        setValor(String(valorFloat + valorAnteriorFloat));
        break;
      case '-':
        setValor(String(valorAnteriorFloat - valorFloat));
        break;
      case '/':
        if (valorAnteriorFloat !== 0) {
          setValor(String(valorAnteriorFloat / valorFloat));
        }
        break;
      default:
        setValor(prev => prev);
        break;
    }
    setValorAnterior('');
    setOperador(null);
  };
  return (
    <>
      <Display value={valor} operador={operador} prev={valorAnterior} />
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboard}>
          <Button text="7" onPress={() => concatNumber('7')} theme="primary" />
          <Button text="8" onPress={() => concatNumber('8')} theme="primary" />
          <Button text="9" onPress={() => concatNumber('9')} theme="primary" />
          <Button text="4" onPress={() => concatNumber('4')} theme="primary" />
          <Button text="5" onPress={() => concatNumber('5')} theme="primary" />
          <Button text="6" onPress={() => concatNumber('6')} theme="primary" />
          <Button text="1" onPress={() => concatNumber('1')} theme="primary" />
          <Button text="2" onPress={() => concatNumber('2')} theme="primary" />
          <Button text="3" onPress={() => concatNumber('3')} theme="primary" />
          <Button text="." onPress={() => concatNumber('.')} theme="primary" />
          <Button text="0" onPress={() => concatNumber('0')} theme="primary" />
          <Button text="=" onPress={() => resultado()} theme="primay" />
        </View>
        <View style={styles.keyboardSide}>
          <Button text="DEL" onPress={() => del()} theme="secondary" />
          <Button
            text="/"
            onPress={() => handleOperator('/')}
            theme="secondary"
          />
          <Button
            text="*"
            onPress={() => handleOperator('*')}
            theme="secondary"
          />
          <Button
            text="-"
            onPress={() => handleOperator('-')}
            theme="secondary"
          />
          <Button
            text="+"
            onPress={() => handleOperator('+')}
            theme="secondary"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#333',
    flex: 3,
  },
  keyboardSide: {
    flex: 1,
    backgroundColor: '#666',
  },
});

export default App;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard, Alert } from 'react-native';
import { styles } from '../theme/app-theme';

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('9');

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~';
    const passwordLength = parseInt(length) || 12;
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    Clipboard.setString(password);
    Alert.alert('Copiado', 'La contraseña ha sido copiada al portapapeles');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Generador de Contraseñas</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
        placeholder="Longitud de la contraseña"
      />

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Generar Contraseña</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordText}>{password}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Text style={styles.buttonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


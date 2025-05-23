import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const dummyEmail = 'user@gmail.com';
    const dummyPassword = 'user123';

    if (email === dummyEmail && password === dummyPassword) {
      navigation.replace('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your email or password and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./assets/icon.png')} />
          </View>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Please enter your details to login</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <Icon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#888"
                  style={styles.togglePassword}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.options}>
            <View style={styles.checkboxContainer}>
              {/* <CheckBox
                isChecked={rememberMe}
                onClick={() => setRememberMe(!rememberMe)}
              /> */}
              {/* <Text style={styles.checkboxText}>Remember me</Text> */}
            </View>
            {/* <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity> */}
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          {/* <Text style={styles.registerLink}>
            Don’t have an account?{' '}
            <Text style={styles.linkText} onPress={() => Alert.alert('Sign Up')}>Sign Up</Text>
          </Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    maxWidth: 450,
  },
  card: {
    padding: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  togglePassword: {
    marginLeft: -30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
    opacity: 0.5,
  },
  primaryButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginVertical: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerLink: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  linkText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

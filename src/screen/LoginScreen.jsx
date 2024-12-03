import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {loginAction} from '../store/useActions';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setOnFocusEmail(false), setOnFocusPassword(false);
    if (Email === 'reactnative@tot.com' && Password === 'Tot@123') {
      dispatch(loginAction());
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Enter valid email or password!');
    }
  };

  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPassword, setOnFocusPassword] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>LOGIN</Text>

        <View
          style={[
            styles.inputContainer,
            {
              borderBottomColor: onFocusEmail
                ? colors.primary
                : colors.buttonDiable,
            },
          ]}>
          <Ionicons
            name={'mail-outline'}
            color={onFocusEmail ? colors.primary : colors.buttonDiable}
            size={25}
          />
          <TextInput
            value={Email}
            onChangeText={setEmail}
            style={styles.textInput}
            placeholder="Email"
            onFocus={() => {
              setOnFocusEmail(true), setOnFocusPassword(false);
            }}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            {
              borderBottomColor: onFocusPassword
                ? colors.primary
                : colors.buttonDiable,
            },
          ]}>
          <MaterialCommunityIcons
            name={'shield-key-outline'}
            color={onFocusPassword ? colors.primary : colors.buttonDiable}
            size={25}
          />
          <TextInput
            value={Password}
            onChangeText={setPassword}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onFocus={() => {
              setOnFocusPassword(true), setOnFocusEmail(false);
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text
            style={[
              styles.buttonText,
              {
                backgroundColor:
                  Email !== '' && Password !== ''
                    ? colors.primary
                    : colors.buttonDiable,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 22,
    paddingVertical: 64,
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  heading: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 42,
    marginBottom: 22,
  },
  inputContainer: {
    borderBottomWidth: 1,
    marginHorizontal: 18,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 42,
    marginHorizontal: 20,
  },
  buttonText: {
    flex: 1,
    paddingVertical: 12,
    textAlign: 'center',
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

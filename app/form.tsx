import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ParticipantContext } from '@/lib/ParticipantProvider';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';

const Form = () => {
  const { participant, setParticipant } = useContext(ParticipantContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [companyName, setCompanyName] = useState('');
  // const [position, setPosition] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');

  //errors
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  // // const [companyNameError, setCompanyNameError] = useState('');
  // const [positionError, setPositionError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  // const [emailError, setEmailError] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    let valid = true;

    setFirstNameError('');
    setLastNameError('');

    if (!firstName) {
      setFirstNameError('First Name is required');
      valid = false;
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
      valid = false;
    }

    if (!valid) {
      return;
    }

    setParticipant((p) => {
      return {
        firstname: firstName,
        lastname: lastName,
        qrData: p.qrData,
      };
    });

    setParticipant((prevParticipant) => ({
      ...prevParticipant,
      firstname: firstName,
      lastname: lastName,
    }));

    router.push('/confirmForm');
  };

  useEffect(() => {
    console.log(participant);
    return () => {
      setParticipant((p) => {
        return { ...p!, qrData: '' };
      });
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.titleText}>PERSONAL DETAILS</Text>
            <Text style={styles.subtitleText}>
              Please input the following details
            </Text>
            <Text style={styles.inputTitle}>First Name</Text>
            <TextInput
              placeholder="John"
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
            {firstNameError && (
              <Text style={styles.errorText}>{firstNameError}</Text>
            )}

            <Text style={styles.inputTitle}>Last Name</Text>
            <TextInput
              placeholder="Dela Torre"
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            {lastNameError && (
              <Text style={styles.errorText}>{lastNameError}</Text>
            )}

            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                SUBMIT
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleText: {
    fontSize: 14,
    color: '#5F6266',
    textAlign: 'center',
    marginBottom: 60,
  },
  inputTitle: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#181B1E',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: -15,
    marginBottom: 10,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: '#181B1E',
    padding: 10,
    marginTop: 15,
  },
  submitButtonText: {
    color: '#FAF8F6',
    textAlign: 'center',
  },
});

export default Form;

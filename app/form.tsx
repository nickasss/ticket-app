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
} from 'react-native';
import { StyleSheet } from 'react-native';

const Form = () => {
  const { participant, setParticipant } = useContext(ParticipantContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [batchYear, setBatchYear] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  //errors
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [companyNameError, setcompanyNameError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [batchYearError, setBatchYearError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setemailError] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    let valid = true;

    setFirstNameError('');
    setLastNameError('');
    setcompanyNameError('');
    setTitleError('');
    setBatchYearError('');

    if (!firstName) {
      setFirstNameError('First Name is required');
      valid = false;
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
      valid = false;
    }

    if (companyName && !title) {
      setTitleError('Title is required if company name is provided');
      valid = false;
    }

    if (!email) {
      setemailError('Email is required');
      valid = false;
    }

    if (!phone) {
      setPhoneError('Phone Number is required');
      valid = false;
    }

    const currentYear = new Date().getFullYear();
    const batchYearNum = parseInt(batchYear, 10);
    if (!batchYear) {
      setBatchYearError('Batch Year is required');
      valid = false;
    } else if (
      batchYear.length !== 4 ||
      batchYearNum > currentYear ||
      batchYearNum < 2008
    ) {
      setBatchYearError(
        'Batch year must be a 4-digit number between 2008 and the current year'
      );
      valid = false;
    }

    if (!valid) {
      return;
    }

    setParticipant((p) => {
      return {
        batch: batchYear,
        company: companyName,
        firstname: firstName,
        lastname: lastName,
        qrData: p.qrData,
        title: title,
        phone: phone,
        email: email
      };
    });

    console.log([firstName, lastName, companyName, title, batchYear]);
    setParticipant((prevParticipant) => ({
      ...prevParticipant,
      firstname: firstName,
      lastname: lastName,
      company: companyName,
      title: title,
      batch: batchYear,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>PERSONAL DETAILS</Text>
          <Text style={styles.subTitleText}>
            Please input the following details
          </Text>
          <Text style={styles.inputTitle}>First Name</Text>
          <TextInput
            placeholder="Write your First Name"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
          {firstNameError && (
            <Text style={styles.errorText}>{firstNameError}</Text>
          )}

          <Text style={styles.inputTitle}>Last Name</Text>
          <TextInput
            placeholder="Write your Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
          {lastNameError && (
            <Text style={styles.errorText}>{lastNameError}</Text>
          )}

          <Text style={styles.inputTitle}>Company</Text>
          <TextInput
            placeholder="Write your Company Name"
            style={styles.input}
            value={companyName}
            onChangeText={setCompanyName}
          />

          <Text style={styles.inputTitle}>Title</Text>
          <TextInput
            placeholder="Write your Title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          {titleError && <Text style={styles.errorText}>{titleError}</Text>}

          <Text style={styles.inputTitle}>Batch Year</Text>
          <TextInput
            placeholder="Write your Batch Year"
            style={styles.input}
            value={batchYear}
            inputMode="numeric"
            keyboardType="numeric"
            onChangeText={setBatchYear}
          />
          {batchYearError && (
            <Text style={styles.errorText}>{batchYearError}</Text>
          )}

          <Text>Phone Number</Text>
          <TextInput
            placeholder="Write your Phone Number"
            style={styles.input}
            value={phone}
            inputMode="text"
            onChangeText={setPhone}
          />
          {phoneError && <Text style={styles.errorText}>{phoneError}</Text>}
          <Text>Email</Text>
          <TextInput
            placeholder="Write your Email"
            style={styles.input}
            value={email}
            inputMode="email"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
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
  subTitleText: {
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

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ParticipantContext } from '@/lib/ParticipantProvider';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StyleSheet } from 'react-native';

const Form = () => {
  const { participant, setParticipant } = useContext(ParticipantContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [batchYear, setbatchYear] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    // required: names, batch year
    // optional: company name, title
    // if may company name, required title
    // batch year is 4 digits
    // 2008 to present 

    if (firstName === '') {
      console.log('way man ni unod');
    }
    console.log([firstName, lastName, companyName, title, batchYear]);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.FormContainer}>
        <Text style={styles.titleText}>PERSONAL DETAILS</Text>
        <Text style={styles.subTitleText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>First Name</Text>

              <TextInput
                placeholder="Write your First Name"
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
              />

          <Text style={styles.inputTitle}>Last Name</Text>
          <TextInput
            placeholder="Write your Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.inputTitle}>Company</Text>
          <TextInput
            placeholder="Write your Company Name"
            style={styles.input}
            value={companyName}
            onChangeText={setcompanyName}
          />

          <Text style={styles.inputTitle}>Title</Text>
          <TextInput
            placeholder="Write your Title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.inputTitle}>Batch Year</Text>
          <TextInput
            placeholder="Write your Batch Year"
            style={styles.input}
            value={batchYear}
            inputMode="numeric"
            keyboardType="numeric"
            onChangeText={setbatchYear}
          />
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text>SUBMIT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F6',
  },
  FormContainer: {
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
  inputGroup: {
    marginBottom: 150,
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
  submitButton: {
    borderRadius: 20,
    backgroundColor: '#181B1E',
    padding: 10,
  },
  submitButtonText: {
    color: '#FAF8F6',
    textAlign: 'center',
  },
});

export default Form;

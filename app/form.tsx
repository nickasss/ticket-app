import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Form = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.FormContainer}>
        <Text style={styles.titleText}>PERSONAL DETAILS</Text>
        <Text style={styles.subTitleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>First Name</Text>
          <TextInput placeholder="Write your First Name" style={styles.input} />

          <Text style={styles.inputTitle}>Last Name</Text>
          <TextInput placeholder="Write your Last Name" style={styles.input} />

          <Text style={styles.inputTitle}>Company</Text>
          <TextInput placeholder="Write your Company Name" style={styles.input} />

          <Text style={styles.inputTitle}>Title</Text>
          <TextInput placeholder="Write your Title" style={styles.input} />

          <Text style={styles.inputTitle}>Batch Year</Text>
          <TextInput placeholder="Write your Batch Year" style={styles.input} />
        </View>
        
        <TouchableOpacity style={styles.submitButton}>
          <Link href="/confirmForm" style={styles.submitButtonText}>
            SUBMIT
          </Link>
        </TouchableOpacity>
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
    marginBottom: 200,
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
 
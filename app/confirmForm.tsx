import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { Link, router, } from 'expo-router';
import { ParticipantContext } from '@/lib/ParticipantProvider';

const ConfirmForm = () => {
  const {participant} = useContext(ParticipantContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>CONFIRM DETAILS</Text>
      <Text style={styles.subTitleText}>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <View style={styles.confirmationContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.inputText}>{participant!.firstname} {participant!.lastname}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Company:</Text>
          <Text style={styles.inputText}>{participant!.company}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.inputText}>{participant!.title}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Batch Year:</Text>
          <Text style={styles.inputText}>{participant!.batch}</Text>
        </View>
      </View>

      <Link href="/end" style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </Link>
    </SafeAreaView>
  );
};

export default ConfirmForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6e6e6e',
    marginBottom: 20,
  },
  confirmationContainer: {
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

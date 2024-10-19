import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { Link } from 'expo-router';
import { ParticipantContext } from '@/lib/ParticipantProvider';

const ConfirmForm = () => {
  const { participant } = useContext(ParticipantContext);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CONFIRM DETAILS</Text>
      <Text style={styles.subTitleText}>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <View style={styles.confirmationContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.inputText}>
            {participant!.firstname} {participant!.lastname}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Company:</Text>
          <Text style={styles.inputText}>{participant!.company}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.inputText}>{participant!.position}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.inputText}>{participant!.phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.inputText}>{participant!.email}</Text>
        </View>
      </View>
      <Link href="/end" style={{ alignSelf: 'center' }}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </View>
      </Link>
    </View>
  );
};

export default ConfirmForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
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
    padding: 20,
    justifyContent: 'center',
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
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    width: 200,
    borderWidth: 5,
    borderRadius: 20,
  },
  submitButtonText: {
    borderRadius: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
  },
});

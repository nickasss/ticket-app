import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ParticipantContext } from '@/lib/ParticipantProvider';

const End = () => {
  const { participant } = useContext(ParticipantContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("trying to send data to db")
    if (participant?.qrData) {
      setDoc(doc(db, 'tickets', participant.qrData), {
        batch: participant.batch,
        company: participant.company,
        firstName: participant.firstname,
        lastName: participant.lastname,
        title: participant.title
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true)
      });
    }
  }, []);

  if (error)
    return (
      <SafeAreaView>
        <Text>Error</Text>
      </SafeAreaView>
    );
  if (loading)
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <Text>Thank you. Your form has been submitted.</Text>
      <Link href="/">
        <Text>Return to Camera</Text>
      </Link>
    </SafeAreaView>
  );
};

export default End;

const styles = StyleSheet.create({});

import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { useRouter, Link, useNavigation } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect, useState } from 'react';
import { ParticipantContext } from '@/lib/ParticipantProvider';

const Index = () => {
  const { participant, setParticipant } = useContext(ParticipantContext);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const router = useRouter();
  const nav = useNavigation();

  useEffect(() => {
    const unsubscribe = nav.addListener('focus', () => {
      setParticipant((p) => {
        return { ...p, qrData: '' };
      });
    });

    return () => unsubscribe();
  }, []);

  if (!cameraPermission) {
    console.log('loading');
    // Camera permissions are still loading.
    return <View />;
  }
  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet.
    console.log('asking');
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>

        <Button onPress={requestCameraPermission} title="Grant Permission" />
        <Text>We need your permission to show the camera</Text>
        </View>
      </SafeAreaView>
    );
  }
  console.log('permission granted');
  console.log(participant);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Please scan the QR code provided.</Text>
        <CameraView
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          style={styles.camera}
          facing={'back'}
          ratio={'1:1'}
          onBarcodeScanned={({ data }) => {
            if (!participant?.qrData) {
              console.log('Not scanned yet');
              setParticipant((p) => {
                return { ...p, qrData: data };
              });
              router.push('/form');
            }
          }}
        ></CameraView>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    width: "100%"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  camera: {
    height: '60%',
    width: '60%',
  },
});

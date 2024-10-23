import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect } from 'react';
import { ParticipantContext } from '@/lib/ParticipantProvider';

const Index = () => {
  const { participant, setParticipant } = useContext(ParticipantContext);
  const [cameraPermission] = useCameraPermissions();
  const router = useRouter();
  const nav = useNavigation();

  useEffect(() => {
    const unsubscribe = nav.addListener('focus', () => {
      setParticipant((p) => ({
        ...p,
        qrData: ''
      }));
    });

    return () => unsubscribe();
  }, [nav, setParticipant]);

  // Simplified permission handling since we request in RootLayout
  if (!cameraPermission?.granted) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text>Camera permission is required to use this app.</Text>
          <Text>Please grant permission in your device settings.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Please scan the QR code provided.</Text>
        <CameraView
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          style={styles.camera}
          facing="back"
          ratio="1:1"
          onBarcodeScanned={({ data }) => {
            if (!participant?.qrData) {
              setParticipant((p) => ({
                ...p,
                qrData: data
              }));
              router.push('/form');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
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

export default Index;
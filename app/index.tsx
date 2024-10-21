import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect } from 'react';
import { ParticipantContext } from '@/lib/ParticipantProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    return <View />;
  }
  if (!cameraPermission.granted) {
    console.log('asking');
    return (
      <SafeAreaView style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </SafeAreaView>
    );
  }
  console.log('permission granted');
  console.log(participant);
  return (
    <SafeAreaView style={{...styles.safeContainer, flex: 1}}>
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

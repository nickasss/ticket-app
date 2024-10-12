import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import { useRouter,Link } from 'expo-router'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';


const Index = () => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [data, setData] = useState("");
  const [cameraContent, setCameraContent] = useState();
  const router = useRouter();
  if (!cameraPermission) {
    console.log("loading");
    // Camera permissions are still loading.
    return <View />;
  }
  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet.
    console.log("asking");
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }
  console.log("permission granted");
  return (
    <SafeAreaView style= {styles.container}>
      <Text>Camera Screen</Text>
    <CameraView style={styles.camera} facing={'back'} onBarcodeScanned={({data}) => {
      setData(data);
      if (data) { 
        router.push("/form")
      }
    }}>
    </CameraView>
    <Link href={"/form"}>
        <Text>Hello world</Text>
      </Link>
    </SafeAreaView> 
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    height: '60%',
    width: '60%',
  },
})
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";

const Index = () => {

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [data, setData] = useState("");
  const [hasCameraContent, setHasCameraContent] = useState(false);
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
    <SafeAreaView style={styles.container}>
      <Text>Camera Screen</Text>
      <CameraView
        style={styles.camera}
        facing={"back"}
        ratio={"1:1"}
        onBarcodeScanned={({data}) => {
          console.log(data)
          setData(data);
          setTimeout(()=>{
            setHasCameraContent(true)
          }, 1000)
          if (hasCameraContent) {
            router.push("/form");
            setHasCameraContent(false)
          }

        }}
      ></CameraView>
      <Link href={"/form"}>
        <Text>Hello world</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    height: "60%",
    width: "60%",
  },
});

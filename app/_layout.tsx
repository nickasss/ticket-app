// RootLayout.tsx
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import ParticipantProvider from '@/lib/ParticipantProvider';
import { useCameraPermissions } from 'expo-camera';

// Keep splash screen visible
SplashScreen.preventAutoHideAsync().catch(() => {
  /* ignore error */
});

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, permissions, etc.
        if (!permission?.granted) {
          await requestPermission();
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (loaded && isReady) {
      // Hide splash screen once everything is ready
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [loaded, isReady]);

  if (!loaded || !isReady) {
    return <View />;
  }

  return (
    <ParticipantProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ParticipantProvider>
  );
}

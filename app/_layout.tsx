import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Link, Stack } from 'expo-router';
import { Button, Text } from 'react-native';
import ParticipantProvider from '@/lib/ParticipantProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
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

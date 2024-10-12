
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Link, Stack } from 'expo-router';
import { Button, Text } from 'react-native';

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
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
        title: ""
      }} />
      <Stack.Screen name="form" options={{
        headerTitle: "",
      }} />
      <Stack.Screen name="confirmForm" options={{
        title: ""
      }} />
      <Stack.Screen name="end" options={{
        headerShown: false
      }} />
    </Stack>
  );
}

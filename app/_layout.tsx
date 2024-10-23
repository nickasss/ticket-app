import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Link, Stack } from 'expo-router';
import ParticipantProvider from '@/lib/ParticipantProvider';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Add any other fonts you need here
  });

  useEffect(() => {
    if (error) console.log('Font loading error:', error);
  }, [error]);

 useEffect(() => {
  if (loaded) {
    // Force hide splash screen after 5 seconds if something goes wrong
    const timeout = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {});
    }, 5000);

    return () => clearTimeout(timeout);
  }
}, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ParticipantProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ParticipantProvider>
    </View>
  );
}

const onLayoutRootView = useCallback(async () => {
  try {
    await SplashScreen.hideAsync();
  } catch (e) {
    // Ignore errors
    console.warn('Error hiding splash screen:', e);
  }
}, []);
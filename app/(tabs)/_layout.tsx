import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />
      <Stack.Screen name="form" />
      <Stack.Screen name="confirmForm" options={{
        headerLeft: () => <Button onPress={() => {console.log("Hello beech")}} title='ror' />
      }} />
      <Stack.Screen name="end" />
    </Stack>
  );
}

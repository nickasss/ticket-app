import { Stack } from 'expo-router';
import ParticipantProvider from '@/lib/ParticipantProvider';
import { useEffect } from 'react';

export default function RootLayout() {

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

import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const End = () => {
  return (
    <SafeAreaView>
      <Text>Thnk you. Your form has been submitted.</Text>
      <Link href="/">
        <Text>
        Return to Camera
        </Text>
      </Link>
    </SafeAreaView>
  )
}

export default End

const styles = StyleSheet.create({})
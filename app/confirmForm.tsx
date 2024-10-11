import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const confirmForm = () => {
  return (
    <SafeAreaView>
      <Text>Please confirm your Identity</Text>
      <Link href={"/end"}>
        <Text>
          Confirm
        </Text>
      </Link>
    </SafeAreaView>
  )
}

export default confirmForm

const styles = StyleSheet.create({})
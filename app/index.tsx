import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <SafeAreaView>
      <Text>Camera Screen</Text>
      <Link href={"/form"}>
        <Text>Hello world</Text>
      </Link>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({})
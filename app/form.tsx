import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Form = () => {
  return (
    <SafeAreaView>
      <Text>Form Screen</Text>

      <Link href={"/confirmForm"}>
        <Text>
          Submit Form
        </Text>
        
      </Link>
    </SafeAreaView>
  )
}

export default Form

const styles = StyleSheet.create({})
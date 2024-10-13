import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Link } from 'expo-router'
import { ParticipantContext } from '@/lib/ParticipantProvider'

const Form = () => {
  const {participant, setParticipant} = useContext(ParticipantContext);
  useEffect(() => {
    console.log(participant)
    return () => {
      setParticipant(p => {
        return {...p!, qrData: ""}
      })
    }
  }, [])
  
  return (
    <SafeAreaView>
      <Text>Form Screen</Text>
      <Link href={"./confirmForm"} >
        <Text>
          Submit Form
        </Text>
      </Link>
    </SafeAreaView>
  )
}

export default Form

const styles = StyleSheet.create({})
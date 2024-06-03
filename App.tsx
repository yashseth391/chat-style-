import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Whatsapp from './components/Whatsapp'
import Status from './components/Status'
export default function App() {
  return (
    <View>
      <Whatsapp/>
      <Status/>
    </View>
  )
}

const styles = StyleSheet.create({})
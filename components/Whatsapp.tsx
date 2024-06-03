import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function whatsapp() {
  return (
    <View>
      <View style={styles.header}>
        <ScrollView>
        <Text style={styles.heading}>Whatsapp</Text>
        </ScrollView>
      
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:24,
    fontWeight:'bold',
    margin:8,
    color:'white',
  },
  header:{
    height:60,
    width:200,
    
  },
})
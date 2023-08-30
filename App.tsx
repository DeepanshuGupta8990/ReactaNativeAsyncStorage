import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const setData = ()=>{
    AsyncStorage.setItem("name","Deepanshu Gupta",()=>{console.log('item is set')})
  }
  const getData = async()=>{
    const name = await AsyncStorage.getItem("name");
    console.log(name)
  }
  return (
    <View>
      <View style={{margin:20}}>
      <Button title='Set Data' onPress={setData}/>
      </View>
      <View style={{margin:20}}>
      <Button title='Show Data' onPress={getData}/>
      </View>
      <View style={{margin:20}}>
      <Button title='Clear Data' onPress={()=>{AsyncStorage.clear()}}/>
      </View>
    </View>
  )
}

export default App
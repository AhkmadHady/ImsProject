import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Komputer = ({route}) => {
  const item = route.params; 
  const name = item.name; 
  const icon = item.icon; 
  return (
    <View style={styles.page}>
     
      <Image
            style={styles.tinyLogo}
            source={{
            uri:icon, 
            }}
        /> 
       <Text>{name}</Text>
    </View>
  )
}

export default Komputer


const styles = StyleSheet.create({
  page:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
})

import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Button = ({onPress,url}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.body}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri:url, 
        }}
      /> 
        </View>
    </TouchableOpacity> 
  )
}

export default Button;

const styles = StyleSheet.create({
    body: {
        width: 35,
        higth:35,
        justifyContent:'center',
        alignItems:'center', 
    },

    tinyLogo: {
        width: 35,
        height: 35,
      },
})
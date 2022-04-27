import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonMenu = ({label,onPress,url}) => {
  return (
    
        <View style={styles.body}>
            <View style={styles.images}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri:url, 
                    }}
                /> 
            </View>
            <Text style={styles.titleMenu}>{label}</Text>
        </View> 
  )
}

export default ButtonMenu

const styles = StyleSheet.create({
    body:{justifyContent: 'center', alignItems: 'center', marginHorizontal: 8},
    images:{
        backgroundColor: '#F2F2F2',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleMenu: {
        color: '#000',
        fontSize: 10, 
        textAlign: 'center',
        marginTop: 6,
      },
    tinyLogo: {
        width: 35,
        height: 35,
      },
})
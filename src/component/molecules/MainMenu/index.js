import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonMenu from '../../atoms/ButtonMenu'
import { getData } from '../../../utils/storage'

const MainMenu = ({iconlainnya,label,onPress}) => {
  
   
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.conten}>
          <ButtonMenu url={iconlainnya} label={label}/> 
      </View>
    </TouchableOpacity>
  )
}

export default MainMenu
const styles = StyleSheet.create({
    conten:{
        flexDirection:'row',
        justifyContent:'space-between', 
    }
})
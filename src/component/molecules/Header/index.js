import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Textinput } from '../../atoms'

const Header = () => {
  return (
    <View style={styles.body}>
        <View style={styles.contenText}>
            <Textinput />
        </View>
        <View>
            <Gap height={12} />
            <Button url='https://flyclipart.com/thumb2/hamburger-menu-list-menu-icon-with-png-and-vector-format-842819.png'/>
        </View>
        
    </View>  
  ) 
}
export default Header

const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 5,
        borderBottomColor: '#F6F6F6', 
    },
    contenText:{
        width:'90%'
    }
})
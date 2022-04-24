import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonMenu from '../../atoms/ButtonMenu'
import { getData } from '../../../utils/storage'

const MainMenu = ({iconlainnya,iconkeuangan,icontagihan,iconcat,iconkomputer,iconfashion,iconpesta,iconkantor,icontravel}) => {
  
   
  return (
    <View style={styles.conten}>
        
        <ButtonMenu url={iconlainnya} label="Menu Lainnya"/>
        <ButtonMenu url={iconkeuangan} label="Keuangan"/>
        <ButtonMenu url={icontagihan} label="Tagihan"/>
        <ButtonMenu url={iconcat} label="Cat"/>
        <ButtonMenu url={iconkomputer} label="Kompter & Hanphone"/>
        <ButtonMenu url={icontravel} label="Travel"/>
        <ButtonMenu url={iconfashion} label="Fashion Wanita"/>
        <ButtonMenu url={iconpesta} label="Perlengkapan Pesta"/>
        <ButtonMenu url={iconkantor} label="Alat Kantor"/> 
    </View>
  )
}

export default MainMenu
const styles = StyleSheet.create({
    conten:{
        flexDirection:'row',
        justifyContent:'space-between', 
    }
})
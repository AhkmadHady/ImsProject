import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { height } from '@mui/system'
import { Gap } from '../../atoms'

const Diskon = ({url, harga, namabarang,lokasi,terjual}) => {
  return (
    <View style={styles.page}>
        <View style={styles.conten}>
            <Image 
                 style={styles.imgProduct}
                 source={{
                 uri:url, 
                 }}
            />
            <Gap height={3} />
            <Text style={styles.harga}>{harga}</Text>
            <Gap height={5} /> 
            <Text style={styles.namaProduct}>{namabarang}</Text>
            <Gap height={5} />
            <Text style={styles.lokasi}>{lokasi}</Text>
            <Gap height={20} /> 
            <Text style={styles.terjual}>{terjual}</Text>
        </View>
    </View>
  )
}

export default Diskon

const styles = StyleSheet.create({
    page:{
        paddingHorizontal: 5
    },

    imgProduct: { 
        width: 168,
        height: 150, 
        borderTopLeftRadius:4,
        borderTopRightRadius:4
      },


    conten:{
        width: 170,
        height:300,
        borderWidth: 1,
        borderColor: '#A5A5A5',
        borderRadius:4
    },
    
    harga:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        paddingLeft:3
    }, 
    lokasi:{
        fontSize:14, 
        color:'blue',
        paddingLeft:3
    },
    namaProduct:{
        fontSize:14,  
        paddingLeft:3
    },
    terjual:{
        fontSize:14,  
        paddingLeft:3, 
    }
})
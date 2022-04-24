import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const ImageBanner = ({url}) => {
  return (
    <View style={styles.page}>
       <Image
            style={styles.tinyLogo}
            source={{
            uri:url, 
            }}
        /> 
    </View>
  )
}

       
                {/* <MainMenu iconlainnya='https://icons.veryicon.com/png/o/miscellaneous/common-icons-6/more-106.png' iconkeuangan='https://www.clipartmax.com/png/middle/311-3112928_payment-icon-white-clipart-payment-computer-icons-credit-pay-icon.png' icontagihan='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiuH1ZE849MASz3rnHNsLuP0aR8ZKd7zSuQ&usqp=CAU' iconcat='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMxDQ7GuQJT080ueeZPGEqfSIG-0EXO9vlQ&usqp=CAU' iconkomputer='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzrSLlLUyLMKxB7eWWMGIf6coQlrCluUHZw&usqp=CAU' iconfashion='https://img.favpng.com/3/22/22/computer-icons-fashion-icon-design-woman-png-favpng-JwWehgG64eUX6AJYJ7fvKzUiB.jpg' iconpesta='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgijnVMc_JpkNDykr0l8DyIeZKwBaHIFsiuA&usqp=CAU' iconkantor='https://cdn-icons-png.flaticon.com/512/2206/2206538.png' icontravel='https://toppng.com/uploads/preview/travel-icons-travel-icon-free-1155345307059cfuzjxyz.png'/> */}

export default ImageBanner

const styles = StyleSheet.create({
    tinyLogo: { 
        width: 270,
        height: 150,
        borderRadius:10
      },

    page:{
        paddingHorizontal:5
    }
})
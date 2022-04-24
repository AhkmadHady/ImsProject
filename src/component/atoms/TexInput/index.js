import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react' 

const TextInput = () => {
    
  return (
    <View>
      <TextInputRN
        style={styles.input}
        placeholder="Pencarian "
      />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    input: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        borderColor :'#CFCFD5',
        borderRadius: 6,
        backgroundColor:'#fff',
        color:'#000'
      },
})
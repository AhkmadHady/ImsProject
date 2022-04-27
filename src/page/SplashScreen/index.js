import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, storeData } from '../../utils/storage';



const SplashScreen = ({navigation}) => {

  const [icon, setIcon] = useState([])
  const [title, setTitle] = useState('Loading ...')
  
  const endPoint        = 'https://mocki.io/v1/7732c205-c556-41a2-a2a8-46c9866492f5';

 // Pertanyaan
 const fetchIcon = async(url) => {
  try {
  const response = await fetch(url, {
      method: 'GET',
  })

  const data = await response.json(); 
  setIcon(data.data) 
  AsyncStorage.multiRemove(['icon']);
  storeData('icon', {value: data});
  console.log(data)
    if (!response.ok) {
        setTitle('Terjadi kesalahan fetch API')
    }

  } catch (e) {
      // console.log(`Error: ${e}`);
  }
}

// get data storege
const getDataIcon = () => {
  setTimeout(() => {
    getData('icon').then(res => {
      const datares = res;
      console.log(res);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      if (datares) {
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      }else{
         setTitle('Terjadi kesalahan  pada storage')
     
      }
    }); 
  }, 2000);
}

useEffect(() => {
  fetchIcon(endPoint)
  getDataIcon();
},[])

    return (
      <View style={styles.page}>
        <Text>{title}</Text>
      </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
  page:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
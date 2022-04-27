import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, storeData } from '../../utils/storage';



const SplashScreen = ({navigation}) => {

  const [icon, setIcon] = useState([])
  
  const endPoint        = 'http://demo.sipontren.com';

 // Pertanyaan
 const fetchIcon = async(url) => {
  try {
  const response = await fetch(url+'/api/icon', {
      method: 'GET',
  })

  const data = await response.json(); 
  setIcon(data.data) 
  storeData('icon', {data});
  //localStorage.setItem("icon", JSON.stringify(data));
  if (!response.ok) {
      console.log('Terjadi kesalahan');
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
      if (datares) {
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      } 
    }); 
  }, 2000);
}

useEffect(() => {
  AsyncStorage.multiRemove(['icon']);
  fetchIcon(endPoint)
  getDataIcon();
},[])


    return (
      <View style={styles.page}>
        <Text>Loading ...</Text>
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
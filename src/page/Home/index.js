  
import React,{useEffect, useState} from 'react'; 
import { 
  StyleSheet,
  Text, 
  View,ScrollView,
} from 'react-native';

import { Colapse, Diskon, Gap, Header, ImageBanner, MainMenu } from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, storeData } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); 
  const [diskon, setDiskon]             = useState([])
  const [carabeli, setCarabeli]         = useState([])
  const [dataIcon, setDataIcon]         = useState([]) 

  useEffect(() => {
    fetchDiskon()
    fetchPertanyaan() 
    getIcon()
  }, [])

    // Diskon
  const fetchDiskon = async(url) => {
      try {
        const response = await fetch('https://mocki.io/v1/2cf1c783-3502-40e8-9927-08b63d55da39', {
            method: 'GET',
        })

        const data = await response.json();
        setDiskon(data.data)
       // console.log(data.data);
        if (!response.ok) {
            console.log('Terjadi kesalahan');
        }
      } catch (e) {
          console.log(`Error: ${e}`);
      }
  }

    // Pertanyaan
    const fetchPertanyaan = async(url) => {
        try {
        const response = await fetch('https://mocki.io/v1/962c28ce-c629-4e2a-be36-e78700af6810', {
            method: 'GET',
        })

        const data = await response.json(); 
        setCarabeli(data.data)

        if (!response.ok) {
            console.log('Terjadi kesalahan');
        }
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    } 

    function getIcon() {
      setTimeout(() => {
        getData('icon').then(res => {
          const datares = res;
          if (datares) {
            setDataIcon(datares.value.data);  
          }else{
            setDataIcon(); 
          }
        });
      }, 1000); 
    }

  return ( 
   <>
      <ScrollView> 
          <View style={styles.headerPage}>
            <Header />
          </View>
          <Gap height={30} />
          <View>
            <Text style={styles.titleMenu}>Main Menu</Text> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
             
             {dataIcon.length > 0 ? (
                    dataIcon.map((itemIcon, i) => {
                      
                    return(
                        
                        <View key={i}>
                            <MainMenu iconlainnya={itemIcon.icon} label={itemIcon.name} onPress={() => navigation.navigate(`${itemIcon.page}`,itemIcon)}/>
                        </View>
                    )
                })
                ) : (<View>
                  <MainMenu iconlainnya="-" label=""/>
              </View>)} 
            </ScrollView> 
          </View>
          <Gap height={30} />
          <View>
              <Text style={styles.titleBanner}>Banner Informasi</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
                  <ImageBanner url='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/4/20/a1d48684-c219-454a-b773-3410b7f0107b.jpg.webp?ect=3g'/>
                  <ImageBanner url='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/4/19/1fe9f23e-31cc-4304-a9d6-42c9db7f53d2.jpg.webp?ect=3g'/> 
                  <ImageBanner url='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/4/23/5c4ade45-c9b1-427e-9701-bf182ba48b2f.jpg.webp?ect=3g'/> 
                  <ImageBanner url='https://picsum.photos/200/300/?blur=2'/> 
                  <ImageBanner url='https://picsum.photos/seed/picsum/200/300'/> 
              </ScrollView>  
          </View>
          <Gap height={30} />
          <View>
            <Text style={styles.titleMenu}>Barang Diskon</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
                {diskon.length > 0 ? (
                    diskon.map((itemdiskon, i) => {
                    return(
                        <View key={i}>
                            <Diskon key={i} url={itemdiskon.image} terjual={itemdiskon.terjual} lokasi={itemdiskon.lokasi} namabarang={itemdiskon.nama_product} harga={`Rp. ${itemdiskon.harga}`}/> 
                        </View>
                    )
                })
                ) : ( <View>
                    <Text>Tidak ada data</Text>

                </View> )}
            </ScrollView>  
          </View>
          <Gap height={30} /> 
          <View> 
            <Text style={styles.titleMenu}>Hal yang sering ditanyakan</Text>
                {carabeli.length > 0 ? (
                    carabeli.map((item, i) => {
                    return(
                        <View key={i}>
                            <Colapse titleHeader={item.title} textConten={item.description} />
                        </View>
                    )
                })
                ) : ( <View>
                    <Text>Tidak ada data</Text>

                </View> )}
          </View>
          <Gap height={30} /> 

      </ScrollView>  
      </> 
  )
}

export default Home

const styles = StyleSheet.create({
    menu:{
       flexDirection:'row',
       justifyContent:'space-evenly'
    },
    headerPage:{
     borderBottomWidth:1,
     borderColor :'#CFCFD5',
    },
  
    titleMenu:{
      fontSize:14,
      fontWeight: 'bold',
      color:'#A5A5A5',
      paddingLeft: 10,
      marginBottom: 10
    },
    titleBanner:{
      fontSize:14,
      fontWeight: 'bold',
      color:'#A5A5A5',
      paddingLeft: 10,
      marginBottom: 10
    }, 
  
    loading:{
      alignItems:'center', justifyContent:'center'
    }
  });
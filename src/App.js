/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { style } from '@mui/system';
import React,{useEffect, useState} from 'react'; 
import { 
  ScrollView, 
  StyleSheet,
  Text, 
  View,
} from 'react-native';
 
import { Header, Gap, MainMenu, ImageBanner, Diskon, Colapse} from './component'; 
import { getData, storeData } from './utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [dataLainnya, setdataLainnya]   = useState('-')
  const [dataKeuangan, setdataKeuangan] = useState('-')
  const [dataTagihan, setdataTagihan]   = useState('-')
  const [dataCat, setdataCat]           = useState('-')
  const [dataKomputer, setdataKomputer] = useState('-')
  const [dataFashion, setdataFashion]   = useState('-')
  const [dataPesta, setdataPesta]       = useState('-')
  const [dataKantor, setdataKantor]     = useState('-')
  const [dataTravel, setdataTravel]     = useState('-') 
  const endPoint ='https://mocki.io/v1/3d784d43-2421-4774-aa4f-ffbc5cc2f6cf';

  useEffect(() => {
    fetch(endPoint, {
      method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": "Tjt6e7BlMnoTS8URws38XZ1xHhlof4JfKJj4i5pNO2Z1SY2jOZwhuzpf91651Lat"
        },
    })
    .then((res) => res.json())
    .then((res) => { 
    AsyncStorage.multiRemove(['lainnya', 'keuangan', 'tagihan','cat','komputer','fashion','pesta','kantor','travel']);
     // icon lainnya
    storeData('lainnya', {
      value: `${res.lainnya}`,
    });

    // icon keuangan
    storeData('keuangan', {
      value: `${res.keuangan}`,
    });

    // icon tagihan
    storeData('tagihan', {
      value: `${res.tagihan}`,
    });

    // icon cat
    storeData('cat', {
      value: `${res.cat}`,
    });

    // icon komputer
    storeData('komputer', {
      value: `${res.komputer}`,
    });

    // icon travel
    storeData('travel', {
      value: `${res.travel}`,
    });

    // icon fashion
    storeData('fashion', {
      value: `${res.fashion}`,
    });

    // icon pesta
    storeData('pesta', {
      value: `${res.pesta}`,
    });

     // icon kantor
     storeData('kantor', {
      value: `${res.kantor}`,
    });
 
    });

    setTimeout(() => {
       // get data storage
      getData('lainnya').then(res => {
        const datares = res;
        if (datares) {
          setdataLainnya(datares); 
        }else{
          setdataLainnya('-'); 
        }
        
      });

      getData('keuangan').then(res => {
        const datares = res;
        if (datares) {
          setdataKeuangan(datares); 
        }else{
          setdataKeuangan('-'); 
        }
      });

      getData('tagihan').then(res => {
         
        const datares = res;
        if (datares) {
          setdataTagihan(datares); 
        }else{
          setdataTagihan(''); 
        }
      });

      getData('pesta').then(res => {
        
        const datares = res;
        if (datares) {
          setdataPesta(datares); 
        }else{
          setdataPesta('-'); 
        }
      });

      getData('cat').then(res => {
         
        const datares = res;
        if (datares) {
          setdataCat(datares); 
        }else{
          setdataCat('-'); 
        }
    });

    getData('komputer').then(res => {
      
      const datares = res;
        if (datares) {
          setdataKomputer(datares); 
        }else{
          setdataKomputer('-'); 
        }
    });

    getData('travel').then(res => {
       
      const datares = res;
      if (datares) {
        setdataTravel(datares); 
      }else{
        setdataTravel('-'); 
      }
    });
    getData('fashion').then(res => {
       
      const datares = res;
      if (datares) {
        setdataFashion(datares); 
      }else{
        setdataFashion('-'); 
      }
    });
    getData('kantor').then(res => {
      
      const datares = res;
      if (datares) {
        setdataKantor(datares); 
      }else{
        setdataKantor('-'); 
      }
    });
    }, 3000);
   
 
  }, [])
 
  return ( 
    <View>  
      <ScrollView> 
          <View style={styles.headerPage}>
            <Header />
          </View>
          <Gap height={30} />
          <View>
            <Text style={styles.titleMenu}>Main Menu</Text> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
             {/* {dataLainnya ==='-'?
             (
               <>
                    <Text style={styles.loading}>Loading ...</Text>
               </>
             ) : 
              <> */}
             
                  <MainMenu iconlainnya={`${dataLainnya.value}`} iconkeuangan={`${dataKeuangan.value}`} icontagihan={`${dataTagihan.value}`} iconcat={`${dataCat.value}`} iconkomputer={`${dataKomputer.value}`} iconfashion={`${dataFashion.value}`} iconpesta={`${dataPesta.value}`} iconkantor={`${dataKantor.value}`} icontravel={`${dataTravel.value}`}/>
               
              {/* </>
             }
            */}
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
                 
                <Diskon url='https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/7/5/af17d544-a3b3-4625-ba82-8c13ee263b61.jpg' terjual='Terjual 10 rb+' lokasi='Jakarta Barat' namabarang='MINISO Anyaman Tempat Penyimpanan Multifungsi-Biru - Abu-abu gelap' harga='Rp.  150.000'/>
                <Diskon url='https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/3/23/602e734a-7a25-4aaf-a0b2-5a92bfa445f5.jpg' terjual='Terjual 10 rb+' lokasi='Jakarta Selatan' namabarang='MINISO Anyaman Tempat Penyimpanan Multifungsi-Biru - Abu-abu gelap' harga='Rp.  350.000'/>
                <Diskon url='https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/10/30/f7b7df84-4168-42c2-b999-948de8f1474d.jpg' terjual='Terjual 10 rb+' lokasi='Tangerang' namabarang='MINISO Anyaman Tempat Penyimpanan Multifungsi-Biru - Abu-abu gelap' harga='Rp.  350.000'/>
                <Diskon url='https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/2/14/aa514f48-a1bf-48f4-85df-d20121c5509a.jpg' terjual='Terjual 10 rb+' lokasi='Jakarta Timur' namabarang='MINISO Anyaman Tempat Penyimpanan Multifungsi-Biru - Abu-abu gelap' harga='Rp.  350.000'/>
                <Diskon url='https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/5/22/13fd80d4-78d9-4d89-8fa1-d9865acbe6bb.jpg' terjual='Terjual 10 rb+' lokasi='Jakarta Utara' namabarang='MINISO Anyaman Tempat Penyimpanan Multifungsi-Biru - Abu-abu gelap' harga='Rp.  350.000'/>
            </ScrollView>  
          </View>
          <Gap height={30} /> 
          <View> 
            <Text style={styles.titleMenu}>Hal yang sering ditanyakan</Text>
            <Colapse titleHeader='Produk apa saja yang bisa saya promosikan? Apakah ada batasannya?' textConten=' Kamu bisa mempromosikan produk apa saja selama produk tersebut tergabung dalam Power Merchant (PM) dan Official Store (OS). Saat ini, platform Tokopedia Affiliate hanya memungkinkan kamu untuk mempromosikan produk, kamu belum bisa mempromosikan halaman toko, kategori, atau kampanye Tokopedia. Komisi yang kami tawarkan untuk saat ini adalah komisi untuk produk-produk di kategori fashion, rumah tangga, makanan & minuman, kecantikan, kesehatan, handphone & gadgets, dan ibu & bayi.'/>

            <Colapse titleHeader='Dimana saja saya bisa mempromosikan link Tokopedia Affiliate?' textConten='Kamu bisa mencantumkan affiliate link kamu di berbagai akun media sosial kamu (Youtube, Facebook, Instagram, Twitter, TikTok, dll), website, dan situs publik lainnya. Link tersebut sudah dibuat dengan pengidentifikasi unik dan sudah mengandung affiliate ID kamu. Kamu hanya perlu memposting link tersebut di situs kamu yang aktif dan terdaftar di Tokopedia Affiliate Program'/>

            <Colapse titleHeader='Apakah akun media sosial saya harus dibuat public?' textConten='Tidak perlu. Namun, kami menyarankan untuk membuatnya menjadi public untuk memperluas reach kamu, sehingga kesempatan kamu untuk mendapatkan komisi lebih besar'/>

            <Colapse titleHeader='Apakah Tokopedia menyediakan produk yang ingin saya promosikan?' textConten='Untuk saat ini Tokopedia tidak mengirimkan sampel produk. Namun kami berencana untuk meluncurkan fitur tersebut di masa mendatang. Ikuti media sosial dan berita kami untuk mendapatkan update terbaru.'/>
          </View>
          <Gap height={30} /> 

      </ScrollView>  
    </View> 
  )
};  

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

export default App;

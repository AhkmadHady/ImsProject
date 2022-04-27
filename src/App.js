
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { style } from '@mui/system';
import React from 'react'; 
import {  
  StyleSheet,
  View,
} from 'react-native'; 
import { Cat, Fashion, Home, Kantor, Keuangan, Komputer, Pesta, SplashScreen, Tagihan, Travel } from './page';
const Stack = createNativeStackNavigator();
const App = () => {
  return ( 
  <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Keuangan" component={Keuangan} options={{headerShown: true}}/>
          <Stack.Screen name="Cat" component={Cat} options={{headerShown: true}}/>
          <Stack.Screen name="Fashion" component={Fashion} options={{headerShown: true}}/>
          <Stack.Screen name="Kantor" component={Kantor} options={{headerShown: true}}/>
          <Stack.Screen name="Komputer" component={Komputer} options={{headerShown: true}}/>
          <Stack.Screen name="Pesta" component={Pesta} options={{headerShown: true}}/>
          <Stack.Screen name="Tagihan" component={Tagihan} options={{headerShown: true}}/>
          <Stack.Screen name="Travel" component={Travel} options={{headerShown: true}}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;

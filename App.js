import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore,combineReducers} from 'redux';
import mealsReducers from './store/reducers/Meals';
import {Provider} from 'react-redux'


enableScreens();

const rootReducer = combineReducers({
  meals:mealsReducers
})
const store = createStore(rootReducer)

// const fetchFonts = async () => {
//   return await Font.loadAsync({
//     'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   })
// }


export default function App() {
  // const [fontLoaded,setFontLoaded] = useState(false);
  // if (!fontLoaded){
    // return <AppLoading 
    //     startAsync={fetchFonts} 
    //     onFinish={()=> setFontLoaded(true)}
    //     onError={console.warn}
    //     />
//   }
//   return (
//     <MealsNavigator/>
//   );
// }
  return (
      <Provider store={store}>
        <MealsNavigator  />
      </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Fragment, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import FamilyTreeScreen from './src/screens/familyTree';

export type RootStackParmLists = {
  Login: undefined,
  FamilyTree: any,
  App: { imageUrl: string }
}
const Stack = createNativeStackNavigator<RootStackParmLists>();

type appProps = NativeStackScreenProps<RootStackParmLists,"App">
function App({ navigation }:appProps): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{title: 'Login',headerShown: false}}             
        />
         <Stack.Screen name="FamilyTree"
          options={{
            title: 'Family Tree', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerShown: false,
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            // headerRight: () => 
            // <ActionBarImage imageUrl={'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png'} />

          }}   
         component={FamilyTreeScreen} />
        {/* <Stack.Screen name="Dashboard" component={ProfileScreen} /> */}
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

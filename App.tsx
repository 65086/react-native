// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import React, { Fragment, useEffect } from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
// import LoginScreen from './src/screens/login';
// import FamilyTreeScreen from './src/screens/familyTree';
// import {  extendTheme, Icon, Image, NativeBaseProvider, Text, View } from 'native-base';
// import {  LogBox, Pressable } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import Expenses from './src/screens/expense';

// export type RootStackParmLists = {
//   Login: undefined,
//   FamilyTree: any,
//   Expenses:any,
//   App: { imageUrl: string }
// }
// const Stack = createNativeStackNavigator<RootStackParmLists>();

// type appProps = NativeStackScreenProps<RootStackParmLists,"App">

// const newColorTheme = {
//   brand: {
//     900: "#8287af",
//     800: "#7c83db",
//     700: "#b3bef6",
//   },
// };
// const theme = extendTheme({ colors: newColorTheme });

// function App({ navigation }:appProps): React.JSX.Element {

//   useEffect(() => {
//     LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
//   }, []);
//   useEffect(() => {
//     SplashScreen.hide();
//   }, [])

//   const signOutUser = async (navigation:any) => {
//     try {
//         await auth().signOut();
//         navigation.navigate('Login');
//     } catch (e) {
//         console.log(e);
//     }
//   }
//   return (
//     <NativeBaseProvider theme={theme}>
//       <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'  screenOptions={{
//           headerStyle: {
//             backgroundColor: 'darkblue',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>
//         <Stack.Screen 
//           name="Login"
//           component={LoginScreen}
//           options={{title: 'Login',headerShown: false}}             
//         />
//         <Stack.Screen name="FamilyTree"         
//          //options={{ headerBackVisible: false}
//          options={({ navigation }) => ({
//           title: 'FamilyTree',
//           headerBackVisible: false,         
//           headerRight: () => (
//             <Pressable onPress={()=> signOutUser(navigation)}>
//             <Image
//               style={{ width: 30, height: 30 }}
//               source={{
//                 uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png'}}
//               alt=""
//             />
//             </Pressable>
//           ),
//           headerTitle: () => 
//             <Text style={{color: 'white', padding: 15, fontSize: 22}}>Family Tree</Text> 
//         })}
//          component={FamilyTreeScreen} />
//         <Stack.Screen name="Expenses"         
//          //options={{ headerBackVisible: false}
//          options={({ navigation }) => ({
//           title: 'Expenses',
//           headerBackVisible: false,         
//           headerRight: () => (
//             <Pressable onPress={()=> signOutUser(navigation)}>
//             <Image
//               style={{ width: 30, height: 30 }}
//               source={{
//                 uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png'}}
//               alt=""
//             />
//             </Pressable>
//           ),
//           headerTitle: () => 
//             <Text style={{color: 'white', padding: 15, fontSize: 22}}>Expenses</Text> 
//         })}
//          component={Expenses} />
//       </Stack.Navigator>
//       </NavigationContainer>
//       </NativeBaseProvider>
//   );
// }

// export default App;




import { extendTheme, NativeBaseProvider, Text } from 'native-base';
import React, { Component } from 'react';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Index from './src/Index';
type CompProps = {
    //   props here
};
type CompState = {
    // state here
};

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);

export default class App extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    componentDidMount(): void {
      SplashScreen.hide();
    }
    render() {
        return (
          <NativeBaseProvider theme={theme}>
            <Index/>
          </NativeBaseProvider>
        );
    }
}
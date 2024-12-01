import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'native-base';
import React, { Component } from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
type CompProps = {
    handleToken:any
};
type CompState = {
    // state here
};

export type RootStackParmLists = {
  LoginScreen: undefined,
  SignupScreen:undefined
  
}
const Stack = createNativeStackNavigator<RootStackParmLists>();


export default class AuthStack extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <Stack.Navigator>
            <Stack.Screen name="LoginScreen" options={{headerShown: false}}>
              {props => <LoginScreen handleToken={this.props.handleToken} {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        );
    }
}
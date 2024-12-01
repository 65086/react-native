import { Text } from 'native-base';
import React, { Component } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerIcon from '../components/DrawerIcon';
import AddTransactionScreen from '../screens/AddTransactionScreen';

type CompProps = {
    //   props here
    categories:any
    allTransactions:()=>void,
    deleteTransaction:()=>void,
    updateTransaction:()=>void,
};
type CompState = {
    // state here
};
export type RootStackParmLists = {
    AddTransactionScreen: undefined,
  }
  const Stack = createNativeStackNavigator<RootStackParmLists>();

  
export default class TransactionStack extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <Stack.Navigator>
            {/* <Stack.Screen
              name="AllTransactionsScreen"
              options={({navigation}) => {
                return {
                  title: 'Transaction History',
                  headerLeft: () => <DrawerIcon navigation={navigation} />,
                };
              }}>
              {props => (
                <AllTransactionsScreen
                  allTransactions={this.props.allTransactions}
                  deleteTransaction={this.props.deleteTransaction}
                  {...props}
                />
              )}
            </Stack.Screen> */}
            <Stack.Screen
              name="AddTransactionScreen"
              options={({navigation}) => {
                return {
                  title: 'Update Transaction',
                  headerLeft: () => <DrawerIcon navigation={navigation} />,
                };
              }}>
              {props => (
                <AddTransactionScreen
                  categories={this.props.categories}
                  updateTransaction={this.props.updateTransaction}
                  {...props}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        );
    }
}
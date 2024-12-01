import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import HomeScreen from '../screens/HomeScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
type CompProps = {
  //    reload,
  // handleToken,
  categories:any,
  // addCategory,
  // deleteCategory,
  // updateCategory,
  // addTransaction,
  // deleteTransaction,
  // updateTransaction,
};
type CompState = {
    // state here
};

export type RootStackParmLists = {
  HomeScreen: undefined,
  SignupScreen:undefined,
  AddTransactionScreen:undefined
  
}
const Stack = createNativeStackNavigator<RootStackParmLists>();


export default class HomeStack extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
          <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            options={({navigation}) => {
              return {
                title: 'Home',
                headerLeft: () => <DrawerIcon navigation={navigation} />,
              };
            }}
            component={HomeScreen}
            >
            {/* {props => (
              <HomeScreen
                {...props}
              />
            )} */}
          </Stack.Screen>
          <Stack.Screen
            name="AddTransactionScreen"
            options={({route}:any) => ({title: route.params.name})}>
            {props => (
              <AddTransactionScreen
                categories={this.props.categories}
                // addTransaction={addTransaction}
                // updateTransaction={updateTransaction}
                {...props}
              />
            )}
          </Stack.Screen>
          {/* <Stack.Screen name="CategoryScreen" options={{title: 'Add Category'}}>
            {props => (
              <CategoryScreen
                categories={categories}
                addCategory={addCategory}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="AllTransactionsScreen"
            options={{title: 'Transactions'}}>
            {props => (
              <AllTransactionsScreen
                deleteTransaction={deleteTransaction}
                {...props}
              />
            )}
          </Stack.Screen> */}
        </Stack.Navigator>
        );
    }
}
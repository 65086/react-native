import { Button, Text } from 'native-base';
import React, { Component } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import { View } from 'react-native';
import CustomSidebar from '../components/CustomSidebar';
import CategoryScreen from '../screens/CategoryScreen';
import { deleteService, getService, postService, putService } from '../utils/Api';
import { handleCategories } from '../utils/HelperFunctions';
import Loading from '../components/loading';
// import { getService } from '../utils/Api';
type CompProps = {
    handleToken?:any
};
type CompState = {
    loading:boolean,
    categories:any
};

export type RootStackParmLists = {
  HomeScreen: undefined,
  NotificationsScreen:undefined,
  HomeStack:undefined,
  Categories:undefined

}
const Drawer = createDrawerNavigator<RootStackParmLists>();
//  const Drawer = createDrawerNavigator();

 type HomeScreenProps = NativeStackScreenProps<RootStackParmLists, "HomeScreen">
function HomeScreen({ navigation }:HomeScreenProps) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('NotificationsScreen')}

        >Go Back</Button>
      </View>
    );
  }
 type NotificationsScreenProps = NativeStackScreenProps<RootStackParmLists, "NotificationsScreen">




  function NotificationsScreen({ navigation }:NotificationsScreenProps) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} >Go Back</Button>
      </View>
    );
  }

export default class AppStack extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
        this.state={
            loading:false,
            categories:[]
        }
    }
    componentDidMount(): void {
      this.fetchAllCategories();
    }


      //Add Category
      addCategory = async (category:any) => {
        const data = await postService('CATEGORIES_API', category);
        if (data !== null) {
          this.fetchAllCategories();
          return true;
        }
        return false;
      };
  
      //Update Category
  updateCategory = async (category:any) => {
    const res = await putService(
      'CATEGORIES_API',
      category,
      category.docId,
    );
    if (res !== null) {
      this.fetchAllCategories();
      return true;
    }
    return false;
  };

//Delete Category
deleteCategory = async (id:any) => {
  const res = await deleteService('CATEGORIES_API', id);
  if (res !== null) {
    this.fetchAllCategories();
    return true;
  }
  return false;
};

         //Read Categories
    fetchAllCategories = async () => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

   
    let allData = await getService('CATEGORIES_API', "token");
    if (allData === null) {
      return;
    }
    allData = handleCategories(allData);
    this.setState((prevState) => ({
      ...prevState,
      categories: allData
    }));

    // let tempTransactions = getAllTransactions(allData);
    // let data = eliminateReminders(allData);
    // data = calculateTotalExpense(data);
    // setCategories(data);
    // setTransactions(tempTransactions.filter(item => item.remind === false));
    // setReminders(tempTransactions.filter(item => item.remind === true));
    // setLoading(false);
  };

    render() {



        if (this.state.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Loading message="Fetching data..." />
              </View>
            );
        }
        return (
            <Drawer.Navigator initialRouteName="HomeStack"
            drawerContent={(props) => <CustomSidebar 
              handleToken={this.props.handleToken}
              {...props}/>}
            >
            {/* <Drawer.Screen name="HomeStack" options={{headerShown: false}}>
              {props => (
                <HomeStack
                  reload={fetchAllCategories}
                  handleToken={handleToken}
                  categories={categories}
                  addCategory={addCategory}
                  updateCategory={updateCategory}
                  deleteCategory={deleteCategory}
                  addTransaction={addTransaction}
                  deleteTransaction={deleteTransaction}
                  updateTransaction={updateTransaction}
                />
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Categories">
              {props => (
                <CategoryScreen
                  categories={categories}
                  addCategory={addCategory}
                  updateCategory={updateCategory}
                  deleteCategory={deleteCategory}
                />
              )}
            </Drawer.Screen>
            <Drawer.Screen name="AllTransactions" options={{headerShown: false}}>
              {props => (
                <TransactionStack
                  categories={categories}
                  allTransactions={transactions}
                  deleteTransaction={deleteTransaction}
                  updateTransaction={updateTransaction}
                />
              )}
            </Drawer.Screen>
            <Drawer.Screen name="ReminderStack" options={{headerShown: false}}>
              {props => (
                <ReminderStack
                  categories={categories}
                  reminders={reminders}
                  addTransaction={addTransaction}
                  deleteTransaction={deleteTransaction}
                  updateTransaction={updateTransaction}
                />
              )}
            </Drawer.Screen>
            <Drawer.Screen name="Charts">
              {props => (
                <ChartScreen categories={categories} transactions={transactions} />
              )}
            </Drawer.Screen> */}
              {/* <Drawer.Screen name="HomeStack" options={{headerShown: false}} component={HomeStack}/> */}
              <Drawer.Screen name="HomeStack" options={{headerShown: false}} >
              {(props:any) => (
          <HomeStack
            categories={this.state.categories}
          />
            )}
              </Drawer.Screen>

              <Drawer.Screen name="Categories">
        {(props:any) => (
          <CategoryScreen
            categories={this.state.categories}
            addCategory={this.addCategory}
            updateCategory={this.updateCategory}
            deleteCategory={this.deleteCategory}
          />
        )}
      </Drawer.Screen>
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
          </Drawer.Navigator>
        );
    }
}




import { FlatList, Text } from 'native-base';
import React, { Component } from 'react';
import { Alert, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';
import PieChart from '../components/PieChart';
import { primaryColor } from '../utils/GlobalStyle';
import {Button} from 'react-native-paper';
import DateTypeSelection from '../components/DateTypeSelection';
// import {useDeviceOrientation} from '@react-native-community/hooks';
type CompProps = {
    //   props here
    navigation?:any,

};
type CompState = {
    refreshing: boolean,
    categories: any,
    total: number,
    date: Date
};
export default class HomeScreen extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
        this.state = {
            refreshing: false,
            categories: [],
            total: 0,
            date: new Date()
        }
    }
    render() {
        // const {portrait} = useDeviceOrientation();

        const handleButtonPress = () => {
          this.props.navigation.navigate('AddTransactionScreen', {
              name: 'Add Transaction',
              showFutureDates: false,
            });
            // Alert.alert('Hi');
          };
        const data = [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            fullName: "Aafreen Khan",
            timeStamp: "12:47 PM",
            recentText: "Good Day!",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            fullName: "Sujitha Mathur",
            timeStamp: "11:11 PM",
            recentText: "Cheer up, there!",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
          }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            fullName: "Anci Barroco",
            timeStamp: "6:22 PM",
            recentText: "Good Day!",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
          }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            fullName: "Aniket Kumar",
            timeStamp: "8:56 PM",
            recentText: "All the best",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
          }, {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            fullName: "Kiara",
            timeStamp: "12:47 PM",
            recentText: "I will call today.",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          }]
        return (
            <View style={styles.container}>
            <View style={[styles.dateContainer]}>
              <DateTypeSelection/>
            </View> 
         
             <View style={styles.chartAndButton}>
                {/* <PieChart categories={this.state.categories} total={this.state.total} /> */}
                
                
                <Button
                     icon="plus-thick"
                     color={primaryColor}
                     mode="contained"
                     style={{width: '90%', padding: 2}}
                     onPress={handleButtonPress}>
                     Add Transaction
                </Button>
              </View>
            <View style={styles.dataContainer}>
              <FlatList
                data={data}
                keyExtractor={(item:any) => item.id}
                refreshControl={
                  <RefreshControl refreshing={this.state.refreshing} 
                //   onRefresh={onRefresh}
                   />
                }
                renderItem={({item}) => (
                  <TouchableOpacity 
                //   onPress={() => handleCategoryPress(item)}
                  >
                    <Card item={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 2,
      flex: 1,
    },
    dateContainer: {
      flex: 2,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 10,
      paddingHorizontal: 10,
      justifyContent: 'center',
      // paddingBottom: 10,
    },
    chartAndButton: {
      flex: 6,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 10,
    },
    dataContainer: {
      flex: 7,
      margin: 10,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
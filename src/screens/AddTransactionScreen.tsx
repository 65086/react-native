import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import moment from 'moment';
import DatePicker from '../components/DatePicker';
import { globalStyle, primaryColor, secondaryColor, textColor } from '../utils/GlobalStyle';
import Loading from '../components/loading';
type CompProps = {
    navigation:any,
    route:any,
    categories?:any,
    addTransaction?:()=>void,
    updateTransaction?:()=>void,
};
type CompState = {
    // state here
    payload:any,
    categoryId:any,
    isLoading:any,
    errMsg:any,
    selectedDate:any,
    showDatePicker:any
};


let initialState = {
  amount: 0,
  note: '',
  transactionDate: new Date().getTime(),
  remind: false,
};

const today = new Date();
let yesterday = new Date();
let tomorrow = new Date();
yesterday.setDate(today.getDate() - 1);
tomorrow.setDate(today.getDate() + 1);


export default class AddTransactionScreen extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
        this.state={
            payload:initialState,
            categoryId:null,
            isLoading:false,
            errMsg:'',
            selectedDate:new Date(),
            showDatePicker:false
        }
    }
    render() {
        const showFutureDates =false // this.props.route.params.showFutureDates;

        const dateToString = (date:any) => {
            return moment(date).format('DD/MM');
          };

          const isSelectedDateVisible = () => {
            if (showFutureDates)
              return (
                this.state.selectedDate.toLocaleDateString() !== yesterday.toLocaleDateString() &&
                this.state.selectedDate.toLocaleDateString() !== tomorrow.toLocaleDateString()
              );
            return (
                this.state.selectedDate.toLocaleDateString() !== today.toLocaleDateString() &&
                this.state.selectedDate.toLocaleDateString() !== yesterday.toLocaleDateString() &&
                this.state.selectedDate.toLocaleDateString() !== tomorrow.toLocaleDateString()
            );
          };
        
        // Transaction which needs to be updated
        const oldTransaction = this.props.route.params.transaction;

        return (
            <View>
      {this.state.isLoading ? (
        <View>
          <Loading />
        </View>
      ) : (
        <View style={{padding: 10}}>
          {/* FlatList is used to prevent the following warning:
          VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.  */}
          <FlatList
            ListHeaderComponent={
              <>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    value={this.state.payload.amount.toString()}
                    style={styles.amountField}
                    autoFocus={true}
                    placeholder="INR"
                    placeholderTextColor={textColor}
                    keyboardType="numeric"
                    // onChangeText={text => this.props.handleChange('amount', text)}
                  />
                </View>
                <Text style={[styles.heading, {marginTop: 10}]}>
                  Categories
                </Text>
              </>
            }
            numColumns={4}
            data={this.props.categories}
            keyExtractor={item => item.id}
            columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                // onPress={() => setCategoryId(item.id)}
                style={[
                  styles.categoryBox,
                  {borderColor: item.color},
                  this.state.categoryId === item.id && {backgroundColor: item.color},
                ]}>
                {item.title.length > 10 ? (
                  <Text style={styles.categoryText}>
                    {item.title.slice(0, 8) + '...'}
                  </Text>
                ) : (
                  <Text style={styles.categoryText}>{item.title}</Text>
                )}
              </TouchableOpacity>
            )}
            ListFooterComponent={
              <>
                {!showFutureDates && (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CategoryScreen')}
                    style={
                      // styles.categoryBox,
                      styles.addCategoryBox
                    }>
                    <Text style={[styles.categoryText, {color: '#fff'}]}>
                      + Create
                    </Text>
                  </TouchableOpacity>
                )}
                <View style={{marginVertical: 10}}>
                  <Text style={styles.heading}>Date</Text>
                  <View style={styles.dateContainer}>
                    <View style={styles.dateBoxes}>
                      {showFutureDates ? (
                        <TouchableOpacity
                        //   onPress={() => handleSelectDate(tomorrow)}
                          style={[
                            styles.dateBox,
                            {marginRight: 30},
                            this.state.selectedDate.toLocaleDateString() ===
                              tomorrow.toLocaleDateString() && {
                              backgroundColor: secondaryColor,
                            },
                          ]}>
                          <View style={styles.textContainer}>
                            <Text style={styles.dateText}>
                              {dateToString(tomorrow)}
                            </Text>
                            <Text style={styles.dateText}>TMR</Text>
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <>
                          <TouchableOpacity
                            // onPress={() => handleSelectDate(today)}
                            style={[
                              styles.dateBox,
                              this.state.selectedDate.toLocaleDateString() ===
                                today.toLocaleDateString() && {
                                backgroundColor: secondaryColor,
                              },
                            ]}>
                            <View style={styles.textContainer}>
                              <Text style={styles.dateText}>
                                {dateToString(today)}
                              </Text>
                              <Text style={styles.dateText}>Today</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            // onPress={() => handleSelectDate(yesterday)}
                            style={[
                              styles.dateBox,
                              {marginHorizontal: 30},
                              this.state.selectedDate.toLocaleDateString() ===
                                yesterday.toLocaleDateString() && {
                                backgroundColor: secondaryColor,
                              },
                            ]}>
                            <View style={styles.textContainer}>
                              <Text style={styles.dateText}>
                                {dateToString(yesterday)}
                              </Text>
                              <Text style={styles.dateText}>Yes'day</Text>
                            </View>
                          </TouchableOpacity>
                        </>
                      )}
                      {isSelectedDateVisible() && (
                        <TouchableOpacity
                          style={[
                            styles.dateBox,
                            {backgroundColor: secondaryColor},
                          ]}>
                          <View style={styles.textContainer}>
                            <Text style={styles.dateText}>
                              {dateToString(this.state.selectedDate)}
                            </Text>
                            <Text style={styles.dateText}>Selected</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.calendarIcon}
                      onPress={() => {
                        // setShowDatePicker(true);
                      }}>
                      {/* <FontAwesome
                        name="calendar"
                        size={25}
                        color={primaryColor}
                      /> */}
                    </TouchableOpacity>
                  </View>
                  {this.state.showDatePicker && (
                    <DatePicker
                    //   handleSelectDate={handleSelectDate}
                      showFutureDates={showFutureDates}
                    />
                  )}
                </View>
                <View style={{marginVertical: 10}}>
                  <Text style={styles.heading}>Note</Text>
                  <TextInput
                    value={this.state.payload.note}
                    style={styles.note}
                    placeholder="Comment"
                    placeholderTextColor={textColor}
                    // onChangeText={text => handleChange('note', text)}
                  />
                </View>

                {this.state.errMsg.trim().length !== 0 && (
                  <Text style={globalStyle.error}>{this.state.errMsg}</Text>
                )}

                <Button
                  mode="contained"
                  color={primaryColor}
                  style={styles.addButton}
                //   onPress={handleSubmit}
                >
                  Save
                </Button>
              </>
            }
          />
        </View>
      )}
    </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
      color: textColor,
      fontSize: 18,
      marginBottom: 5,
      fontWeight: '500',
    },
    amountField: {
      backgroundColor: '#fff',
      width: 100,
      borderBottomWidth: 2,
      fontSize: 20,
      textAlign: 'center',
      color: textColor,
    },
    categoryBox: {
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5,
      width: 85,
      backgroundColor: '#fff',
    },
    addCategoryBox: {
      borderRadius: 10,
      marginVertical: 5,
      justifyContent: 'center',
      padding: 2,
      backgroundColor: 'grey',
    },
    categoryText: {
      color: textColor,
      textAlign: 'center',
      paddingVertical: 5,
    },
    dateContainer: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dateBoxes: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    dateBox: {
      width: 70,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    textContainer: {
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 5,
    },
    dateText: {
      color: textColor,
    },
    calendarIcon: {
      paddingVertical: 12,
      marginRight: 3,
    },
    note: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'grey',
      backgroundColor: '#fff',
      color: textColor,
      paddingLeft: 10,
    },
    addButton: {
      padding: 5,
      marginTop: 10,
      // borderRadius: 10,
      // alignSelf: 'center',
    },
  });
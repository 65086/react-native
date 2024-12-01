
import moment from 'moment';
import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { primaryColor, textColor } from '../utils/GlobalStyle';
import { StyleSheet } from 'react-native';
import MonthYearPicker from './MonthYearPicker';
import DatePicker from './DatePicker';
type CompProps = {
    //   props here
};
type CompState = {
    selectedDate:Date,
    showPicker:boolean,
    selectedOption:string,
    selectedValue:string
    // state here
};
const options = ['Day', 'Month', 'Year'];
export default class DateTypeSelection extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props);
        this.state={
            selectedDate:new Date(),
            showPicker:false,
            selectedOption:'Month',
            selectedValue:moment(new Date()).format('MMMM, YYYY')
        }
    }
    render() {

        const handleSelectOption = (index:any) => {
            const presentDate = new Date();
            const text = options[index];
          
            let selectedValue='';
            if (text === 'Day') 
                selectedValue=presentDate.toDateString();
            else if (text === 'Year') 
                selectedValue=presentDate.getFullYear().toString();
            else
                selectedValue=moment(presentDate).format('MMMM, YYYY');
           
                this.setState((prevState) => ({
                    ...prevState,
                    selectedDate:presentDate,
                    selectedOption:text,
                    selectedValue:selectedValue
                }))
            // if (text === 'Year') 
            //     sendDateToHome(text, presentDate.getFullYear());
            // else 
            //     sendDateToHome(text, presentDate);
          };
        
          // Date returned from Day and Month picker
          const handleDateValue = (date:any) => {
            
            let selectedValue='';
            if (this.state.selectedOption === 'Day') 
                selectedValue=date.toDateString();
            else
                selectedValue=moment(date).format('MMMM, YYYY');

                this.setState((prevState) => ({
                    ...prevState,
                    showPicker:false,
                    selectedDate:date,
                    selectedValue:selectedValue
                }))
    
            // sendDateToHome(selectedOption, date);
          };
        
          // Previous and Next buttons
          const handleNavigation = (type:any) => {
            let tempDate = this.state.selectedDate;
            if (this.state.selectedOption === 'Day') {
              if (type === 'Prev') tempDate.setDate(tempDate.getDate() - 1);
              else tempDate.setDate(tempDate.getDate() + 1);
              this.setState((prevState) => ({
                ...prevState,
                selectedDate:tempDate,
                selectedValue:tempDate.toDateString()
            }))
            //   sendDateToHome(selectedOption, tempDate);
            } else if (this.state.selectedOption === 'Month') {
              if (type === 'Prev') tempDate.setMonth(tempDate.getMonth() - 1);
              else tempDate.setMonth(tempDate.getMonth() + 1);
              this.setState((prevState) => ({
                ...prevState,
                selectedDate:tempDate,
                selectedValue:moment(tempDate).format('MMMM, YYYY')
            }))
            //   sendDateToHome(selectedOption, tempDate);
            } else {
              if (type === 'Prev') tempDate.setMonth(tempDate.getMonth() - 12);
              else tempDate.setMonth(tempDate.getMonth() + 12);
              this.setState((prevState) => ({
                ...prevState,
                selectedDate:tempDate,
                selectedValue:tempDate.getFullYear().toString()
            }))
            //   sendDateToHome(selectedOption, tempDate.getFullYear());
            }
        }

        const pickerTypeDisplay = () => {
            if (this.state.selectedOption === 'Month')
              return <MonthYearPicker handleSelectDate={handleDateValue} />;
            if (this.state.selectedOption === 'Day') {
              return (
                <DatePicker
                  handleSelectDate={handleDateValue}
                  showFutureDates={false}
                />
              );
            }
          };

        return (
            <View style={styles.container}>
      <View style={styles.options}>
        {options.map((option, index) => (
          <Text
            key={index}
            style={[
              styles.optionText,
              this.state.selectedOption === option && styles.active,
            ]}
            onPress={() => handleSelectOption(index)}>
            {option}
          </Text>
        ))}
      </View>
      <View style={styles.selected}>
        <Text
          style={styles.navigationButtons}
          onPress={() => handleNavigation('Prev')}>
          {'<'}
        </Text>
        {this.state.selectedOption === 'Year' ? (
          <Text style={styles.selectedText}>{this.state.selectedValue}</Text>
        ) : (
          <Text
            style={[styles.selectedText, {borderBottomWidth: 1}]}
            // onPress={() => setShowPicker(true)}
            >
            {this.state.selectedValue}
          </Text>
        )}
        {this.state.selectedDate.toLocaleDateString() ===
        new Date().toLocaleDateString() ? (
          <Text style={[styles.navigationButtons, {color: '#b8b3b1'}]}>
            {'>'}
          </Text>
        ) : (
          <Text
            style={styles.navigationButtons}
            onPress={() => handleNavigation('Next')}>
            {'>'}
          </Text>
        )}
      </View>
      <View>{this.state.showPicker && pickerTypeDisplay()}</View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 2,
      paddingHorizontal: 10,
      paddingTop: 10,
      justifyContent: 'space-between',
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    optionText: {
      color: textColor,
      fontSize: 16,
    },
    active: {
      color: primaryColor,
      fontWeight: 'bold',
      borderBottomColor: primaryColor,
      borderBottomWidth: 2,
    },
    selected: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      // marginTop: 12,
      alignItems: 'center',
    },
    selectedText: {
      color: textColor,
    },
    navigationButtons: {
      color: textColor,
      paddingHorizontal: 10,
      fontSize: 18,
    },
  });
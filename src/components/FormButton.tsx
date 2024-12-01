import { Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { windowHeight } from '../utils/Dimentions';
import { primaryColor } from '../utils/GlobalStyle';
type CompProps = {
    buttonTitle:string,
    onPress:(text:any)=>void,
};
type CompState = {
    // state here
};
export default class FormButton extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer} {...this.props}>
            <Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: primaryColor,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      // fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'Lato-Regular',
    },
  });
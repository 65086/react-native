
import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import { primaryColor, textColor } from '../utils/GlobalStyle';
import { Modal, StyleSheet, TextInput } from 'react-native';
import { windowWidth } from '../utils/Dimentions';
type CompProps = {
    //   props here
  payload:any,
  isUpdate:boolean,
  handleModalVisibility:(flag:boolean)=>void,
  handleSave:()=>void,
  handleChange:(key:string,value:string)=>void

};
type CompState = {
    // state here
};
export default class CategoryModal extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {this.props.isUpdate ? (
              <Text style={styles.header}>UPDATE CATEGORY</Text>
            ) : (
              <Text style={styles.header}>ADD CATEGORY</Text>
            )}
            <View style={{padding: 20}}>
              <TextInput
                style={styles.input}
                value={this.props.payload.title}
                placeholder="Title"
                placeholderTextColor="grey"
                onChangeText={(text:any) => this.props.handleChange('title', text)}
              />
              <TextInput
                style={styles.input}
                value={this.props.payload.description}
                placeholder="Description"
                placeholderTextColor="grey"
                onChangeText={text => this.props.handleChange('description', text)}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                color={primaryColor}
                mode="contained"
                style={[styles.button, {borderBottomLeftRadius: 20}]}
                onPress={this.props.handleSave}
                >
                Save
              </Button>
              <Button
                color={primaryColor}
                mode="contained"
                style={[styles.button, {borderBottomRightRadius: 20}]}
                onPress={() => this.props.handleModalVisibility(false)}
                >
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      marginTop: 20,
      color: textColor,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      marginVertical: 10,
      color: textColor,
      borderRadius: 10,
      fontSize: 16,
      paddingLeft: 10,
      width: windowWidth / 1.5,
    },
    button: {
      width: '50%',
      padding: 5,
      borderRadius: 0,
    },
  });
  
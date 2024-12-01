import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { primaryColor, textColor } from '../utils/GlobalStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal, StyleSheet } from 'react-native';
import moment from 'moment';
import { Button } from 'react-native-paper';
type CompProps = {
    //   props here
    item:any, 
    hideModal:()=>void, 
    handleUpdate:(item:any)=>void,
    handleDelete:(item:any)=>void,
};
type CompState = {
    // state here
};
export default class TransactionModal extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {moment(new Date(this.props.item.transactionDate)).format('MMMM DD, YYYY')}
              </Text>
              <Icon
                size={20}
                style={styles.closeIcon}
                name="close-circle-outline"
                onPress={() => this.props.hideModal()}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.content}>
              <Text style={styles.amount}>
                {'\u20B9'}
                {this.props.item.amount}
              </Text>
              {this.props.item.categoryName.length <= 10 && this.props.item.note.length <= 10 ? (
                <Text style={styles.modalText}>
                  {this.props.item.categoryName}
                  {this.props.item.note && ' - ' + this.props.item.note}
                </Text>
              ) : (
                <>
                  <Text style={[styles.modalText, {marginBottom: 10}]}>
                    {this.props.item.categoryName}
                  </Text>
                  <Text style={[styles.modalText, {fontSize: 15}]}>
                    {this.props.item.note.length <= 20 ? this.props.item.note : this.props.item.note + '...'}
                  </Text>
                </>
              )}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                color={primaryColor}
                mode="contained"
                style={[styles.button, {borderBottomLeftRadius: 20}]}
                onPress={() => this.props.handleUpdate(this.props.item)}>
                Update
              </Button>
              <Button
                color={primaryColor}
                mode="contained"
                style={[styles.button, {borderBottomRightRadius: 20}]}
                onPress={() => this.props.handleDelete(this.props.item)}>
                Delete
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
      marginHorizontal: 5,
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      paddingTop: 5,
    },
    headerText: {
      color: textColor,
      fontSize: 15,
      paddingLeft: 5,
    },
    closeIcon: {
      color: 'black',
      alignSelf: 'flex-end',
    },
    divider: {
      margin: 2,
      borderBottomWidth: 1,
      borderColor: '#D3D3D3',
      alignSelf: 'stretch',
      marginBottom: 15,
    },
    content: {
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    modalText: {
      textAlign: 'center',
      color: textColor,
      fontSize: 18,
      marginBottom: 5,
    },
    amount: {
      fontSize: 35,
      marginBottom: 10,
      textAlign: 'center',
      color: textColor,
      fontWeight: 'bold',
    },
    button: {
      width: '40%',
      padding: 5,
      borderRadius: 0,
    },
  });
  
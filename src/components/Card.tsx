import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {textColor} from '../utils/GlobalStyle';


type CompProps = {
    item:any
};
type CompState = {
    // state here
};
export default class Card extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.leftContent}>
                <View style={[styles.color, {backgroundColor: this.props.item.color}]} />
                <Text style={styles.text}>{this.props.item.title}</Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.text}>{this.props.item.recentText} %</Text>
                <Text style={styles.text}>{this.props.item.totalExpense}</Text>
              </View>
            </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    // borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: 'black',
    // elevation: 3,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  leftContent: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  color: {
    marginRight: 10,
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
  },
  text: {
    color: textColor,
  },
});
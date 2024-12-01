
import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { textColor } from '../utils/GlobalStyle';
import { StyleSheet } from 'react-native';
import Pie from 'react-native-pie';
type CompProps = {
    categories:any,
    total:any
};
type CompState = {
    // state here
};
export default class Expenses extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {

        const rupeesSymbol = '\u20B9';
        const gaugeText = `${this.props.total} ${rupeesSymbol}`;
      
        let data = [];
        if (this.props.categories !== null) {
          data = this.props.categories.map((item:any) => {
            let obj:any= {};
            obj.percentage = item.percentage;
            obj.color = item.color;
            return obj;
          });
        }

        return (
            <View style={styles.container}>

<Pie
              radius={80}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />
            <Pie
              radius={80}
              innerRadius={50}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />
      {/* <Pie
        radius={90}
        innerRadius={50}
        sections={data}
        // dividerSize={2}
        backgroundColor="#ddd"
      /> */}
      <View style={styles.gauge}>
        <Text style={styles.gaugeText}>{gaugeText}</Text>
      </View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: 175,
      alignItems: 'center',
      // marginTop: 10,
    },
    gauge: {
      position: 'absolute',
      width: 100,
      height: 180,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gaugeText: {
      backgroundColor: 'transparent',
      color: textColor,
      fontSize: 24,
      fontWeight: '500',
    },
  });



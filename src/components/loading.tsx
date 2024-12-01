import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { primaryColor } from '../utils/GlobalStyle';
type CompProps = {
    message?:string
};
type CompState = {
    // state here
};
export default class Loading extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
        <View>
            <ActivityIndicator size="large" color={primaryColor} />
            {this.props.message !== undefined && (
              <Text style={{color: '#A5A5A5'}}>{this.props.message}</Text>
            )}
          </View>
        );
    }
}
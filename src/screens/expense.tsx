import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'native-base';
import React, { Component } from 'react';

type CompProps = {
    //
}

type CompState = {
    // state here
};

export default class Expenses extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    // const {navigation,route}=this.props
    render() {
        return (
            <>
                <Text>Hi expense</Text>
            </>
        );
    }
}
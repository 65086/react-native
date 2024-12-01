import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


type CompProps = {
    navigation:any
};
type CompState = {
    // state here
};


export default class DrawerIcon extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
        <View style={{marginRight: 30}}>
          <Icon name="menu" color="black" size={30} />
        </View>
      </TouchableOpacity>
    </View>
        );
    }
}


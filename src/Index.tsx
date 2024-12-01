import { Text, View } from 'native-base';
import React, { Component } from 'react';
import Loading from './components/loading';
import { removeData, storeData } from './utils/LocalStorage';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';


type CompProps = {
    //   props here
};
type CompState = {
    // state here
    loading: boolean,
    token: any

};


export default class Index extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props);
        this.state = {
            loading: false,
            token: null
        }
    }

    render() {
        const handleToken = (value: any) => {
            this.setState({ loading: true })
            if (value === null)
                removeData();
            else
                storeData(value);

            this.setState({ loading: false, token: value })
        };

        if (this.state.loading) {
            return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loading message="Checking session..." />
            </View>
            )
        }
        return (
            <>
                <NavigationContainer>
                    {this.state.token == null ? (
                        <AuthStack handleToken={handleToken} />
                    ) :
                        <AppStack handleToken={handleToken} />
                        // <Text>ddd</Text>
                    }

                    {/* //   : (
    //     <AppStack token={token} handleToken={handleToken} />
    //   ) */}
                    {/* } */}

                </NavigationContainer>
            </>
        );
    }
}
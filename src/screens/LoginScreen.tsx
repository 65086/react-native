

import { Image, Text, View } from 'native-base';
import React from 'react';
import Loading from '../components/loading';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParmLists } from '../navigation/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { globalStyle, primaryColor } from '../utils/GlobalStyle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { postService } from '../utils/Api';
import { AppSpinner } from './spinner';
const logo = require("../assets/images/logo.png")
type CompProps = {
    handleToken?: any
};
type CompState = {
    data: any,
    errMsg: string,
    isLoading: boolean
};
let initialState = { email: 'suresh.patil8994@gmail.com', password: '123456' };

type props = NativeStackScreenProps<RootStackParmLists, "LoginScreen"> & CompProps

export default class LoginScreen extends React.Component<props, CompState> {
    constructor(props: props) {
        super(props)
        this.state = {
            data: initialState,
            errMsg: '',
            isLoading: false
        }
    }
    render() {
        const handleChange = (key: any, value: any) => {
            this.setState((prevState) => ({
                ...prevState,
                data: { ...prevState.data, [key]: value }
            }))
        };
        const handleSubmit = async () => {

            this.setState((prevState) => ({
                ...prevState,
                isLoading: true
            }))

            // Validation
            if (this.state.data.email.trim() == '' || this.state.data.password.trim() == '') {
                this.setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    errMsg: 'All the fields are mandatory'
                }))
                return;
            }

            const res = await postService('LOGIN_API', this.state.data);
            if (res && res.token !== undefined) {
                this.setState((prevState) => ({
                    ...prevState,
                    data: initialState,
                    isLoading: false
                }))
                this.props.handleToken('Bearer '.concat(res.token));
            } else {
                let error: string = '';
                if (res !== 'Network Error')
                    error = 'Invalid credentials';
                else
                    error = 'You are not connected to the internet.';
                this.setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    errMsg: error
                }))
            }
        };

        return (
            <>
                {this.state.isLoading ? (
                    <View style={styles.container}>
                        <Loading message='loggin in progress...'/>
                    </View>
                    
                ) : (
                    <View style={styles.container}>
                        <Image
                            source={logo}
                            style={styles.logo}
                            alt='..'
                        />
                        <Text style={styles.text}>Expense Tracker</Text>

                        <FormInput
                            labelValue={this.state.data.email}
                            onChangeText={(text: any) => handleChange('email', text)}
                            placeholderText="Email"
                            iconType="user"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <FormInput
                            labelValue={this.state.data.password}
                            onChangeText={text => handleChange('password', text)}
                            placeholderText="Password"
                            iconType="lock"
                            secureTextEntry={true}
                        />

                        {this.state.errMsg.trim().length !== 0 && (
                            <Text style={globalStyle.error}>{this.state.errMsg}</Text>
                        )}

                        <FormButton buttonTitle="Sign In" onPress={() => handleSubmit()} />

                        <TouchableOpacity
                            style={styles.forgotButton}
                            onPress={() =>
                                this.props.navigation.navigate('SignupScreen')
                            }>
                            <Text style={styles.navButtonText}>
                                Don't have an acount? Create here
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 25,
        marginBottom: 10,
        marginTop: 20,
        color: primaryColor,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: primaryColor,
        fontFamily: 'Lato-Regular',
    },
});

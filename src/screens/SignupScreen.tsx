
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'native-base';
import React, { Component } from 'react';
import { RootStackParmLists } from '../navigation/AuthStack';
import FormButton from '../components/FormButton';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import { globalStyle, primaryColor } from '../utils/GlobalStyle';
import { AppSpinner } from './spinner';
import AntDesign from 'react-native-vector-icons/AntDesign';

type CompProps = {
    //   props here
};
type CompState = {
    data: any,
    errMsg: string,
    isLoading: boolean
};
type props = NativeStackScreenProps<RootStackParmLists, "SignupScreen"> & CompProps

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
export default class SignupScreen extends React.Component<props, CompState> {
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

        return (
            <>
                {this.state.isLoading ? (
                    <View style={styles.container}>
                        <AppSpinner></AppSpinner>

                    </View>
                ) : (
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.header}>
                            <AntDesign name="adduser" size={25} color={primaryColor} />
                            <Text style={styles.text}>Create an account</Text>
                        </View>

                        <FormInput
                            // labelValue={firstName}
                            onChangeText={text => handleChange('firstName', text)}
                            placeholderText="First Name"
                            iconType="form"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <FormInput
                            // labelValue={lastName}
                            onChangeText={text => handleChange('lastName', text)}
                            placeholderText="Last Name"
                            iconType="form"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <FormInput
                            // labelValue={email}
                            onChangeText={text => handleChange('email', text)}
                            placeholderText="Email"
                            iconType="mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <FormInput
                            // labelValue={password}
                            onChangeText={text => handleChange('password', text)}
                            placeholderText="Password"
                            iconType="lock"
                            secureTextEntry={true}
                        />

                        <FormInput
                            // labelValue={confirmPassword}
                            onChangeText={text => handleChange('confirmPassword', text)}
                            placeholderText="Confirm Password"
                            iconType="lock"
                            secureTextEntry={true}
                        />

                        {this.state.errMsg.trim().length !== 0 && (
                            <Text style={globalStyle.error}>{this.state.errMsg}</Text>
                        )}

                        <FormButton buttonTitle="Sign Up" onPress={() => Alert.alert('submit')} />

                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 25,
        marginLeft: 5,
        color: primaryColor,
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: primaryColor,
        fontFamily: 'Lato-Regular',
    },
});
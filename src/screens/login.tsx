import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../assets/logo.png")
import auth, { signInWithPopup } from '@react-native-firebase/auth';
import { NativeStackScreenProps, NativeStackView } from '@react-navigation/native-stack';
import { RootStackParmLists } from '../../App';
// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com
type loginProps = NativeStackScreenProps<RootStackParmLists,"Login">

export default function LoginScreen({navigation}:loginProps) {
    const [username,setUsername]=  useState("suresh.patil8994@gmail.com");
    const [password,setPassword]=  useState("123456");

    const [isLogin,setIsLogin]=  useState(true);

    const validateEmail = (email:string) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword(username, password)
            .then(() => {
                Alert.alert("User Created Successfuly!");
                ResetFields();
                setIsLogin(true);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert('That email address is already in use!');
                }
                else if (error.code === 'auth/invalid-email') {
                  Alert.alert('That email address is invalid!');
                }
                else
                  Alert.alert('error occured');
            });
    }

    const signInUser = () => {
      auth()
          .signInWithEmailAndPassword(username, password)
          .then((results) => {          
              const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    // localStorage.setItem("auth", JSON.stringify(authInfo));    
              Alert.alert("Login Successfuly!")
              Alert.alert(JSON.stringify(authInfo))
              navigation.replace('FamilyTree',authInfo)
          })
          .catch(error => {
            Alert.alert(error.code);
          });
  }

  const loginOperations = () => {
    if(username.length==0 || password.length==0)
      Alert.alert('Provide Email Address/Password')
    else if (!validateEmail(username)) {
      Alert.alert('Provide Valid Email Address')
    } 
    else{
    if(isLogin)
        signInUser();
    else
        createUser();
    }
  }
  
  const forgotPassword = () => {
    if(username.length==0)
      Alert.alert('Provide Email Address')
    else if (!validateEmail(username)) {
      Alert.alert('Provide Valid Email Address')
    } 
    else
    {
      auth().sendPasswordResetEmail(username)
      .then(function (user) {
        Alert.alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
    }
  }
  const ResetFields = () => {
    setUsername('');
    setPassword('');
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>{isLogin?'LOGIN':'SIGN UP'}</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                   
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.rememberView}>
            {/* <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View> */}
            {isLogin && <View>
                <Pressable onPress={() =>forgotPassword()}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>}
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() =>{
               loginOperations()
            }}>
                <Text style={styles.buttonText}>{isLogin?'LOGIN':'SIGN UP'}</Text>
            </Pressable>
        </View>
        <Text style={styles.footerText}>{isLogin?`Don't Have Account? `:'Do you Have Account? '}
                   <Text style={styles.signup} onPress={()=>{
                    ResetFields();
                    setIsLogin(!isLogin)}} >  
                    {isLogin?'Sign Up':'Login'}</Text>
              </Text>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
  },
  image : {
    height : 160,
    width : 170
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "red"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "red",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "red",
  },
  button : {
    backgroundColor : "red",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "red",
    fontSize : 13
  }
})
// import React, { useState } from 'react'
// import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
// const logo = require("../assets/logo.png")
// import auth, { signInWithPopup } from '@react-native-firebase/auth';
// import { NativeStackScreenProps, NativeStackView } from '@react-navigation/native-stack';
// import { RootStackParmLists } from '../../App';
// import { Alerts } from './Alerts';
// import { AppSpinner } from './spinner';

// type loginProps = NativeStackScreenProps<RootStackParmLists, "Login">

// type alertstatusType = { isShow: boolean, status: string, title: string }


// export default function LoginScreen({ navigation }: loginProps) {
//   const obj: alertstatusType = { isShow: false, status: '', title: '' };
//   const [username, setUsername] = useState("suresh.patil8994@gmail.com");
//   const [password, setPassword] = useState("123456");
//   const [alertStatus, setAlertStatus] = useState(obj);
//   const [showSpinner, setShowSpinner] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);

//   const validateEmail = (email: string) => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };
//   const createUser = async () => {
//     setShowSpinner(true);
//     try {
//       await   auth()
//       .createUserWithEmailAndPassword(username, password)
//       .then(() => {
//         setShowSpinner(false);
//         SetAlert( {isShow: true,status: "success",title: "User Created Successfuly!"},true,3000);
//         ResetFields();
//         setIsLogin(true);
//       })
//       .catch(error => {
//         setShowSpinner(false);
//         if (error.code === 'auth/email-already-in-use') {
//           SetAlert( {isShow: true,status: "error",title: "That email address is already in use!"},true,3000);
//         }
//         else if (error.code === 'auth/invalid-email') {
//           SetAlert( {isShow: true,status: "error",title: "That email address is invalid!"},true,3000);
//         }
//         else
//           SetAlert( {isShow: true,status: "error",title: "error occured"},true,3000);
//       });

//     } catch (err) {
//       setShowSpinner(false);
//       SetAlert( {isShow: true,status: "error",title: "error occured"},true,3000);
//     }
//   }

//   const signInUser = async () => {
//     setShowSpinner(true);
//     try {
//       await 
//       auth()
//       .signInWithEmailAndPassword(username, password)
//       .then((results) => {
//         const authInfo = {
//           userID: results.user.uid,
//           name: results.user.displayName,
//           profilePhoto: results.user.photoURL,
//           isAuth: true,
//         };

//         setTimeout(() => {
//           setShowSpinner(false);
//           setAlertStatus(
//             {
//               isShow: true,
//               status: "success",
//               title: "Login Successfuly!"
//             }
//           )
//         }, 1000)

//         setTimeout(() => {
//           navigation.replace('Expenses', authInfo)
//         }, 2500)
//       })
//       .catch(error => {
//           setShowSpinner(false);
//           setAlertStatus(
//             {
//               isShow: true,
//               status: "error",
//               title: error.code
//             }
//           )
//       });
     
//     } catch (err) {

//     }
//   };


//   const loginOperations = () => {

//     if (username.length == 0 || password.length == 0)
//        SetAlert( {isShow: true,status: "warning",title: "Provide Email Address/Password"},true,3000);
//     else if (!validateEmail(username)) {
//        SetAlert( {isShow: true,status: "warning",title: "Provide Valid Email Address"},true,3000);
//     }
//     else {
//       if (isLogin)
//         signInUser();
//       else
//         createUser();
//     }
//    }

//   const forgotPassword = async () => {
//     if (username.length == 0)
//       SetAlert( {isShow: true,status: "warning",title: "Provide Email Address"},true,3000);
//     else if (!validateEmail(username)) {
//       SetAlert( {isShow: true,status: "warning",title: "Provide Valid Email Address"},true,3000);
//     }
//     else {
//       try {
//         await 
//         auth().sendPasswordResetEmail(username)
//         .then(function (user) {
//           SetAlert( {isShow: true,status: "success",title: "Please check your email..."},true,3000);
//         }).catch(function (e) {
//           console.log(e)
//         })
//       } catch (err) {
//         console.error(err);
//       }

     
//     }
//   }
//   const ResetFields = () => {
//     setUsername('');
//     setPassword('');
//   }
  
//   const SetAlert =(alertDetails:any,isAutoclose:boolean,closeTime:number) =>{
//     setAlertStatus(alertDetails)
//     if(isAutoclose)
//       ResetAlert(closeTime)
//   }


//   const ResetAlert =(closeTime:number) =>{
//     setTimeout(() => {
//       setAlertStatus(
//         {
//           isShow: false,
//           status: "",
//           title: ""
//         }
//       )
//     }, closeTime)
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Alerts alertStatus={alertStatus} />
//       <Image source={logo} style={styles.image} resizeMode='contain' />
//       <Text style={styles.title}>{isLogin ? 'LOGIN' : 'SIGN UP'}</Text>
//       <View style={styles.inputView}>
//         <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}

//           autoCapitalize='none' />
//         <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
//           autoCapitalize='none' />
//       </View>
//       <View style={styles.rememberView}>
//         {/* <View style={styles.switch}>
//                 <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
//                 <Text style={styles.rememberText}>Remember Me</Text>
//             </View> */}
//         {isLogin && <View>
//           <Pressable onPress={() => forgotPassword()}>
//             <Text style={styles.forgetText}>Forgot Password?</Text>
//           </Pressable>
//         </View>}
//       </View>

//       <View style={styles.buttonView}>
//         <Pressable style={styles.button} onPress={() => {
//           loginOperations()
//         }}>
//           <Text style={styles.buttonText}>{isLogin ? 'LOGIN' : 'SIGN UP'}</Text>
//         </Pressable>
//       </View>
//       <Text style={styles.footerText}>{isLogin ? `Don't Have Account? ` : 'Do you Have Account? '}
//         <Text style={styles.signup} onPress={() => {
//           ResetFields();
//           setIsLogin(!isLogin)
//         }} >
//           {isLogin ? 'Sign Up' : 'Login'}</Text>
//       </Text>
//       {showSpinner && <AppSpinner></AppSpinner>}

//     </SafeAreaView>

//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     paddingTop: 70,
//   },
//   image: {
//     height: 160,
//     width: 170
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     textAlign: "center",
//     paddingVertical: 40,
//     color: "red"
//   },
//   inputView: {
//     gap: 15,
//     width: "100%",
//     paddingHorizontal: 40,
//     marginBottom: 5
//   },
//   input: {
//     height: 50,
//     paddingHorizontal: 20,
//     borderColor: "red",
//     borderWidth: 1,
//     borderRadius: 7
//   },
//   rememberView: {
//     width: "100%",
//     paddingHorizontal: 50,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     marginBottom: 8
//   },
//   switch: {
//     flexDirection: "row",
//     gap: 1,
//     justifyContent: "center",
//     alignItems: "center"

//   },
//   rememberText: {
//     fontSize: 13
//   },
//   forgetText: {
//     fontSize: 11,
//     color: "red",
//   },
//   button: {
//     backgroundColor: "red",
//     height: 45,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold"
//   },
//   buttonView: {
//     width: "100%",
//     paddingHorizontal: 50
//   },
//   optionsText: {
//     textAlign: "center",
//     paddingVertical: 10,
//     color: "gray",
//     fontSize: 13,
//     marginBottom: 6
//   },
//   mediaIcons: {
//     flexDirection: "row",
//     gap: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 23
//   },
//   icons: {
//     width: 40,
//     height: 40,
//   },
//   footerText: {
//     textAlign: "center",
//     color: "gray",
//   },
//   signup: {
//     color: "red",
//     fontSize: 13
//   }
// })
import React, { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet } from 'react-native'
import TreeView from "react-native-animated-tree-view";
import ActionBarImage from './ActionBarImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmLists } from '../../App';
// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com
type familyTreeScreenProps = NativeStackScreenProps<RootStackParmLists,"FamilyTree">

export default function FamilyTreeScreen({navigation,route}:familyTreeScreenProps) {
    const authInfo=route.params;
    let newGuidd =()=> {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    const data = [

        {
            name: "आपाजी",
            value: newGuidd(),
            items: [
                {
                    name: "संतू",
                    value: newGuidd(),
                    items: [
                        {
                            name: "नाना",
                            value: newGuidd(),
                            items: [
                                {
                                    name: "हरी",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'शामराव',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'संतू',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },

                                    ]
                                },
                                {
                                    name: "लकु",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'गोविंदा',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'सीताराम',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'गोपाळ',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'रामा',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },

                                    ]
                                }
                            ]
                        },
                        {
                            name: "नाथा",
                            value: newGuidd(),
                            items: [
                                {
                                    name: "धोंडी",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'सखाराम',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'ज्ञानदेव',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'रंगराव',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'दिनकर',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'बळवंत',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'विठ्ठल',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: "पांडू",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'राजाराम',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'शिवाजी',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'संभाजी',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },

                                    ]
                                },
                                {
                                    name: "सातप्पा",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'दिनकर',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'गणपती',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        }, {
                                            name: 'आनंदा',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },

                                    ]
                                },

                                {
                                    name: "तुकाराम",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'बळवंत',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },

                            ]
                        },
                        {
                            name: "जीवबा",
                            value: newGuidd(),

                            items: [
                                {
                                    name: "विठू",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'तुकाराम',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'सयप्पा',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },

                                    ]
                                },

                            ]
                        },
                        {
                            name: "बाळा",
                            value: newGuidd(),
                            items: [
                                {
                                    name: "धोंडी",
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'बबन',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'रंगराव',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "बापू",
                    value: newGuidd(),
                    items: [
                        {
                            name: "कोंडी",
                            value: newGuidd(),
                            items: [
                                {
                                    name: 'म्हातू',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'रामा',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'लक्ष्मण',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'शंकर',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: "धोंडी",
                            value: newGuidd(),
                            items: [
                                {
                                    name: 'आबा',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'दगडू',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'शिवाजी',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'बाबू',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'श्रीपती',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'मारुती',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },

                            ]
                        },
                        {
                            name: " गुंडा",
                            value: newGuidd(),
                            items: [
                                {
                                    name: 'आप्पाजी',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'यशवंत',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'मल्लू',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'धोंडी',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'पांडू',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            name: "महादु",
                            value: newGuidd(),
                            items: [
                                {
                                    name: 'अण्णा',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'विठ्ठल',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'दत्तात्रय',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'रंगराव',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'संजय',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'गणू',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'राजाराम',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                        {
                                            name: 'बाळू',
                                            value: newGuidd(),
                                            items: [

                                            ]
                                        },
                                    ]
                                },
                            ]

                        }
                    ]
                },
                {
                    name: "लिंगू",
                    value: newGuidd(),
                    items: [
                        {
                            name: "कुशापा",
                            value: newGuidd(),
                            items: [
                                {
                                    name: 'शिवा',
                                    value: newGuidd(),
                                    items: [
                                        {
                                            name: 'भाऊ',
                                            value: newGuidd(),
                                            items: [
                                                {
                                                    name: 'धोंडी',
                                                    value: newGuidd(),
                                                    items: [

                                                    ]
                                                },
                                                {
                                                    name: 'दौलु',
                                                    value: newGuidd(),
                                                    items: [

                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]

                        }
                    ]
                }
            ]
        }
    ];
  return (
    <>
    <Pressable onPress={()=> 
              navigation.navigate('Login')        
    }>
    <ActionBarImage imageUrl={'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png'} />
        <TreeView data={data} />  
    </Pressable>
    </>   
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
  }
})
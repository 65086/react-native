import React from 'react';

import {View, Image} from 'react-native';


export default function ActionBarImage ({imageUrl}:any){
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:imageUrl
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

import React from 'react';
import {View, Text} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// NOTE: Icon example
const github = <FontAwesome6 name={'git'} brand />;
const comments = <FontAwesome6 name={'comments'} solid />;


const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
      }}>
      <Text>Hello, world! {github}</Text>
      <Text>{comments}</Text>
    </View>
  );
};

export default App;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

const App = () => {
  return (
    <View style={tw `p-10`}>
    
     
      <View style={tw `mt-20 justify-center items-center`}>
        <Text style={tw `font-bold text-2xl`}>Set Password</Text>
        <Text style={tw `text-gray-500`}>Enter your new password</Text>
        {/* <AntDesignIcon name={"facebook-square"} size={30} color="black" /> */}
      </View>

      <View style={tw `mt-20`}>
        <Text style={tw `text-gray-500`}>Password</Text>
        <TextInput  
          placeholder="Enter your full name"
          style={tw `text-gray-500 mt-3 p-3 border-gray-100 bg-gray-100 rounded-lg`} 
        />

        <Text style={tw `text-gray-500 mt-1`}>Retype Password</Text>
        <TextInput
          placeholder="Enter the password"
          style={tw `text-gray-500 mt-3 p-3 border-gray-100 bg-gray-100 rounded-lg`}
        />

       
      </View>

      <TouchableOpacity style={tw `bg-blue-500 mt-30 p-3 rounded-lg`}>
        <Text style={tw ` text-white text-2xl text-center`} >Set Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImagePropTypes, StyleSheet, Text, View } from 'react-native';


const MyName = (props)=>{
  return(
    <Text>{props.name}</Text>
  )
}

export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Love Calculator</Text>
        <StatusBar style="auto" />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  box :{
    color:"white",
    borderWidth:2,
    borderColor:"green",
    padding:12,
    margin:4,
    backgroundColor:'green',



  }
});

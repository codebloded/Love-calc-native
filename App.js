import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImagePropTypes, StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput , Button, Card} from 'react-native-paper';
import Display from "./Display";


const MyName = (props)=>{
  return(
    <Text>{props.name}</Text>
  )
}
const Header=()=>{
  return(
    <Appbar.Header>
      <Appbar.Content title="Love Calculator" subtitle="Try this "/>
    </Appbar.Header>
  )
  }



export default function App(){

  const[male, setText] = React.useState('');
  const[female, setFemale] = React.useState('');
  
 const calcSub = ()=>{
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${female}`,{
      headers:{
        "x-rapidapi-key": "3c3641769emsh228071872059680p18c3d4jsn7705a7ec7ca6",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      }
    }).then(res=>res.json())
      .then(data=>{
        console.log(data);
      })


  }

  
    return (

      <View style={styles.container}>
        <Header/>
        <TextInput 
        style={styles.textx}
        selectionColor="black"
        underlineColor="black"
          label="Male"
          value={male}
          onChangeText={male => setText(male)}
        />
        <TextInput 
         style={styles.textx}
          label="Female"
          value={female}
          onChangeText={female => setFemale(female)}
        />
        <Button icon="heart"
        color="purple"
         mode="contained"
          onPress={() =>calcSub()}
          style={styles.textx}
          >
          Calculate
  </Button>
<Display/>

  

      </View>
    );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textx:{
    margin:4,
   
  }
  
});

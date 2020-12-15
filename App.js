import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Linechart from "./src/components/Linechart";
import Barchart from "./src/components/Barchart";

import Logo from "./src/assets/dowhileLogo.png";

export default function App() {
  const countdown = [73000, 62000, 71000, 70000, 49000, 63000, 39000, 22000, 28000, 8000];
  const countdownPeople = [{
    value: 74000,
    label: `${new Date(2020, 10, 24)}`,
  },
  {
    value: 62417,
    label: `${new Date(2020, 10, 25)}`,
  },
  {
    value: 71302,
    label: `${new Date(2020, 10, 26)}`,
  },
  {
    value: 70355,
    label: `${new Date(2020, 10, 27)}`,
  },
  {
    value: 49093,
    label: `${new Date(2020, 11, 1)}`,
  },
  {
    value: 63540,
    label: `${new Date(2020, 11, 2)}`,
  },
  {
    value: 39941,
    label: `${new Date(2020, 11, 3)}`,
  },
  {
    value: 22282,
    label: `${new Date(2020, 11, 8)}`,
  },
  {
    value: 28726,
    label: `${new Date(2020, 11, 9)}`,
  },
  {
    value: 8097,
    label: `${new Date(2020, 11, 9)}`,
  },
];


  return (
    <View style={styles.container}>
      <View style={styles.barImage}><Image source={Logo}/></View>
      <ScrollView >
        <Linechart text={"Quantidade de pessoas COUNTDOWN"} chartData={countdown}/>
        <Barchart text={"Quantidade de pessoas por live"} chartData={countdownPeople}/>
     </ScrollView>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  barImage:{
    marginTop: 80,
    marginBottom: 80
  },
});

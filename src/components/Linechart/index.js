import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart, Grid} from 'react-native-svg-charts';
import { Defs, Stop, LinearGradient} from 'react-native-svg';



export default function Linechart({text, chartData}) {

  const Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={'rgb(255, 0, 142)'}/>
            <Stop offset={'50%'} stopColor={'rgb(255, 163, 123)'}/>
            <Stop offset={'100%'} stopColor={'rgb(255, 218, 54)'}/>

        </LinearGradient>
    </Defs>
)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <LineChart 
        style={{ height: 200 }}
        data={chartData}
        svg={{
          strokeWidth: 2,
          stroke: 'url(#gradient)',
        }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
        <Gradient/>
      </LineChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#201F24',
    height: 257,
    width: 300,
    padding: 15,
    marginBottom: 50
  },
  title:{
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
    marginBottom: 15
  }

 
});

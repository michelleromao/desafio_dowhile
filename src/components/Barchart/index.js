import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Defs, Stop, LinearGradient} from 'react-native-svg';

export default function Barchart({text, chartData}) {
  const Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={'rgb(255, 0, 142)'}/>
            <Stop offset={'100%'} stopColor={'rgb(255, 163, 123)'}/>
        </LinearGradient>
    </Defs>
)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <YAxis
        data={chartData}
        yAccessor={({ index }) => index}
        scale={scale.scaleBand}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        formatLabel={(_, index) => chartData[ index ].label}
      />
      <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={chartData}
        yAccessor={({ item }) => item.value}
        svg={{ fill: 'url(#gradient)' }}
        contentInset={{ top: 30, bottom: 30 }}
        spacing={0.2}
        >
        <Gradient/>
        <Grid />
       </BarChart>
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

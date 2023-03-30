import { StyleSheet, Text, View,TouchableOpacity,} from 'react-native'
import React, {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Water = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get today's date in the format "YYYY-MM-DD"
    const today = new Date().toISOString().slice(0, 10);

    // Get the stored value for today's date or set it to 0 if it doesn't exist
    AsyncStorage.getItem(today).then(value => {
      let storedCount = value ? parseInt(value) : 0;
      setCount(storedCount);
    });
  }, []);

  const incrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      AsyncStorage.setItem(new Date().toISOString().slice(0, 10), newCount.toString());
      return newCount;
    });
  };



  return (
      <View style={styles.container}>
        <View style={styles.c1}>
        <Text style={styles.txt1}>{count}</Text>
        <Text style={styles.no}>/11 Glasses</Text>
        </View>
        <View>
          <Text style={styles.txt1} onPress={incrementCount}>+</Text>
        </View>
      </View>
  )
}

export default Water

const styles = StyleSheet.create({
    container:{flexDirection:'row',backgroundColor:'#fff',justifyContent:'space-between',paddingHorizontal:25,alignItems:'center',borderColor:'#e6e6e6',borderWidth:2,borderRadius:20,marginHorizontal:20,paddingVertical:10},
    txt:{color:'#000',fontSize:30,fontWeight:'bold',paddingHorizontal:25},
    txt1:{color:'#000',fontSize:30,fontWeight:'bold'},
    c1:{flexDirection:'column'},
    no:{fontSize:15,color:'#444444',fontWeight:'bold'},
  })
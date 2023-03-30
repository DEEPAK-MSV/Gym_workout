import { StyleSheet, Text, TouchableOpacity, View,PermissionsAndroid } from 'react-native'
import React , {useState,useEffect} from 'react'
import { Pedometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';

const StepsScreen = () => {

    const [Steps, SetSteps]= useState(0);

    var Dis = Steps/1300;
    var distance = Dis.toFixed(2);
    var cal = distance*60;
    var calories = cal.toFixed(2);

    const permission =()=>{
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION) 
    }  
 
    useEffect(()=>{
      permission();
    },[]);


    useEffect(() => {
      // Get the saved daily step count on mount
      const getSavedStepCount = async () => {
        const savedCount = await AsyncStorage.getItem('dailyStepCount');
        if (savedCount) {
          SetSteps(parseInt(savedCount));
        }
      };
  
      // Subscribe to updates in step count
      const subscription = Pedometer.watchStepCount(result => {
        SetSteps(result.steps);
        // Save the updated daily step count to AsyncStorage
        AsyncStorage.setItem('dailyStepCount', result.steps.toString());
      });
      const resetStepCount = () => {
        setDailyStepCount(0);
        AsyncStorage.setItem('dailyStepCount', '0');
      };
      const now = new Date();
      const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
      );
      const timeUntilMidnight = midnight.getTime() - now.getTime();
      const intervalId = setInterval(resetStepCount, timeUntilMidnight);
  
      // Update the daily step count on mount
      getSavedStepCount();
  
      // Clean up subscription and interval on unmount
      return () => {
        subscription.remove();
        clearInterval(intervalId);
      };
    }, []);


    const props = {
      activeStrokeWidth: 20,
      inActiveStrokeWidth: 19,
      inActiveStrokeOpacity: 0.3
    };
  

  return (
      <View style={styles.touchable}>
        <View>
        <CircularProgressBase
            {...props}
            value={Steps}
            maxValue={10000}
            radius={80}
            activeStrokeColor={'#00FF00'}
            inActiveStrokeColor={'#00FF00'}
            
          >
            <CircularProgressBase
              {...props}
              value={distance}
              maxValue={10}
              radius={60}
              activeStrokeColor={'#6495ED'}
              inActiveStrokeColor={'#6495ED'}
            >
              <CircularProgressBase
                {...props}
                value={calories}
                maxValue={600}
                radius={40}
                activeStrokeColor={'#DE3163'}
                inActiveStrokeColor={'#DE3163'} 
              />
            </CircularProgressBase>
          </CircularProgressBase>
        </View>
        <View style={{flexDirection:'column'}}>
        <View>
          <Text style={styles.dc}>Steps</Text>
          <Text style={styles.val}>{Steps}</Text>
        </View>
        <View>
          <Text style={styles.dc}>Distance</Text>
          <Text style={styles.val}>{distance}</Text>
        </View>
        <View>
          <Text style={styles.dc}>Calories</Text>
          <Text style={styles.val}>{calories}</Text>
        </View>
        </View>
      </View>
  )
}

export default StepsScreen

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#202124'},
  touchable:{borderColor:'#898F9C',borderWidth:2,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:20,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'},
  texxt:{color:'#202124',fontSize:30,fontWeight:'bold'},
  steps:{color:'#cfcfcf', fontSize:30},
  dc:{color:'#202124',fontSize:19},
  val:{color:'#cfcfcf',fontSize:20},
  levels:{color:'#202124',fontSize:25,fontWeight:'bold'},
})
import { ScrollView, StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import StepsScreen from './StepsScreen'
import Water from './Water'


const HomeScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
        <View>
            <StepsScreen />
        </View>
        <View style={{flexDirection:'column',marginVertical:20}}>
          <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('wdb')}>
          <Text style={styles.levels}>Begginer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('wdi')} >
          <Text style={styles.levels}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('wda')}>
          <Text style={styles.levels}>Advance</Text>
        </TouchableOpacity>
      </View>
        <View>
            <Water/>
        </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#f4f4f4'},
    touchable:{borderColor:'#e6e6e6',borderWidth:3,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:20,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'},
    texxt:{color:'#202124',fontSize:30,fontWeight:'bold'},
    steps:{color:'#cfcfcf', fontSize:30},
    dc:{color:'#202124',fontSize:19},
    val:{color:'#cfcfcf',fontSize:20},
    levels:{color:'#202124',fontSize:25,fontWeight:'bold'},
})
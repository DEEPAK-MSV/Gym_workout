import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'

const Monday = ({navigation}) => {
  return (
    <View style={{flex:1,flexDirection:'column',height:'100%',width:'100%'}}>
      <Image style={styles.img} source={{uri:'https://xzonegym.com/images/product/chest_0.jpg'}}/>
      <ScrollView style={styles.container}>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Warmup</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Chest Press</Text>
        <Text style={styles.val}>4 x 12</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Incline Press</Text>
        <Text style={styles.val}>4 x 12</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Flat bench press</Text>
        <Text style={styles.val}>4 x 12</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Dumbell bench press</Text>
        <Text style={styles.val}>4 x 12</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>butterfly peck</Text>
        <Text style={styles.val}>4 x 12</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Cardio</Text>
        <Text style={styles.val}>20 Mins</Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default Monday

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#f4f4f4',paddingVertical:10,},
  img:{height:"35%",width:"100%", top:0,},
  touchable:{borderColor:'#e6e6e6',borderWidth:3,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:5,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',bottom:10},
  txt:{color:'#000',fontSize:20,fontWeight:'bold'},
  val:{color:'#cfcfcf',fontSize:20},
  
})
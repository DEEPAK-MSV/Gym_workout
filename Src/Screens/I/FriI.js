import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'

const FriI = () => {
  return (
    <View style={{flex:1,flexDirection:'column',height:'100%',width:'100%'}}>
      <Image style={styles.img} source={{uri:'https://www.xzonegym.com/images/product/abs_0.jpg'}}/>
      <ScrollView style={styles.container}>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Warmup</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>JumpJacks</Text>
        <Text style={styles.val}>10 x 50</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Russian Twists</Text>
        <Text style={styles.val}>3 x 20</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>V Up Crunches</Text>
        <Text style={styles.val}>3 x 20</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Crunches</Text>
        <Text style={styles.val}>4 x 20</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Leg Raises</Text>
        <Text style={styles.val}>3 x 20</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Plank</Text>
        <Text style={styles.val}>5 Mins</Text>
      </View>
      <View style={styles.touchable}>
        <Text style={styles.txt}>Cardio</Text>
        <Text style={styles.val}>25 Mins</Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default FriI

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#f4f4f4',paddingVertical:10,},
  img:{height:"35%",width:"100%", top:0,},
  touchable:{borderColor:'#e6e6e6',borderWidth:3,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:5,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',bottom:10},
  txt:{color:'#000',fontSize:20,fontWeight:'bold'},
  val:{color:'#cfcfcf',fontSize:20},
})
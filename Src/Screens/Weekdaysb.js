import { FlatList, StyleSheet, Text,TouchableOpacity, View ,Image,ScrollView } from 'react-native'
import React from 'react'

const Weekdaysb = ({navigation}) => {

  return (
    <View style={{flex:1,flexDirection:'column',height:'100%',width:'100%'}}>
      <Image style={styles.img} source={require("../Images/Wm.jpeg")}/>
      <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('mondayb')}>
        <Text style={styles.txt}>Monday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('tuesdayb')}>
        <Text style={styles.txt}>Tuesday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('wednesdayb')}>
        <Text style={styles.txt}>Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('thursdayb')}>
        <Text style={styles.txt}>Thursday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('fridayb')}>
        <Text style={styles.txt}>Friday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('satb')}>
        <Text style={styles.txt}>Saturday</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Weekdaysb

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#f4f4f4',paddingVertical:10,bottom:20},
    img:{height:"35%",width:"100%", top:0,},
    touchable:{borderColor:'#e6e6e6',borderWidth:3,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:5,marginHorizontal:20,flexDirection:'row',justifyContent:'center'},
    txt:{color:'#000',fontSize:20,fontWeight:'bold'}
})
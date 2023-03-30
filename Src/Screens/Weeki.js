import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'

const Weeki = ({navigation}) => {
  return (
    <View style={{flex:1,flexDirection:'column',height:'100%',width:'100%'}}>
      <Image style={styles.img} source={require('../Images/Wm.jpeg')}/>
      <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('mdi')}>
        <Text style={styles.txt}>Monday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('ti')}>
        <Text style={styles.txt}>Tuesday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('wi')}>
        <Text style={styles.txt}>Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('thi')}>
        <Text style={styles.txt}>Thursday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('fi')}>
        <Text style={styles.txt}>Friday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('si')}>
        <Text style={styles.txt}>Saturday</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Weeki

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#f4f4f4',paddingVertical:10,bottom:20},
    img:{height:"35%",width:"100%", top:0,},
    touchable:{borderColor:'#e6e6e6',borderWidth:3,backgroundColor:'#fff',borderRadius:20,alignItems:'center',paddingHorizontal:20,paddingVertical:20,marginVertical:5,marginHorizontal:20,flexDirection:'row',justifyContent:'center'},
    txt:{color:'#000',fontSize:20,fontWeight:'bold'}
})
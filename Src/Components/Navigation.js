import { Button, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Monday from '../Screens/B/Monday';
import Weekdaysb from '../Screens/Weekdaysb';
import Tuesday from '../Screens/B/Tuesday';
import Wednesday from '../Screens/B/Wednesday';
import Thursday from '../Screens/B/Thursday';
import Friday from '../Screens/B/Friday';
import Saturday from '../Screens/B/Saturday';
import Weeki from '../Screens/Weeki';
import MondayI from '../Screens/I/MondayI';
import TuesdayI from '../Screens/I/TuesdayI';
import WedI from '../Screens/I/WedI';
import Thui from '../Screens/I/Thui';
import FriI from '../Screens/I/FriI';
import SatI from '../Screens/I/SatI';
import WeekA from '../Screens/WeekA';
import MA from '../Screens/A/MA';
import TA from '../Screens/A/TA';
import WA from '../Screens/A/WA';
import ThA from '../Screens/A/ThA';
import FA from '../Screens/A/FA';
import SA from '../Screens/A/SA';


const Stack = createNativeStackNavigator();

const globalscreenoptions = {
  headerTitle:'GYM WORKOUT',
  headerTitleStyle:{color:"#4267B2",fontWeight:'bold',},
  headerTitleAlign:'center',
  headerStyle:{backgroundColor:'#fff'},
  headerTintColor:'#4367b2',
}


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={globalscreenoptions}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name='mondayb' component={Monday}/>
            <Stack.Screen name='wdb' component={Weekdaysb} options={{headerTitle:'Select Day',}}/>
            <Stack.Screen name='wdi' component={Weeki} options={{headerTitle:'Select Day'}}/>
            <Stack.Screen name='wda' component={WeekA} options={{headerTitle:'Select Day'}}/>
            <Stack.Screen name='tuesdayb' component={Tuesday}/>
            <Stack.Screen name='wednesdayb' component={Wednesday}/>
            <Stack.Screen name='thursdayb' component={Thursday}/>
            <Stack.Screen name='fridayb' component={Friday}/>
            <Stack.Screen name='satb' component={Saturday}/>
            <Stack.Screen name='mdi' component={MondayI}/>
            <Stack.Screen name='ti' component={TuesdayI}/>
            <Stack.Screen name='wi' component={WedI}/>
            <Stack.Screen name='thi' component={Thui}/>
            <Stack.Screen name='fi' component={FriI}/>
            <Stack.Screen name='si' component={SatI}/>
            <Stack.Screen name='ma' component={MA}/>
            <Stack.Screen name='ta' component={TA}/>
            <Stack.Screen name='wa' component={WA}/>
            <Stack.Screen name='tha' component={ThA}/>
            <Stack.Screen name='fa' component={FA}/>
            <Stack.Screen name='sa' component={SA}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});

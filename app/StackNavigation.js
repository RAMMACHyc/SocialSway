import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SinglePost from './screens/SinglePost';
import DrawerNavigator from './DrawerNavigator';


export default function StackNavigation() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown:false}} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="SinglePost" component={SinglePost} />
    </Stack.Navigator>
    
  )
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Icon from '@expo/vector-icons/Ionicons';



const homeName = "Home";
const settingsName = "Favorite";

const Tab = createBottomTabNavigator();


function MainContainer() {

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';

  
              } else if (rn === settingsName) {
                iconName = focused ? 'heart' : 'heart-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            tabBarStyle: { padding: 10, height: 70 }
          })}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={settingsName} component={SettingsScreen} />
          

  
        </Tab.Navigator>


      </NavigationContainer>
    );
  }

export default MainContainer;
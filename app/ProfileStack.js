import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import SinglePost from './screens/SinglePost';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SinglePost" component={SinglePost} />
      
    </Stack.Navigator>
  );
};

export default ProfileStack;

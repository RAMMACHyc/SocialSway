// HomeScreen.js
import React from 'react';
import { View } from 'react-native';
import UsersList from '../components/UsersList';

const HomeScreen = ({ navigation }) => {
    
    return(
        <View>
            <UsersList navigation={navigation} />
        </View>
    )
}

export default HomeScreen;

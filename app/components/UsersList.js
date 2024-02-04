import React from 'react';
import { View, FlatList } from 'react-native';
import UserComponent from './UserComponent';
import { DATA } from '../../data/usersData';
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
    const navigation = useNavigation();
  
    const handlePress = (item) => {
      navigation.navigate('ProfileScreen', { portfolio: item });
    };
  
    const renderItem = ({ item }) => (
      <UserComponent item={item} onPress={handlePress} /> 
    );
  
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} 
        />
      </View>
    );
  };
  
export default UsersList;


import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
// import { connect } from 'react-redux';
// import { setSelectedUser } from '../../redux/actions/userActions';

const UserComponent = ({ item, onPress }) => {
    
    return (
        <Pressable onPress={() => onPress(item.id)}>
            {({ pressed }) => (
                <View style={[styles.profile, { backgroundColor: pressed ? '#26d580' : '#fff' }]}>
                    <Text style={[styles.userName, { color: pressed ? '#fff' : '#000' }]}>{item.name}</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: item.img,
                        }}
                    />
                    <View style={styles.descriptionContainer}>
                        <Text style={[styles.description, { color: pressed ? '#fff' : '#000' }]}>{item.country}</Text>
                        <Text style={[styles.description, { color: pressed ? '#fff' : '#000' }]}>{item.photos.length}</Text>
                    </View>
                </View>
            )}
        </Pressable>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     onPress: (user) => dispatch(setSelectedUser(user)),
//   });
  
 


const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 650,
        borderRadius: 10,
        marginBottom: 10, 
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 7,
    },
    tinyLogo: {
        width: 350,
        height: 500,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 220,
        marginTop: 10,
    },
    description: {
        fontSize: 22,
        marginTop: 5,
    },
});

// export default connect(null, mapDispatchToProps)(UserComponent);
export default UserComponent;

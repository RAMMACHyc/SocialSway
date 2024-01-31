import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
    tinyLogo: {
      width: 350,
      height: 500,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 370,
        height: 650,
       
    },
    UserName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 7,
    },
    Des: {
        fontSize: 22,
        color: 'black',
        marginTop: 5,
      
    },
  
  });

export default function HomeScreen({ navigation }) {
    const [isPressed, setIsPressed] = React.useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable onPress={handlePress}>
                {({ pressed }) => (
                    <View style={[styles.profile, { backgroundColor: pressed ? '#26d580' : null, borderRadius: 10 }]}>
                        <Text style={[styles.UserName,{color: pressed ? 'white' : 'black',}]}>Khalifa</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://img.freepik.com/free-photo/man-with-tablet-learning-make-robot-close-up_23-2148863411.jpg?w=1060&t=st=1706606912~exp=1706607512~hmac=33de323ca5d25f0f6bdf2c238f90eb79228cc8861f4b9675cfe221183a587199',
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 220, marginTop: 10 }}>
                        <Text style={[styles.Des,{color: pressed ? 'white' : 'black'}]} >France</Text>
                        <Text style={[styles.Des,{color: pressed ? 'white' : 'black'}]}>5</Text>
                        </View>
                         
                    </View>
                )}
            </Pressable>
        </View>
    );
}
import * as React from 'react';
import { View, Text,StyleSheet,ScrollView, Image } from 'react-native';

export default function SinglePost({ route }) {
    const {post} = route.params;


    return (
        <ScrollView>
      <View style={[styles.header]}>
      <Image style={{ width: '100%',}} source={{ uri: post.url }} />
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>{post.title}</Text>
        <Text style={styles.bioDescription}>{post.photoDesc}</Text>
      </View>
   
    </ScrollView>
    );

    
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      height: 300,
    },
 
    bioContainer: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    bio: {
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    bioDescription: {
      fontSize: 18,
      width: '80%',
      lineHeight: 25,
      marginBottom: 20,
    },
    photoContainer: {
      flex: 1,
      gap: 20,
    },
   
  });
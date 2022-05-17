import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Pedro</Text>
            <TextInput placeholderTextColor='#555' placeholder='newSkill' style={styles.input}/>
            <TouchableOpacity 
            activeOpacity={0.5}
            style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.title, {marginTop:50}]}>My Skills</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#121015',
        paddingHorizontal:20,
        paddingVertical:70,
        paddingHorizontal:30
    },
    title: {
        color: '#fff',
        fontSize:30,
        fontWeight:'bold',
    },

    input: {
        backgroundColor:'#1f1e25',
        color: 'white',
        fontSize:18,
        padding: 10,
        marginTop: 30,
        borderRadius:7,
    },
    button: {
        backgroundColor:'#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems:'center',
        marginTop:20
    },
    buttonText: {
        color: '#FFF',
        fontSize:17,
        fontWeight:'bold'
    }
})


import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills([...mySkills, newSkill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Pedro</Text>
            <TextInput
                placeholderTextColor='#555'
                placeholder='newSkill'
                style={styles.input}
                onChangeText={setNewSkill}
            />
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
            {
                mySkills.map((skill) => (
                    <TouchableOpacity key={skill} style={styles.buttonskill}>
                        <Text style={[styles.textSkill]}>{skill}</Text>
                    </TouchableOpacity>

                ))
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#1f1e25',
        color: 'white',
        fontSize: 18,
        padding: 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonskill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },

    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
})


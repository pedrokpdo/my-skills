import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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
            <Button onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}>

            </FlatList>

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

})


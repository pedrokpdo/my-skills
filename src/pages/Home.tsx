import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id:string;
    name:string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [gretting, setGretting] = useState('')

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills([...mySkills, data])
    }

    useEffect(() => {
        const currentHour = new Date().getHours()

        if (currentHour < 12) {
            setGretting('Good Morning')
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good Afternoon')
        } else {
            setGretting('Good Night')
        }

    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Pedro</Text>
            <Text style={styles.greetings}>{gretting}</Text>
            <TextInput
                placeholderTextColor='#555'
                placeholder='newSkill'
                style={styles.input}
                onChangeText={setNewSkill}
            />
            <Button 
            onPress={handleAddNewSkill} 
            title='Add'
            />
            <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard skill={item.name} />
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
        color: '#fff',
        fontSize: 18,
        padding: 10,
        marginTop: 30,
        borderRadius: 7,
    },

    greetings: {
        color: '#fff',
    }

})


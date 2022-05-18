import React from "react";

import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonskill}
            {...rest}
        >
            <Text style={[styles.textSkill]}>{skill}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

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


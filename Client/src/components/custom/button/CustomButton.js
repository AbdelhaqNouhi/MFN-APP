import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, TextColor }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text 
                style={[styles.text, styles[`text_${type}`],
                TextColor ? {color: TextColor} : {}
                ]}> 
                {text} 
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 6,
        alignItems: 'center',
        borderRadius: 5,
    },
    
    container_PRIMARY: {
        backgroundColor: '#0E8388',
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'gray'
    },
})
export default CustomButton
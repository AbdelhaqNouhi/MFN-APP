import { View, Tex, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    console.log(value);
    console.log(setValue);
    console.log(placeholder);
    console.log(secureTextEntry);
    return (
        <View style={styles.container}>
            <TextInput
                value={ value }
                onChangeText={ setValue }
                placeholder={ placeholder } 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#2C3333',
        borderWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    }
})
export default CustomInput
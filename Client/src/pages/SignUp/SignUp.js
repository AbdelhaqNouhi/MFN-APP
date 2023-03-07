import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'
import SocialButton from '../../components/custom/SocialButton/SocialButton'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const SignUp = () => {
    const [full_name, setFull_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = async (e) => {

        e.preventDefault();
        const data = { full_name, email, password };

        await fetch("http://192.168.9.21:3000/api/RegisterUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    navigation.navigate('SignIn')
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Create an account !!</Text>
            <CustomInput 
                placeholder="Full Name" 
                value={full_name} 
                setValue={setFull_Name} 
            />
            <CustomInput
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password}
                setValue={setPassword} 
                secureTextEntry={ true }
            /> 
            <CustomButton 
                onPress={onRegisterPressed} 
                text="Register"  
            />
            <Text style={styles.text}> By registering, you confirm that you accept our{' '} <Text style={styles.link}>terms of Use</Text> and {' '}
                <Text style={styles.link}>Privacy Policy</Text>
            </Text>

            <CustomButton
                onPress={onSignInPress}
                text="Have an account? Sign In"
                type={"TERTIARY"}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        top: 50,
        gap: 12,
        padding: 30,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
})

export default SignUp
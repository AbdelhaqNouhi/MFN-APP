import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../assets/images/logo2.png'
import CustomInput from '../../components/custom/input/CustomInput'
import CustomButton from '../../components/custom/button/CustomButton'
import SocialButton from '../../components/custom/SocialButton/SocialButton'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const SignIn = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { height } = useWindowDimensions();
    const navigation = useNavigation();


    const onSignInPress = async (e) => {
        e.preventDefault();
        const User = { email, password };

        await fetch("http://192.168.9.21:3000/api/LoginUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(User)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    navigation.navigate('Home')
                }
            })
            .catch((err) => console.log(err));
    }

    const onForgetPasswordPressed = () => {
        console.warn('on Forget Password Pressed..!');
    }

    const onSignUpPress = () => {
        console.warn('on Sign Up Pressed..!');
        navigation.navigate('SignUp');
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image
                source={ logo } 
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode='contain'
            />
            <CustomInput 
                value={email}
                setValue={setEmail}
                placeholder="E-mail" 
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password" 
                secureTextEntry={ true }
            /> 

            <CustomButton 
                onPress={onSignInPress} 
                text="Sign In"  
            />
            <CustomButton 
                onPress={onForgetPasswordPressed} 
                text="Forget Password?" 
                type={"TERTIARY"}
            />

            
            <CustomButton
                onPress={onSignUpPress}
                text="Don't have an account? Create One"
                type={"TERTIARY"}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        gap: 12,
        padding: 30,
        alignItems: 'center',
    },

    logo: {
        width: '80%',
        maxWidth: 300,
        MaxHeight: 200,
    }
})

export default SignIn
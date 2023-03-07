import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../button/CustomButton'

const SocialButton = () => {
    
    const onSignInFacebook = () => {
        console.warn('On SignIn with Facebook..!');
    }

    const onSignInGoogle = () => {
        console.warn('On SignIn with Google..!');
    }

    return (
        <>
            <CustomButton
                onPress={onSignInFacebook}
                text="Sign In with Facebook"
                bgColor="#E7EAF4"
                TextColor="#4765A9"
            />
            <CustomButton
                onPress={onSignInGoogle}
                text="Sign In with Google"
                bgColor="#FAE9EA"
                TextColor="#DD4D44"
            />
        </>
    )
}

export default SocialButton
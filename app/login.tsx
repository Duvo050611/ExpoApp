import { useState } from "react"
import React from 'react'
import { useRouter } from "expo-router"
import { View, Text, TextInput, Button, Alert } from "react-native"

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email == 'hola@test.com' && password == '123456') {

        } else {

        }
    }

    return (
        <View>
            <TextInput placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="password" value={password} onChangeText={setPassword} />

            <Button title="INGRESAR" onPress={handleLogin} />
        </View>
    )
}


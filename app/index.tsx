import { useState } from "react";
import React from "react";
import { router, useRouter } from "expo-router";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'hola@test.com' && password === '123456') {
            router.replace('/(tabs)');
        } else {
            Alert.alert('Error', 'Credenciales no válidas');
        }
    };

    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="Correo" 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry
            />
            <Button title="INGRESAR" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 5
    }
});

import { api } from '@services/axios'
import React, { useState } from 'react'
import Logo from '../../../assets/img/logo.png'
import { useNavigate } from '@hooks/useNavigate'
import { formStyles } from '@theme/globalStyles'
import ButtonSolid from '@components/ButtonSolid'
import useAuthenticatedStore from '@stores/useAuthenticatedStore'
import { View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ImageBackground, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function LoginScreen() {
  const { navigate } = useNavigate()
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const { setIsAuthenticated } = useAuthenticatedStore()

  async function onSubmit() {
    try {
      const response = await api.post(`/login`, {
        email: email,
        senha: password
      })
      if (response.data.success) {
        setIsAuthenticated(true)
        const jsonValue = JSON.stringify(response.data.results)
        const teste = await AsyncStorage.setItem('dados-user', jsonValue)
        console.log(teste)
        
      } else {
        Alert.alert('Erro ao fazer login', response.data.message)
      }
    } catch (error: any) {
      Alert.alert('Erro ao fazer login')
      console.log('ERRO LOGIN =>', error.response.data)

    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground className='flex-1' source={require('../../../assets/img/bg-fundo.png')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className='flex-1 justify-center my-4'>
            <View className='mx-8'>
              <View>
                <Image
                  source={Logo}
                  className='mx-auto'
                  resizeMode="contain"
                />
              </View>
              <Text className='text-base text-center my-4'>
                O PlantScan é uma aplicativo de conexão de estudantes, professores e interessados para realizar o catálogo de plantas.
              </Text>
              <TextInput
                value={email}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={onChangeEmail}
                style={formStyles.compactInput}
              />

              <View className='mt-2'>
                <TextInput
                  value={password}
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={onChangePassword}
                  style={formStyles.compactInput}
                />
              </View>
              <View className='mt-2'>
                <TouchableOpacity
                  className='w-full items-end'
                  onPress={()=> navigate('RegisterScreen')}
                >
                  <Text>Criar conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View className='mx-8 mb-16'>
          <ButtonSolid
            text='Entrar'

            isLoading={false}
            handleLogin={onSubmit}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

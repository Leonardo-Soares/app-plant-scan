import { api } from '@services/axios'
import React, { useState } from 'react'
import Loading from '@components/Loading'
import Logo from '../../../assets/img/logo.png'
import { useNavigate } from '@hooks/useNavigate'
import { formStyles } from '@theme/globalStyles'
import ButtonSolid from '@components/ButtonSolid'
import { TextInputMask } from 'react-native-masked-text'
import { View, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ImageBackground, Alert, ScrollView } from 'react-native'

export function RegisterScreen() {
  const { navigate, goBack } = useNavigate()
  const [nome, onChangeNome] = useState('')
  const [email, onChangeEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [telefone, onChangeTelefone] = useState('')
  const [password, onChangePassword] = useState('')
  const [matricula, onChangeMatricula] = useState('')
  const [confirmPassword, onChangeConfirmPassword] = useState('')

  async function onSubmit() {
    setLoading(true)
    Keyboard.dismiss()

    try {
      const response = await api.post(`/usuario`, {
        name: nome,
        email: email,
        senha: password,
        telefone: telefone,
        numero_matricula: matricula
      })

      if (response.data.success) {
        Alert.alert('Sucesso', response.data.message)
        navigate('LoginScreen')
      } else {
        Alert.alert('Erro ao cadastrar usuário', response.data.message)
      }

    } catch (error: any) {
      Alert.alert('Erro ao cadastrar usuário')
      console.log('ERRO LOGIN =>', error.response.data)
    }
    setLoading(false)
  }

  return (
    <>
      {loading &&
        <Loading />
      }
      <KeyboardAvoidingView
        className="flex-1 bg-white"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground className='flex-1' source={require('../../../assets/img/bg-fundo.png')}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='flex-1 justify-center my-4'>
              <ScrollView className='mx-8 mb-4 mt-16'>
                <View>
                  <Image
                    source={Logo}
                    className='mx-auto'
                    resizeMode="contain"
                  />
                </View>

                <TextInput
                  keyboardType="default"
                  placeholder="Nome completo"
                  onChangeText={onChangeNome}
                  style={formStyles.compactInput}
                />

                <View className='mt-2'>
                  <TextInputMask
                    value={telefone}
                    type={'cel-phone'}
                    placeholder="Telefone"
                    keyboardType="decimal-pad"
                    style={formStyles.compactInput}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                    onChangeText={onChangeTelefone}
                  />
                </View>

                <View className='mt-2'>
                  <TextInput
                    value={email}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={onChangeEmail}
                    style={formStyles.compactInput}
                  />
                </View>

                <View className='mt-2'>
                  <TextInput
                    value={matricula}
                    keyboardType="default"
                    placeholder="Matrícula"
                    style={formStyles.compactInput}
                    onChangeText={onChangeMatricula}
                  />
                </View>

                <View className='mt-2'>
                  <TextInput
                    value={password}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    style={formStyles.compactInput}
                  />
                </View>

                {/* <View className='mt-2'>
                <TextInput
                  secureTextEntry={true}
                  value={confirmPassword}
                  placeholder="Confirmar senha"
                  style={formStyles.compactInput}
                  onChangeText={onChangeConfirmPassword}
                />
              </View> */}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>

          <View className='mx-8 mb-16'>
            <ButtonSolid
              text='Criar conta'
              isLoading={false}
              handleLogin={onSubmit}
            />
            <View className='my-2'></View>
            <ButtonSolid
              text='Voltar'
              isLoading={false}
              backgroundColor='#000'
              handleLogin={() => goBack()}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

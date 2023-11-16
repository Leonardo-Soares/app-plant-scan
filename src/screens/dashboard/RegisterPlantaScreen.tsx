import { colors } from '@theme/colors'
import LayoutMain from '@components/LayoutMain'
import { View, Text, Alert } from 'react-native'
import { useNavigate } from '@hooks/useNavigate'
import ButtonSolid from '@components/ButtonSolid'
import InputPrimary from '@components/Forms/InputPrimary'
import { api } from '@services/axios'
import { useState } from 'react'

export function RegisterPlantaScreen() {
  const { navigate } = useNavigate()
  const [efeitos, setEfeitos] = useState('')
  const [nomesGrupo, setNomesGrupo] = useState('')
  const [nomePopular, setNomePopular] = useState('')
  const [curiosidades, setCuriosidades] = useState('')
  const [nomeCientifico, setNomeCientifico] = useState('')
  const [caracteristicas, setCaracteristicas] = useState('')

  async function onSubmit() {
    try {
      const response = await api.post(`/planta`, {
        effects: efeitos,
        curiosities: curiosidades,
        names_group: nomesGrupo,
        name_popular: nomePopular,
        name_scientific: nomeCientifico,
        characteristics: caracteristicas,
      })
      console.log(efeitos);

      if (response.data.success) {
        Alert.alert('Sucesso', response.data.message)
        navigate('HomeScreen')
      } else {
        Alert.alert('Erro ao cadastrar planta', response.data.message)
      }

    } catch (error: any) {
      Alert.alert('Erro ao cadastrar planta')
      console.log('ERRO CADASTRO PLANTA =>', error.response.data)
    }
  }

  return (
    <LayoutMain ativaIcon={2}>
      <View className='mx-9 my-8'>
        <Text className='text-2xl font-bold'>Cadastro de Planta</Text>
        <View className='my-4'>
          <InputPrimary
            placeholder='Nome poupular'
            onChangeText={setNomePopular}
          />
          <InputPrimary
            mt={8}
            placeholder='Nome científico'
            onChangeText={setNomeCientifico}
          />
          <InputPrimary
            mt={8}
            placeholder='Curiosidades'
            onChangeText={setCuriosidades}
          />
          <InputPrimary
            mt={8}
            onChangeText={setEfeitos}
            placeholder='Efeitos da planta'
          />
          <InputPrimary
            mt={8}
            placeholder='Características'
            onChangeText={setCaracteristicas}
          />
          <InputPrimary
            mt={8}
            onChangeText={setNomesGrupo}
            placeholder='Em que grupo a espécie se encaixa'
          />
        </View>
        <ButtonSolid
          text='Cadastrar'
          handleLogin={onSubmit}
          backgroundColor={colors.greenSecondary}
        />
      </View>

    </LayoutMain>
  );
}

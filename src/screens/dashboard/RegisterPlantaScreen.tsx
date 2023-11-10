import { colors } from '@theme/colors'
import LayoutMain from '@components/LayoutMain'
import { View, Text, Alert } from 'react-native'
import ButtonSolid from '@components/ButtonSolid'
import InputPrimary from '@components/Forms/InputPrimary'

export function RegisterPlantaScreen() {


  async function onSubmit() {
    Alert.alert('Sucesso!', 'Planta cadastrada com sucesso')
  }

  return (
    <LayoutMain>
      <View className='mx-9 my-8'>
        <Text className='text-2xl font-bold'>Cadastro de Planta</Text>
        <View className='my-4'>
          <InputPrimary
            placeholder='Nome poupular'
          />
          <InputPrimary
            mt={8}
            placeholder='Nome científico'
          />
          <InputPrimary
            mt={8}
            placeholder='Curiosidades'
          />
          <InputPrimary
            mt={8}
            placeholder='Efeitos da planta'
          />
          <InputPrimary
            mt={8}
            placeholder='Características'
          />
          <InputPrimary
            mt={8}
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

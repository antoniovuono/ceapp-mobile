import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Profiles: React.FC = () => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Antonio"
      />
      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        autoCorrect={false}
        value="Vuono"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default Profiles;

import React, { useState } from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';


import { Button } from '../../Controllers/Button';
import { Input } from '../../Controllers/Input';
import { Form, Title } from './styles';

export function AccountForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    setIsLoading(true);

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Conta", "Cadastro com sucesso!"))
    .catch((error: any) => console.log(error))
    .finally(() => setIsLoading(false))

  }

  return (
    <Form>
      <Title>Cadastrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Form>
  );
}
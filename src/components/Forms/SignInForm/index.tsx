import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import { FooterButton } from '../../Controllers/FooterButton';
import { Button } from '../../Controllers/Button';
import { Input } from '../../Controllers/Input';
import { Form, Title, Footer } from './styles';
import { Alert } from 'react-native';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert("Logado com sucesso!")

    })
    
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir Senha", "Eniviamosum email poara você"))
    .catch(error => {
      setIsLoading(false)
      console.log(error)
    })
    
    
  }

  return (
    <Form>
      <Title>Entrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate('register')} />
        <FooterButton title="Esqueci senha" icon="email" onPress={handleForgotPassword} />
      </Footer>
    </Form>
  );
}
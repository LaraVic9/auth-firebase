import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { Home } from "../screens/Home";
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const subcriber = auth().onAuthStateChanged(setUser)

    return subcriber
  },[])
  
  return (
    <NavigationContainer>
      {user ? <Home/> : <AuthRoutes />}
    </NavigationContainer>
  );
}

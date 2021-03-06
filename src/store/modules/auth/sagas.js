import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    console.tron.log("Iniciando....");

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert('Erro no login','Usuário não pode ser prestador de serviços'); 
      return;
    }
    else Alert.alert('Sucesso','Login realizado com sucesso! ' + response.data.user.name);

    // Adiciona ao header da chamada api o token de autenticação
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    //history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação','Houve um erro no login, verifique seus Dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    //history.push('/');
  } catch (err) {
    Alert.alert('Falha no cadastro','Houve um erro no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  // Adiciona ao header da chamada api o token de autenticação
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);

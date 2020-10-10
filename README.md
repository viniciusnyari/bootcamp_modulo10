# bootcamp_modulo10
Treinamento RocketSeat - GoBarber Mobile

## Treinamento - Configuração do React Native
https://app.rocketseat.com.br/node/go-barber-mobile-1

## Instalando React Native
 - Verifique se está instalado o RN global
	- PS C:\temp\Bootcamp2019> npm install -g react-native-cli
 - Verifique a versão do RN		
	- PS C:\temp\Bootcamp2019> react-native -v
 - Rodar na pasta anterior 
	- npx --ignore-existing react-native init bootcamp_modulo10 --template react-native@^0.63.2

## Generate .editorConfig
- end_of_line = ls
- e as duas últimas para true

## Instalando EsLint
- Se tiver algum arquivo do eslint, remova-o
- yarn add eslint -D

- yarn eslint --init
 - √ How would you like to use ESLint? · style
 - √ What type of modules does your project use? · esm
 - √ Which framework does your project use? · react
 - √ Does your project use TypeScript? · No / Yes
 - √ Where does your code run? · No items were selected
 - √ How would you like to define a style for your project? · guide
 - √ Which style guide do you want to follow? · airbnb
 - √ What format do you want your config file to be in? · JavaScript
 - Responder YES para tudo o que aparecer

## Instalando Extensões
Yarn

## Instalação do Prettier
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

## Configuração do arquivo .eslintrc.js
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx','.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },
};

## Rodando React Native
npx react-native run-android
- Pode ser que seja necessário trocar de USB para que a aplicação seja propagada para o celular na USB 
- Só é necessário esse comando acima e conforme as alterações vão sendo salvas no código JS, o celular é atualizado

## Instalando o reactotron
yarn add reactotron-react-native

## Trabalhando com root import (usar ~ nas imagens)
yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D

## Endereço da aplicação RN
C:\Temp\Bootcamp2019\bootcamp_modulo10

## Treinamento GoBarber React Native
https://app.rocketseat.com.br/node/go-barber-mobile-1

## Solução de Problemas

## Configurando para usar o celular físico como emulador
	- Habilitar o modo desenvolvedor no celular físico - clicando 7x em cima do 'Número da Versão'
	-'Menu Sistema' e procurar pela opção Opções de 'Desenvolvedor' e ativar 'Depuração USB'
	
## Visualizar dispositivos com o comando 'adb devices' no CMD
	- C:\Users\vinic>adb devices
		- List of devices attached
		- 0055119550      device

## Caso esteja assim 'unauthorized':
	- List of devices attached
	- 4df798d76f98cf6d unauthorized

	- Revoke USB Debugging on phone
	- Restart ADB Server:
	- adb kill-server
	- adb start-server
	- Deve resolver :D

## Resetando o React Native
react-native start --reset-cache 
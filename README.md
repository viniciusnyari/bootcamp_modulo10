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
yarn add reactotron-react-native@3.6.4 reactotron-redux@3.1.1 reactotron-redux-saga@4.2.2
yarn add redux@4.0.4 redux-saga@1.0.5 react-redux@7.1.0

## Trabalhando com root import (usar ~ nas imagens)
yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D

## Instalando ReactNavigation (ver sempre a documentação - versão 4)
yarn add react-navigation@4
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

## Instalando Linear Gradient
yarn add react-native-linear-gradient

## Fazendo o link do Linear Gradient com RN
react-native link react-native-linear-gradient

## Instalando Styled Componentes
yarn add styled-components@4.3.2

## Instalando PropTypes
yarn add prop-types

## Instalando ícones
yarn add react-native-vector-icons

 - É preciso adicionar  no local 'build-grandle' da pasta android
	- project.ext.vectoricons = [
		iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
	]

	- apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

## Instalando o redux-persist e immer - para os estados dos objetos
yarn add redux-persist@5.10.0 immer@3.1.3

## Instalando o storage do RN
yarn add @react-native-community/async-storage@1.5.1

https://github.com/react-native-community/async-storage

## Instalando o axios para chamadas api
yarn add axios@0.19.0

## Instalando para trabalhar com datas
yarn add date-fns

## Instalando react-navigation-stack - pilha de páginas (New - Provider / Date e Confirm)
yarn add react-navigation-stack


## Endereço da aplicação RN
cd C:\Temp\Bootcamp2019\bootcamp_modulo10

## Rodando RN no celular
npx react-native run-android

## Treinamento GoBarber React Native
https://app.rocketseat.com.br/node/go-barber-mobile-1

Terminei essa Funcionalidade de agendamento/DatePicker por plataforma, porém temos problemas com pacotes
https://app.rocketseat.com.br/node/go-barber-mobile-1/group/funcionalidade-de-agendamento/lesson/date-picker-por-plataforma-1

## Projeto original - Outros
https://github.com/rocketseat-education/bootcamp-gostack-10
https://www.tgmarinho.com/gobarber_-_aplicacao_frontend_com_react/

### Deixar rodando o backend lá do `módulo02` - ver `Informações locais` <br>
cd C:\Temp\Bootcamp2019\bootcamp_modulo02  

### Deixar os serviços do docker rodando - subir docker desktop<br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker ps -a <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start database <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start mongobarber <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start redisbarber <br>

### Deixar rodando o servidor backend <br>
Em um outro terminal, acessar essa pasta `C:\Temp\Bootcamp2019\bootcamp_modulo02` 
e rodar `yarn sucrase-node src/server.js`

### Certificar IP da API(axios) e do ReactoTron
O ReactoTron usa um ip para o RN se comunicar
O axios (services/api) acessa o backend, certificar de usar o mesmo endereço

### Conclusão
Esse módulo foi concluído, porém precisamos ajustar algumas coisas
1) As imagens não estão renderizando
2) Ajustar o AvailableController no backend
C:\Temp\Bootcamp2019\bootcamp_modulo02\src\app\controllers
available: true, //consertar isso aqui que não está funcionando


### Criado um usuário para React Native
{
	"name": "João",
	"email": "joao@cliente.com",
	"password": "123456789"
}

{
	"name": "Jorge",
	"email": "jorge@cliente.com",
	"password": "123456789"
}

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

## bootcamp-gostack-10/package.json
{
  "name": "modulo10",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint .",
    "postinstall": "jetify"
  },
  "dependencies": {
    "@react-native-community/async-storage": "^1.5.1",
    "axios": "^0.19.0",
    "date-fns": "^2.0.0-beta.2",
    "immer": "^3.1.3",
    "prop-types": "^15.7.2",
    "react": "16.8.6",
    "react-native": "0.60.3",
    "react-native-gesture-handler": "^1.3.0",
    "react-native-linear-gradient": "^2.5.4",
    "react-native-vector-icons": "^6.6.0",
    "react-navigation": "^3.11.0",
    "react-redux": "^7.1.0",
    "reactotron-react-native": "^3.6.4",
    "reactotron-redux": "^3.1.1",
    "reactotron-redux-saga": "^4.2.2",
    "redux": "^4.0.4",
    "redux-persist": "^5.10.0",
    "redux-saga": "^1.0.5",
    "styled-components": "^4.3.2"
  },
  "devDependencies": {
    "@babel/core": "^7.5.4",
    "@babel/runtime": "^7.5.4",
    "@react-native-community/eslint-config": "^0.0.5",
    "babel-eslint": "10.0.1",
    "babel-jest": "^24.8.0",
    "babel-plugin-root-import": "^6.2.0",
    "eslint": "^6.0.1",
    "eslint-config-airbnb": "^17.1.1",
    "eslint-config-prettier": "^6.0.0",
    "eslint-import-resolver-babel-plugin-root-import": "^1.1.1",
    "eslint-plugin-import": "^2.18.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.2",
    "eslint-plugin-react-hooks": "^1.6.1",
    "jest": "^24.8.0",
    "jetifier": "^1.6.2",
    "metro-react-native-babel-preset": "^0.55.0",
    "prettier": "^1.18.2",
    "react-test-renderer": "16.8.6"
  },
  "jest": {
    "preset": "react-native"
  }
}
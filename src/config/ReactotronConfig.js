//import Reactotron from 'reactotron-react-native';
//import AsyncStorage from '@react-native-community/async-storage';
//import { AsyncStorage } from 'react-native'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if( __DEV__){  
  //const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  const tron = Reactotron
   .configure({
     host: '192.168.0.4', // my current wifi local ip in mac
     port: 9090,
   })
  //.configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(asyncStorage())
  .use(reactotronSaga())
  .connect();

  tron.clear();
  console.tron = tron;
}
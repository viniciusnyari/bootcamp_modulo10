import React, { useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/Background';
import { Container,ProvidersList,Provider, Avatar, Name } from './styles';

const SelectProvider = ({ navigation}) => {

  const [providers,setProviders] = useState([]);

  useEffect(()=>{
    async function loadProviders(){
      const response = await api.get('providers');
      setProviders(response.data);
    }

    loadProviders();
  },[]);

  return <Background>
    <Container>
      <ProvidersList
        data={providers}
        keyExtractor={provider=> String(provider.id)}
        renderItem={({item : provider})=> (
          <Provider onPress={()=> navigation.navigate('SelectDateTime', { provider})}>
            <Avatar source={{uri: 
              provider.avatar 
              ? provider.avatar.url 
              : 'http://localhost:3333/files/5855d952a101095d529793b191cbf6ec.png'}} />
            <Name>{provider.name}</Name>
          </Provider>
        )}
      />
    </Container>
  </Background>;
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerLeft:()=>(
    <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
      <Icon name="chevron-left" size={20} color="#FFF"/>
    </TouchableOpacity>
  ),
});

export default SelectProvider;

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

// import { Container } from './styles';

const Profile = () => {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => <Icon name="person" size={20} color={tintColor} />
};

export default Profile;
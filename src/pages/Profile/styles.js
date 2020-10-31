import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex:1; 
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255,255,255,0.2);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top:30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {padding: 30}
})`
  align-self: stretch;  
`;

/* Estilizando aquele componente que já criamos anteriormente */
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

/* Estilizando aquele componente que já criamos anteriormente */
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
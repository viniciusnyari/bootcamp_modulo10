import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';

import { format} from 'date-fns';
import pt from 'date-fns/locate/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const DateInput = ({date}) => {

  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    ()=> format(date,"dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={()=> setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20}/>
        <DateText></DateText>
      </DateButton>

      {opened && (
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
          />
      )}

    </Container>
    );
}

export default DateInput;
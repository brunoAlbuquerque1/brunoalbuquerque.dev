import React from 'react';
import { Container} from './styles';
import TitleSection from '../TitleSection/titleSection'
import Item from './item'

function Tecnology() {
  return (

    <Container>
        <TitleSection title="Minha trajetória" />
      
      <Item data='123' nameCompany='123'  office='123' description='123'/>

    </Container>
    
  );
}

export default Tecnology;

import React from 'react';
import { Container,WrapperCard} from './styles';
import TitleSection from '../TitleSection/titleSection'
import CardTecnology from './cardTecnology';

function Tecnology() {
  return (

    <Container>
        <TitleSection title="Areas de conhecimento" />
    <WrapperCard>
        <CardTecnology fade={'fade-up'}  nameTecnology="ReactJs"  />
        <CardTecnology fade={'fade-up'}  nameTecnology="React-Native"  />
        <CardTecnology fade={'fade-down'}  nameTecnology="Node"  />
        <CardTecnology fade={'fade-left'}  nameTecnology="NextJS"  />
        <CardTecnology fade={'fade-right'}  nameTecnology="React Testing Library"  />
        <CardTecnology fade={'fade-up'}  nameTecnology="Testing E2E"  />
        <CardTecnology fade={'fade-left'}  nameTecnology="Storybook"  />
    </WrapperCard>  
 

    </Container>
    
  );
}

export default Tecnology;

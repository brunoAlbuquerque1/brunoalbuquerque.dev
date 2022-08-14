import React from 'react';
import { Container} from './styles';
import TitleSection from '../TitleSection/titleSection'
import Item from './item'

function Tecnology() {
  return (

    <Container>
        <TitleSection title="Minha trajetória" />
      
      <Item data='Julho - 2022' nameCompany='Wiser Educação '  office='Senior Frontend Developer' description='Desenvolvedor Front-End ReactJs e Next.Js atuando no time de arquitetura melhorando a performace dos projetos da wiser'/>
      <Item data='Maio - 2022' nameCompany='Mouts TI'  office='Senior Frontend Developer' description='Desenvolvedor Front-End ReactJS Alocado no Grupo Ab Inbev'/>
      <Item data='Março - 2020' nameCompany='MagIT Partner'  office='Software Developer' description='Desenvolvedor Front End e mobile nas tecnologias React-native, React.js, '/>
      <Item data='Maio - 2019' nameCompany='Dart Digital'  office='Developer Mobile' description='Desenvolvedor Mobile com React-Native'/>
      <Item data='Julho - 2022' nameCompany='Adekz'  office='Developer Mobile' description='Desenvolvedor Mobile com React-Native'/>
      <Item data='Julho - 2022' nameCompany='Mouts TI'  office='Developer Mobile' description='Desenvolvedor Mobile, Front-End'/>

    </Container>
    
  );
}

export default Tecnology;

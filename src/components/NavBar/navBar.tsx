import React from 'react';
import avatar from '../../assets/foto.jpg';
import { Container, TextContainer } from './styles';
import Image from 'next/image'

export interface ILogo {
  //   image: HTMLImageElement;

}

function NavBar() {
  return (
    <Container>
      <div>
        <TextContainer>
          <h2>Bruno Albuquerque Carneiro </h2>
        </TextContainer>
      </div>
{/* <div style={{flex:1}}></div>
      <div style={{flex:1, justifyContent:'space-evenly',display:'flex'}}>

      <div>
       <h3>Inicio</h3>
      </div>
      <div>
         <h3>Tecnologias</h3>
      </div>
      <div>
         <h3>Projetos</h3>
      </div>
      <div>
         <h3>Tragetoria</h3>
      </div>
      <div>
         <h3>Contato</h3>
      </div>
      </div> */}
      {/* <div style={{margin:40}}>
        <TextContainer>
          <h2>Bruno Albuquerque</h2>
        </TextContainer>
      
      </div> */}
    
      
    </Container>
  );
}

export default NavBar;

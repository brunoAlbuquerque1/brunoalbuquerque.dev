import { Container, TextContainer, ImageWrapper } from './styles';
import Image from 'next/image'
import avatar from '../../assets/foto.jpg';

function About() {
  return (
    <Container >
      <div >
        <TextContainer>
          <h3>Desenvolvedor <br/> Front-End/Mobile</h3>
          {/* <h4> Desenvolvedor Front-End e Mobile por volta de uns 5 anos trabalhando em diversos projetos des do  "Tipo Uber" ate o "Tipo Ifood" em diversars areas de atuação </h4> */}
        </TextContainer>
      </div>
      <div style={{justifyContent:'center',display:'flex'}}>
      <ImageWrapper>
           <Image
            style={{borderRadius:200}}
            src={avatar}
            layout="responsive"
            />
      </ImageWrapper>
    </div>
    </Container>
  );
}

export default About;

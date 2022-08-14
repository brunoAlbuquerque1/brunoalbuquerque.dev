import React from 'react';
import { Container} from './styles';
import ProjectItem from './ProjectItem';
import TitleSection from '../TitleSection/titleSection'

function Projects() {
  return (

    <Container>
      <TitleSection title="Projetos" />

      <section>
        <ProjectItem  title="Projeto" description="Aguarde" />
        <ProjectItem  title="Projeto" description="Aguarde" />
        <ProjectItem  title="Projeto" description="Aguarde" />
        <ProjectItem  title="Projeto" description="Aguarde" />
        <ProjectItem  title="Projeto" description="Aguarde" />
      </section>
    </Container>
    
  );
}

export default Projects;

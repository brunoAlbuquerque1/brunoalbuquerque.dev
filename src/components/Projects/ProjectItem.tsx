import { ItemContainer } from './styles';

interface ProjectItemProps {
  title: string;
  description: string;
}

function ProjectItem({ title, description }: ProjectItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div style={{justifyContent:'space-between'}}>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>Ver Mais</p>
      </div>
    </ItemContainer>
  );
}

export default ProjectItem;

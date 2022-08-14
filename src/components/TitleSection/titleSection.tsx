import React from 'react';
import { Line ,ContainerText} from './styles';
interface TitleSectionProps {
    title: string;
  }
  

function TitleSection({title}: TitleSectionProps){
  return (
        <ContainerText>
            <h2>{title}</h2>
            <Line />
        </ContainerText>
  );
}

export default TitleSection;

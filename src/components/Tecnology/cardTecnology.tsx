import Image from 'next/image'
import avatar from '../../assets/picwish.png';
import {CardContainer ,Card} from './styles'
interface CardTecnologyProps {
  nameTecnology: string;
  fade:string
}

function CardTecnology({ nameTecnology, fade }: CardTecnologyProps) {
  return (
     <CardContainer data-aos={fade} >
        <Card>
            <Image
            style={{borderRadius:200}}
            src={avatar}
            layout="responsive"
            />
        </Card>
            <h3>{nameTecnology}</h3>
    </CardContainer>
  );
}

export default CardTecnology;

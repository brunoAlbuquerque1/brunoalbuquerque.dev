import Image from 'next/image'
import avatar from '../../assets/picwish.png';
import { Line,PointTitle,Point,ContTitleExperience,ContDescExperience } from  './styles'
interface ItemProps {
  nameTecnology: string;
  fade:string
}

function Item({ nameTecnology, fade }: ItemProps) {
  return (
    <div >
    <PointTitle>

        <Point />
            <ContTitleExperience>
                <h1>Maio 2021</h1>
            </ContTitleExperience>
    </PointTitle>
  

    <div style={{flexDirection:'row',display:'flex'}}>

    <Line />  
        <ContDescExperience>
                    <h1>Wiser Educacao</h1>
                    <h2>Wiser Educacao</h2>
                    <h3>Wiser Educacao</h3>
        </ContDescExperience>  
    {/* <div >
    <div style={{}}>
      <p>aaaaaaaaaaaaa</p>
    </div>
    <div>
      <p>aaaaaaaaaaaaa</p>
    </div>
    </div> */}
    
  </div>
    </div>
  );
}

export default Item;

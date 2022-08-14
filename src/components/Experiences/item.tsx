import Image from 'next/image'
import avatar from '../../assets/picwish.png';
import { Line,PointTitle,Point,ContTitleExperience,ContDescExperience } from  './styles'
interface ItemProps {
  data: string;
  nameCompany:string
  office:string
  description:string
}

function Item({ data, nameCompany ,office,description}: ItemProps) {
  return (
    <div >
    <PointTitle>

        <Point />
            <ContTitleExperience>
                <h1>{data}</h1>
            </ContTitleExperience>
    </PointTitle>

    <div style={{flexDirection:'row',display:'flex'}}>

    <Line />  
        <ContDescExperience>
                    <h1>{nameCompany}</h1>
                    <h2>{office}</h2>
                    <h3>{description}</h3>
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

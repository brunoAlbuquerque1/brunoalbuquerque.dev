import  * as S from './styles'
import { Link } from "react-router-dom";

export const NavBar = () => {
  
    return(
      <S.Container>

        {/* <S.Home>
          <S.WrapperMenu to="/" >
            <S.TextMenu  >Inicio </S.TextMenu> 
          </S.WrapperMenu>
        </S.Home>

        <S.About>
          <S.WrapperMenu to="/about">
              <S.TextMenu  >Quem Sou Eu </S.TextMenu>  
          </S.WrapperMenu>
        </S.About> */}

        <S.Project>
          <S.WrapperMenu to="/projects">
              <S.TextMenu  >Projetos </S.TextMenu>  
          </S.WrapperMenu>
        </S.Project>
        
        <S.Worked>
          <S.WrapperMenu to="/trajectory">
              <S.TextMenu >Por onde eu passei</S.TextMenu>
            </S.WrapperMenu>
        </S.Worked>

       <S.Tecnologi>
          <S.WrapperMenu to="/tecnologi">
             <S.TextMenu >Tecnologias</S.TextMenu>  
          </S.WrapperMenu>
        </S.Tecnologi>

        <S.Contact>
         <S.WrapperMenu to="/contact">
              <S.TextMenu >Contato</S.TextMenu>
          </S.WrapperMenu>
        </S.Contact>

      </S.Container>
    )
}
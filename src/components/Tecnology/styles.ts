import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
  h1 {
    color: #fff;
    font-size: 3.5rem;
    margin: 50px  0;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 2.5rem;
  }
  h3 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.5rem;
  }
  
 
`;

export const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
   
   
@media(max-width: 1000px) {
    grid-template-columns: repeat(3, 350px);

}
@media(max-width: 650px) {
    grid-template-columns: repeat(2, 350px);

}
@media(max-width: 300px) {
    grid-template-columns: repeat(2, 650px);

}
`

export const CardContainer = styled.div`
    flex-direction: column;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    &:hover > div {
        filter: brightness(1.8);
        transform: translateY(-10px);
    }

    &:nth-child(even) > div{
    }
`

export const Card = styled.div`
    height: 200px;
    margin-bottom: 20px;
    width: 200px;
    border-width: 1;
    border-radius: 100px;
    border-color: #fff;
    border-style: solid;
`

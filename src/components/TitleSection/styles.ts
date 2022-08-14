import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
 > section {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7rem;
    justify-content: space-between;
        }
        
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
`;

export const Line = styled.div`
    height: 4px;
    background-color: #4a1405;
    width: 80px;
    margin-top: 2px;
`

export const ContainerText = styled.div`
    margin-bottom: 20px;
`
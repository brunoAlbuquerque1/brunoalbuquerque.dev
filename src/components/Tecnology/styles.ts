import styled from 'styled-components';

// export const Container = styled.div`
//     height: 100vh;

// `;
export const Container = styled.section`
    width: 100%;
    > section {
        width: 100%;
        margin-top: 7rem;
        display: flex;
        gap: 1.5rem;

        padding-bottom: 8rem;
        border-bottom: 3px solid ${({ theme }) => theme.primary};

        @media(max-width: 1000px) {
            gap: 1rem;
        }

        @media(max-width: 700px) {
            flex-direction: column;
            margin-top: 5rem;
            gap: 2rem;
        }
    }
    h1 {
     color: #fff;
     font-size: 3.5rem;
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
    grid-template-columns: repeat(5, 200px);
    justify-content: space-between;
   
   
@media(max-width: 1000px) {
    grid-template-columns: repeat(3, 350px);

}
@media(max-width: 650px) {
    grid-template-columns: repeat(2, 350px);

}
@media(max-width: 500px) {
    grid-template-columns: repeat(1, 150px);
    align-items: center;
    justify-content: center;

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
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    border-width: 1;
    border-radius: 100px;
    border-color: #fff;
    border-style: solid;
`

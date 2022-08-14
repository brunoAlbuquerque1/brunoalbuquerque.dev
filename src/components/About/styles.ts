import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
display: flex;
height: 80vh;
gap: 2rem;
flex-direction: row;
align-items: center;
justify-content: center;

@media(max-width: 1450px) {
    > img {
        width: 30rem;
    }
    > div {
        flex: 1
    }
}

@media(max-width: 1000px) {
    > img {
        width: 22rem;
    }
}

@media(max-width: 700px) {
    flex-direction: column-reverse;
    margin-top:80;
    > div {
        width: 100%;
    }
}
`;

export const TextContainer = styled.section`
width: 100%;
margin-bottom: 2rem;


h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.text};
}

h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
}
h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
}
h4 {
    margin-top: 20px;
    font-size: 1.0rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
}

@media(max-width: 1450px) {
    h1 {
        font-size: 5rem;
    }

    h2 {
        font-size: 2rem;
    }
}

@media(max-width: 1000px) {
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 1.5rem;
    }
}
`;


export const ImageWrapper = styled.section`
    height: 400px;
    width: 400px;

    @media(max-width: 1000px) {
        height: 350px;
        width: 350px;

}
`;

import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
display: flex;
height: 80px;
background-color: #4a1405;
justify-content: center;
align-items: center;

h3 {
    font-size: 1.0rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
}
@media(max-width: 700px) {
   margin-bottom:90px;
}
`;

export const TextContainer = styled.section`
width: 100%;

h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
}

h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
}
h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
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
@media(max-width: 390px) {
    

    h2 {
        font-size: 1.0rem;
    }
}
`;



export const CodeItem = styled.pre`
    background: ${({ theme }) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #fff;
    width: 24rem;
    align-self: flex-start;
    transition: 1s !important;

    @media(max-width: 1450px) {
        width: 18rem;
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    @media(max-width: 1000px) {
        width: 100%;
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    &:hover {
        filter: brightness(1.2);
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
    }

    span.purple{
        color: #C38cdd;
    }

    span.blue{
        color: #7AC7E3;
    }

    span.comment{
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }
`;

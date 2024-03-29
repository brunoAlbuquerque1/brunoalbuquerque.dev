import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    > section {
        width: 100%;
        margin-top: 7rem;
        display: grid;
        gap: 1rem;
        padding-bottom: 8rem;
        border-bottom: 3px solid ${({ theme }) => theme.primary};
        grid-template-columns: repeat(4, 1fr);

        @media(max-width: 1400px) {
            gap: 1rem;
            grid-template-columns: repeat(3, 1fr);

        }

        @media(max-width: 700px) {
            flex-direction: column;
            margin-top: 5rem;
            gap: 2rem;
          grid-template-columns: repeat(1, 1fr);

        }
    }
`;


export const ItemContainer = styled.div`
    > div {
        background: ${({ theme }) => theme.gradient};
        padding: 1rem;
        padding-top: 2.5rem;
        height: 20rem;
        width: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 19rem;
        transition:  0.5s;

        h1 {
            color: ${({ theme }) => theme.primary};
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        h2 {
            color: ${({ theme }) => theme.secondary};
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
        }
        h3 {
            color: ${({ theme }) => theme.secondary};
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        p {
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
        }
    }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(-20px);
    }

    &:nth-child(even) > div{
        margin-top: 4rem;
    }

    @media(max-width:1000px) {
        > div {
            height: 15rem;
            padding-top: 1.5rem;

            h1 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            }

            h2 {
                font-size: 1rem;
            }

            p {
                font-size: .9rem;
            }
        }
    }

    @media(max-width:700px) {
        &:nth-child(even) > div {
            margin-top: 0;
        }

        &:hover > div {
            transform: translateY(0);
        }

        > div {
            height: auto;
            padding: 2rem;

            h1 {
            font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`;

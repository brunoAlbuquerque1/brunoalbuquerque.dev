import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.header`
    flex:1;
    background-color: #4A1405;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
`;

export const Home = styled.div`
    cursor: pointer;
    display:flex;
    margin: 10px;
    justify-content: end;
`;
export const About = styled.div`
    cursor: pointer;
    display:flex;
    margin: 10px;
    justify-content: start;
`;

export const Project = styled.div`
    cursor: pointer;
    display:flex;
    
    margin:40px 0 0 80px;
    justify-content: center;
`;

export const Worked = styled.div`
    cursor: pointer;
    display:flex;
    
    margin:45px 0 0 0px;
    justify-content: start;
`;

export const Tecnologi = styled.div`
    cursor: pointer;
    display:flex;
    
    margin:45px 0 0 0px;
    justify-content: end;    
`;
export const Contact = styled.div`
    cursor: pointer;
    display:flex;
    
    margin:45px 50px 0 0px;
    justify-content: center;    
`;


export const WrapperMenu = styled(Link)`
    border-width: 0.5px;
    border-color: #fff;
    border-style: solid;
    border-radius: 20px;
    padding: 5px;
    text-decoration: none;

`;

export const MenuDown = styled.div`
     
`;

export const TextMenu = styled.span`
    margin: 25px;
    font-size: 20px;
     color: #fff;
     font-weight: bold;
`;



import styled from "styled-components";

export const Container = styled.div`
    width: 1080px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #97ce4c;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 250px;

`;

export const Body = styled.div`
    flex: 1;
    margin-bottom: 20px;
`;

export const CharactersList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

export const InfoContainer = styled.div`
    width: 100%;
    text-align: center;
`;

export const Footer = styled.div`
    margin-bottom: 20px;
    color: white;
`;
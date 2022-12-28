import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(90deg, rgba(255,255,255, 0.15), #f0e14a);
    border-radius: 10px;
    padding: 15px;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;

    img {
        border: 1px solid black;
        border-radius: 5px;
    }
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;

    &:hover {
        color: #97ce4c;
    }
`;

export const Descriptions = styled.div`
    color: black;
`;

export const DescriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
`;
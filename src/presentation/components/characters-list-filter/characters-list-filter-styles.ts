import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 20px;
    background-color: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 10px;

    h4 {
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
    }
`;
export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`;

export const LabelInput = styled.label`
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    input, select {
        outline: 0;
        padding: 2px;
        border: 1px solid grey;
        border-radius: 5px;
        background-color: #f0e14a;
        font-weight: bold;
        }
`;
export const TextInput = styled.input`

`;

export const SelectInput = styled.select`

`;

export const ApplyButton = styled.button`
    background-color: #f0e14a;
    font-weight: bold;
    padding: 0px 40px;
    height: 26px;
    border: 2px solid grey;
    border-radius: 5px;
    margin-left: 10px;

    align-self: end;
`;


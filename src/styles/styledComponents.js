import styled from 'styled-components';
import { Card, Button, TextField } from '@material-ui/core';

export const TriangleImage = styled.img`
    width: 200px;
    height: 150px;
`

export const CalculatorCointainer = styled(Card)`
    && {
        background-color: #333333; 
        margin: 0 auto;
        width: 40%;
        margin-top: 1%;
    }
`

export const CalculatorScreen = styled(Card)`  
    && {
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 30%;
    }
`

export const CalculatorBody = styled.div`
    display: flex;
`

export const Keypad = styled.div`
    margin-top: 1.5%;
    padding-right: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
    width: 50%;
`

export const InputContainer = styled.form`
    margin-top: 1%;
    padding-top: 1%;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

export const Result = styled(TextField)`   
    && {
        margin-top: 45px;
        margin-right: 20px;
    }
`

export const SpecialButtons = styled(Button)`
    && {
        background-color: green;
        color: white;
        grid-column: 2/4;
    }
`

import styled from "styled-components";

export const DivSt = styled.div`
    border: 2px solid #1E182B;
    border-radius: 10px;
    width: 260px;
    padding: 10px;
    margin: 10px;
`

export const InputSt = styled.input`
    border: 0px;
    border-radius: 3px;
    width: 50px;

    $onHover {
        border: 4px solid #1E182B;
    }
`

export const Button = styled.button`
    background: #F39569;
    font-sizee 1em;
    color: white;
    border: 1px solid #BF7D5E;
    border-radius: 3px;
    cursor: pointer;
`

export const Info = styled.button`
    cursor: pointer;
    border-radius: 30px;
    border:1px;
    margin:0px 0px 0px 3px;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 2px;
`
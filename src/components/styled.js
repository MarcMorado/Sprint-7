import styled from "styled-components";
import info from "./img/info.png";

export const Button = styled.button`
    background: white;
    font-sizee 1em;
    padding: 18px;
    border: 1px solid #1E182B;
    border-radius: 0px;
    cursor: pointer;
    transotion: all .3s ease;

    &:hover{
        border: 3px solid #1E182B;
    }
`

export const Info = styled.button`
    backgroundImage: url(${info});
    cursor: pointer;
    height: 20px;
    width: 20px;
`
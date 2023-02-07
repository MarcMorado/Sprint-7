import styled from "styled-components";

export const DivSt = styled.div`
  border: 2px solid #1e182b;
  border-radius: 10px;
  width: 260px;
  padding: 10px;
  margin: 10px;
`;

export const InputSt = styled.input`
  border: 0px;
  border-radius: 3px;
  width: 50px;
  text-align: center;

  $onHover {
    border: 4px solid #1e182b;
  }
`;

export const Button = styled.button`
    background: #F39569;
    font-sizee 1em;
    color: white;
    border: 1px solid #BF7D5E;
    border-radius: 3px;
    cursor: pointer;
`;

export const Info = styled.button`
  cursor: pointer;
  border-radius: 30px;
  border: 1px;
  margin: 0px 0px 0px 3px;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 2px;
`;

export const SideBar = styled.div`
  padding: 0px 10px 10px 10px;
  border-radius: 20px;
  border: 8px;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 3px;
`;
export const SideBar2 = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
`;

export const MainDiv = styled.div`
  display: flex;
`;

export const DivOrdre = styled.div`
  padding: 0px 0px 10px 0px;
`;

export const BotOrdre = styled.button`
  padding: 5px 10px 5px 10px;
  margin: 1px;
`;

export const DivLista = styled.div`
  margin: 10px 0px 10px 0px; 
  padding: 4px;
  border: 10px black;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 1px;
`;

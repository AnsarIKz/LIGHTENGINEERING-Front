import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1160px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding-left: 30px;
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  flex: 1;
  min-height: 80px;
  max-height: 80px;

  border: 0px;
  border-radius: 5px;
  ${(props) =>
    props.type === "button"
      ? "background: linear-gradient(267.17deg, #ffc10e 0%, #ffcf45 100%); border-bottom: solid 3px #974800; color:white;"
      : ""}
`;

export const StyledSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledCard = styled.div`
  width: 360px;
`;

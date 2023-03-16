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
  border-radius: 1px;
`;

const StyledEntityImage = styled.div`
  margin: 40px 40px 40px 60px;
  height: 285px;
  width: 300px;
  border-radius: 1px;
  background: linear-gradient(269.73deg, #ffc10e 8.84%, #ffcf45 90.86%), #d9d9d9;
`;

const StyledEntity = styled.div`
  display: flex;
  background: #232323;
  width: 100%;
  border-radius: 1px;
`;

const StyledEntityDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const Entity = ({ created_at, title, subtitle }) => {
  return (
    <StyledEntity>
      <StyledEntityImage></StyledEntityImage>
      <StyledEntityDescription></StyledEntityDescription>
    </StyledEntity>
  );
};

import styled from "styled-components";
import { FontBody } from "../shared/fonts";
import { useNavigate } from "react-router-dom";

const StyledNavigationWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;

const StyledNav = styled(FontBody)`
  padding: 0px 10px;
  display: flex;
  align-self: center;
`;

const StyledButton = styled(FontBody)`
  padding: 6px 15px;
  border-radius: 112px;
  margin: 0px 10px;
  display: flex;
  align-self: center;
  background: linear-gradient(267.17deg, #ffc10e 0%, #ffcf45 100%);
`;

const NavigationMenu = () => {
  const navigation = useNavigate();
  return (
    <StyledNavigationWrapper>
      <StyledNav onClick={() => navigation("/catalog")}>Каталог</StyledNav>
      <StyledNav onClick={() => navigation("/blog")}>Блог</StyledNav>
      <StyledNav onClick={() => navigation("/useful")}>Полезное</StyledNav>
      <StyledNav onClick={() => navigation("/projects")}>Работы</StyledNav>
      <StyledNav onClick={() => navigation("/contacts")}>Контакты</StyledNav>
      <StyledButton>Экспорт</StyledButton>
    </StyledNavigationWrapper>
  );
};

export default NavigationMenu;

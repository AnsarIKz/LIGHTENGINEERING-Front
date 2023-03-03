import styled from "styled-components";
import { FontBody } from "../shared/fonts";

const StyledNavigationWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
`;

const StyledNav = styled(FontBody)`
  padding: 0px 10px;
  display: flex;
  align-self: center;
`;

const NavigationMenu = () => {
  return (
    <StyledNavigationWrapper>
      <StyledNav>Каталог</StyledNav>
      <StyledNav>Блог</StyledNav>
      <StyledNav>Полезное</StyledNav>
      <StyledNav>Работы</StyledNav>
      <StyledNav>Контакты</StyledNav>
    </StyledNavigationWrapper>
  );
};

export default NavigationMenu;

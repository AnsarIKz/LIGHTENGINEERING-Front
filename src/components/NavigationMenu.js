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
      <StyledNav
        onClick={() => navigation("/catalog")}
        color={window.location.pathname === "/catalog" ? "primary" : null}
      >
        Каталог
      </StyledNav>
      <StyledNav
        onClick={() => navigation("/blog")}
        color={window.location.pathname === "/blog" ? "primary" : null}
      >
        Блог
      </StyledNav>
      <StyledNav
        onClick={() => navigation("/useful")}
        color={window.location.pathname === "/useful" ? "primary" : null}
      >
        Полезное
      </StyledNav>
      <StyledNav
        onClick={() => navigation("/projects")}
        color={window.location.pathname === "/projects" ? "primary" : null}
      >
        Работы
      </StyledNav>
      <StyledNav
        onClick={() => navigation("/contacts")}
        color={window.location.pathname === "/contacts" ? "primary" : null}
      >
        Контакты
      </StyledNav>

      <StyledButton
        onClick={() => {
          window.open(
            "https://megallp.kz/storage/app/media/Light_Engineering_LLP_catalog.pdf",
            "_blank"
          );
        }}
      >
        Экспорт
      </StyledButton>
    </StyledNavigationWrapper>
  );
};

export default NavigationMenu;

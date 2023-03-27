import styled from "styled-components";
import { FontBody } from "../shared/fonts";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import appStore from "../shared/store/appStore";

const StyledNavigationWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  @media (max-width: 960px) {
    display: none;
  }
`;

const StyledNav = styled(FontBody)`
  padding: 0px 10px;
  display: flex;
  align-self: center;
  @media (max-width: 960px) {
    padding: 10px;
  }
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
    <StyledNavigationWrapper style={{ marginLeft: 30 }}>
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

const StyledBurgerMenuNavigation = styled.div`
  transition: 0.2s;

  position: fixed;
  right: 40px;
  top: 80px;
  background: #232323;
  border-radius: 7px;
  padding: 12px;
  z-index: 3;
  cursor: pointer;
`;
const StyledBurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const BurgerMenu = () => {
  return (
    <>
      <StyledBurgerMenu onClick={() => appStore.toggleBurgerMenu()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6C4 6 9.57574 6 13 6H16H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 18C4 18 6.57574 18 10 18M9.90289 18H13H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12C20 12 14.4243 12 11 12L8 12L4 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledBurgerMenu>
      <BurgerMenuNavigation />
    </>
  );
};

export const BurgerMenuNavigation = observer(() => {
  const navigation = useNavigate();

  return (
    <StyledBurgerMenuNavigation
      style={{ display: `${appStore.showBurgerMenu ? "flex" : "none"}` }}
    >
      <StyledNavigationWrapper
        style={{ flexDirection: "column", display: "flex" }}
      >
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
    </StyledBurgerMenuNavigation>
  );
});

export default NavigationMenu;

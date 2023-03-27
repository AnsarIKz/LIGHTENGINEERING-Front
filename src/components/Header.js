import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
import { StyledContainer } from "../shared/styledComponents";
import { FontBody, FontBodyBold, FontCaption } from "../shared/fonts";
import NavigationMenu, { BurgerMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledLogoBox = styled.div`
  height: 90px;
  width: 110px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: white;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  border-radius: ${({ isScrolled }) => (isScrolled ? 0 : "none")};
  cursor: pointer;
  transition: 0.5s;
`;

const StyledLogoImg = styled.img`
  height: 45px;
`;

const StyledLogoDescription = styled.span`
  display: flex;
  align-self: center;
  margin-left: 30px;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const LogoHeader = ({ isScrolled }) => {
  const navigation = useNavigate();
  return (
    <>
      <StyledLogoBox isScrolled={isScrolled} onClick={() => navigation("/")}>
        <StyledLogoImg src={LogoImg} />
      </StyledLogoBox>
      <StyledLogoDescription>
        <FontBody>
          <FontBodyBold onClick={() => navigation("/")}>
            ОФИЦИАЛЬНЫЙ САЙТ
          </FontBodyBold>
          <br /> В KZ
        </FontBody>
      </StyledLogoDescription>
    </>
  );
};

const StyledCallButtonBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    margin-left: 10px;
  }
`;

const CallButton = () => {
  const handleOpenWhatsApp = () => {
    window.open("https://wa.me/77057771221", "_blank");
  };

  return (
    <StyledCallButtonBox onClick={handleOpenWhatsApp}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="13" fill="white" />
        <circle cx="13" cy="12.9999" r="9.03333" stroke="#04CD00" />
        <path
          d="M17.3329 15.7744V17.6471C17.3329 17.7812 17.2821 17.9104 17.1907 18.0085C17.0993 18.1066 16.9741 18.1663 16.8403 18.1757C16.6089 18.1916 16.4198 18.2001 16.2737 18.2001C11.5936 18.2001 7.80005 14.4063 7.80005 9.72601C7.80005 9.57983 7.80799 9.39075 7.82441 9.1593C7.8338 9.02554 7.89357 8.90032 7.99166 8.80891C8.08975 8.71749 8.21887 8.66669 8.35295 8.66675H10.2256C10.2913 8.66668 10.3547 8.69104 10.4034 8.73508C10.4522 8.77913 10.4828 8.83972 10.4894 8.90508C10.5015 9.0269 10.5127 9.12382 10.5233 9.19744C10.6285 9.93199 10.8442 10.6464 11.163 11.3165C11.2133 11.4224 11.1805 11.549 11.0852 11.6168L10.5973 11.9654C10.2149 12.2387 10.0678 12.7458 10.3021 13.1532C10.9106 14.2114 11.7891 15.0899 12.8472 15.6985C13.2547 15.9327 13.7617 15.7857 14.035 15.4034L14.3825 14.9174C14.4158 14.8708 14.4644 14.8374 14.5199 14.823C14.5753 14.8086 14.6341 14.8141 14.6859 14.8385C15.3559 15.1568 16.0701 15.3719 16.8043 15.4767C16.8779 15.4873 16.9748 15.499 17.0956 15.5106C17.1609 15.5173 17.2213 15.548 17.2653 15.5967C17.3092 15.6455 17.3329 15.7088 17.3329 15.7744Z"
          fill="#04CD00"
        />
      </svg>
      <div>
        <FontBody>+7 (705) 777 12 21</FontBody>
        <br />
        <FontCaption color="secondary">Нажмите для звонка</FontCaption>
      </div>
    </StyledCallButtonBox>
  );
};

const StyledHeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  transition: 0.7s;
  z-index: 2;
  background: ${({ isScrolled }) => (isScrolled ? "#232323" : "none")};
`;

const StyledHeader = styled(StyledContainer)`
  display: flex;
  height: 90px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeaderContainer isScrolled={isScrolled}>
      <StyledHeader>
        <LogoHeader isScrolled={isScrolled} />
        <NavigationMenu />
        <CallButton />
        <BurgerMenu />
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;

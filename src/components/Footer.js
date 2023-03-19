import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
import { StyledContainer, StyledSection } from "../shared/styledComponents";
import { FontCaptionBold } from "../shared/fonts";
import { useNavigate } from "react-router-dom";

const StyledLogoBox = styled.div`
  height: 90px;
  width: 110px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledLogoImg = styled.img`
  height: 45px;
`;

const StyledFooterContainer = styled(StyledContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledFooterChapter = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 88px;
  justify-content: space-between;
`;

const Footer = () => {
  const navigation = useNavigate();
  return (
    <StyledSection style={{ background: "#232323" }}>
      <StyledFooterContainer>
        <StyledLogoImg onClick={() => navigation("/")} src={LogoImg} />
        <StyledFooterChapter>
          <FontCaptionBold onClick={() => navigation("/catalog")}>
            Каталог
          </FontCaptionBold>
          <FontCaptionBold onClick={() => navigation("/blog")}>
            Блог
          </FontCaptionBold>
          <FontCaptionBold onClick={() => navigation("/useful")}>
            Полезное
          </FontCaptionBold>
        </StyledFooterChapter>
        <StyledFooterChapter>
          <FontCaptionBold onClick={() => navigation("/projects")}>
            Работы
          </FontCaptionBold>
          <FontCaptionBold onClick={() => navigation("/contacts")}>
            Контакты
          </FontCaptionBold>
          <FontCaptionBold>...</FontCaptionBold>
        </StyledFooterChapter>
        <StyledFooterChapter></StyledFooterChapter>
        <StyledFooterChapter style={{ textAlign: "right" }}>
          <FontCaptionBold>+7 (705) 777 12 21</FontCaptionBold>
          <FontCaptionBold>® Light Engineering LLP</FontCaptionBold>
          <FontCaptionBold>
            © ТOO Light Engineering LLP 2020-2023
          </FontCaptionBold>
        </StyledFooterChapter>
      </StyledFooterContainer>
    </StyledSection>
  );
};

export default Footer;

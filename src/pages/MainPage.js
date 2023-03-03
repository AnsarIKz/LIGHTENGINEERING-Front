import Header from "../components/Header";
import styled from "styled-components";
import mainImg from "../assets/img/main.png";
import { StyledContainer } from "../shared/components";
import { FontHeader } from "../shared/fonts";

const StyledIntroductionSection = styled.div`
  height: 870px;
  background: url(${mainImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

const StyledIntroductionContainer = styled(StyledContainer)`
  margin-top: 140px;
`;

const StyledIntroductionTitle = styled.div`
  text-align: center;
`;

const IntroductionSection = (props) => {
  return (
    <StyledIntroductionSection>
      {props.children}
      <StyledIntroductionContainer>
        <StyledIntroductionTitle>
          <FontHeader>КАРАГАНДИНСКИЙ ЗАВОД</FontHeader>
          <br />
          <FontHeader color="primary">ПРАВИЛЬНОГО СВЕТА</FontHeader>
        </StyledIntroductionTitle>
      </StyledIntroductionContainer>
    </StyledIntroductionSection>
  );
};

const MainPage = () => {
  return (
    <>
      <IntroductionSection>
        <Header />
      </IntroductionSection>
    </>
  );
};

export default MainPage;

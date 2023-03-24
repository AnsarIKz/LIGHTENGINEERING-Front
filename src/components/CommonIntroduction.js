import { StyledContainer, StyledSection } from "../shared/styledComponents";
import Header from "./Header";
import commonbg from "../assets/img/commonintroductionbg.png";

const CommonIntroduction = ({ children }) => {
  return (
    <>
      <Header />
      <StyledSection
        style={{
          backgroundImage: `url(${commonbg})`,
          backgroundColor: "#232323",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "60vh",
          textAlign: "center",
        }}
      >
        <StyledContainer>{children}</StyledContainer>
      </StyledSection>
    </>
  );
};

export default CommonIntroduction;

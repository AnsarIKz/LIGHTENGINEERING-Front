import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";

const ProjectPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>НАШИ</FontHeader>
        <FontHeader color="primary">ПРОЕКТЫ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <Entity />
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default ProjectPage;

import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";

const Page = () => {
  return (
    <StyledSection>
      <StyledContainer></StyledContainer>
    </StyledSection>
  );
};

const BlogPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНЫЙ БЛОГ</FontHeader>
        <FontHeader color="primary">О СВЕТЕ</FontHeader>
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

export default BlogPage;

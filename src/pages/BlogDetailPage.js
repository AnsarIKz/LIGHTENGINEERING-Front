import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";

import { StyledContainer, StyledSection } from "../shared/styledComponents";

const BlogPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНЫЙ БЛОГ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer></StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default BlogPage;

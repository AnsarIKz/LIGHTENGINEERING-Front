import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontBody, FontHeader, FontTitle } from "../shared/fonts";

import { StyledContainer, StyledSection } from "../shared/styledComponents";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id, type } = useParams();
  useEffect(() => {
    fetchBlogDetail();
  }, []);
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНЫЙ БЛОГ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <FontTitle></FontTitle>
          <FontBody></FontBody>
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default BlogPage;

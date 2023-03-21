import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import {
  FontBody,
  FontCaption,
  FontFootnote,
  FontHeader,
  FontTitle,
  FontTitle2,
} from "../shared/fonts";

import {
  StyledContainer,
  StyledSection,
  months,
} from "../shared/styledComponents";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogDetail from "../shared/store/blogDetail";
import styled from "styled-components";

const StyledBlogContainer = styled(StyledContainer)`
  align-items: flex-start;
`;

const BlogDetailPage = observer(() => {
  const date = new Date(blogDetail.data?.created_at);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${month} ${day}, ${year}`;

  const { id, type } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    blogDetail.fetchBlogDetail({ id: id, blog_type: type }).catch((err) => {
      navigation("/error");
    });
  }, []);

  if (!blogDetail.data?.title) {
    return <></>;
  }

  return (
    <>
      <CommonIntroduction>
        <FontHeader>{blogDetail.data?.title.slice(0, 25)}...</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledBlogContainer>
          <FontFootnote color="black">{formattedDate}</FontFootnote>
          <FontTitle2 color="black" style={{ marginTop: 12 }}>
            {blogDetail.data?.title}
          </FontTitle2>
          <FontBody style={{ marginTop: 20 }} color="black">
            {blogDetail.data?.subtitle}
          </FontBody>
        </StyledBlogContainer>
      </StyledSection>
      <Footer />
    </>
  );
});

export default BlogDetailPage;

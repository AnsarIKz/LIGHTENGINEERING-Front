import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import postList from "../shared/store/postList";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";

const PostList = observer(() => {
  return postList.data.map((entity) => {
    return <Entity blog_type={"post"} {...entity} />;
  });
});

const BlogPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНЫЙ БЛОГ</FontHeader>
        <FontHeader color="primary">О СВЕТЕ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <PostList />
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default BlogPage;

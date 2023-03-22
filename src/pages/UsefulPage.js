import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";
import usefulList from "../shared/store/usefulList";

const UsefulList = observer(() => {
  return usefulList.data.map((entity) => {
    return <Entity blog_type={"useful"} {...entity} />;
  });
});

const UsefulPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНОЕ</FontHeader>
        <FontHeader color="primary">ПРО СВЕТ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <UsefulList />
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default UsefulPage;

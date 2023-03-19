import { observer } from "mobx-react-lite";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import projectList from "../shared/store/projectList";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";

const ProjectList = observer(() => {
  return projectList.data.map((entity) => {
    return <Entity {...entity} />;
  });
});

const ProjectPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>НАШИ</FontHeader>
        <FontHeader color="primary">ПРОЕКТЫ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <ProjectList />
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default ProjectPage;

import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";

const ProductDescription = () => {
  return <></>;
};

const ProductPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>ПОЛЕЗНОЕ</FontHeader>
        <FontHeader color="primary">ПРО СВЕТ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContainer>
          <ProductDescription></ProductDescription>
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default ProductPage;

import { useEffect } from "react";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";
import product from "../shared/store/product";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  let { productId } = useParams();
  useEffect(() => {
    product.fetchProduct(id);
  }, []);
  return <></>;
};

const ProductPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>КАТАЛОГ</FontHeader>
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

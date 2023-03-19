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

import category from "../shared/store/category";
import { CatalogNavigation } from "../components/CatalogNavigation";

const ProductDescription = () => {
  let { productId } = useParams();
  useEffect(() => {
    let load = async () => {
      await product.fetchProduct(productId);

      category.fetchCatalog(product.data.category);
    };
    load();
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
          <CatalogNavigation />
          <ProductDescription></ProductDescription>
        </StyledContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default ProductPage;

import { useEffect } from "react";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import { FontHeader, FontTitle, FontTitle2 } from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledSection,
} from "../shared/styledComponents";
import product from "../shared/store/product";
import { useParams } from "react-router-dom";

import category from "../shared/store/category";
import { CatalogNavigation } from "../components/CatalogNavigation";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

const StyledProduct = styled.div`
  display: flex;
  width: 100%;
`;

const StyledProductImage = styled.img`
  flex: 1;
`;
const StyledProductDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductDescription = observer(() => {
  return (
    <StyledProduct style={{ marginTop: 40 }}>
      <div>
        <StyledProductImage src={product.data.image} />
      </div>
      <StyledProductDescription>
        <FontTitle2 color="black">{product.data.name}</FontTitle2>
      </StyledProductDescription>
    </StyledProduct>
  );
});

const ProductPage = () => {
  let { productId } = useParams();
  useEffect(() => {
    let load = async () => {
      await product.fetchProduct(productId);
      category.fetchCatalog(product.data.category);
    };
    load();
  }, []);
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

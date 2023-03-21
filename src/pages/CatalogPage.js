import { useEffect, useState } from "react";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import API from "../shared/API";
import {
  FontBodyBold,
  FontHeader,
  FontTitle,
  FontTitle2,
} from "../shared/fonts";
import { StyledContainer, StyledSection } from "../shared/styledComponents";
import styled from "styled-components";
import category from "../shared/store/category";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { CatalogNavigation } from "../components/CatalogNavigation";

const StyledCatalogContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* создаем три колонки с равной шириной */
  gap: 40px; /* добавляем промежуток между элементами */
`;

const StyledCatalogEntity = styled.div`
  box-sizing: border-box;
  padding: 40px;
  min-height: 360px;
  background: #232323;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2px;
  cursor: pointer;
`;
const StyledCatalogEntityImage = styled.img`
  max-width: 280px;
`;

const Catalog = observer(() => {
  const { node } = useParams();
  useEffect(() => {
    category.fetchCatalog(node);
  }, [node]);
  return (
    <StyledSection
      style={{
        backgroundColor: "#303030",
        // backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StyledCatalogContainer>
        <CatalogNavigation />
        {category.list.map((category) => (
          <CatalogEntity key={category.id} data={category} />
        ))}
      </StyledCatalogContainer>
    </StyledSection>
  );
});

const CatalogEntity = ({ data: { id, name, is_product, image } }) => {
  const navigation = useNavigate();
  function handleClick() {
    console.log(id);
    if (is_product) {
      navigation(`/product/${id}`);
    } else {
      navigation(`/catalog/${id}`);
    }
  }
  return (
    <StyledCatalogEntity onClick={handleClick}>
      <StyledCatalogEntityImage src={image} />
      <FontTitle2 style={{ alignSelf: "flex-start" }}>{name}</FontTitle2>
    </StyledCatalogEntity>
  );
};

const CatalogPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>КАТАЛОГ</FontHeader>
      </CommonIntroduction>
      <Catalog />
      <Footer />
    </>
  );
};

export default CatalogPage;

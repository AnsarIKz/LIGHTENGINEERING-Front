import { useEffect, useState } from "react";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import API from "../shared/API";
import { FontBodyBold, FontHeader, FontTitle } from "../shared/fonts";
import { StyledContainer, StyledSection } from "../shared/styledComponents";
import styled from "styled-components";
import category from "../shared/store/category";
import { observer } from "mobx-react-lite";

const StyledCatalogContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* создаем три колонки с равной шириной */
  gap: 40px; /* добавляем промежуток между элементами */
`;

const StyledCatalog = styled.div`
  min-height: 360px;
  background: #232323;
`;

const Catalog = observer(() => {
  return (
    <StyledSection>
      <StyledCatalogContainer>
        <CatalogNavigation />
        {category.list.map((category) => (
          <CatalogEntity key={category.id} data={category} />
        ))}
      </StyledCatalogContainer>
    </StyledSection>
  );
});

const CatalogNavigation = () => {
  let reverseNavigation = [...category.navigation].reverse(); // копируем массив и изменяем порядок элементов на обратный
  function handleClick(id = null) {
    category.fetchCatalog(id);
  }
  return (
    <div style={{ gridColumn: "1 / -1", cursor: "pointer" }}>
      <FontBodyBold onClick={() => handleClick(null)} color="black">
        Каталог /
      </FontBodyBold>
      {reverseNavigation.map((nav, index, array) => {
        if (index != array.length - 1) {
          return (
            <FontBodyBold
              key={nav.id}
              onClick={() => handleClick(nav.id)}
              color="black"
            >
              {" "}
              {nav.name} /
            </FontBodyBold>
          );
        } else {
          return (
            <FontBodyBold key={nav.id} color="primary">
              {" "}
              {nav.name}
            </FontBodyBold>
          );
        }
      })}
    </div>
  );
};

const CatalogEntity = ({ data: { id, name, is_product } }) => {
  function handleClick() {
    console.log(id);
    if (is_product) {
    } else {
      category.fetchCatalog(id);
    }
  }
  return (
    <StyledCatalog onClick={handleClick}>
      <FontTitle>{name}</FontTitle>
    </StyledCatalog>
  );
};

const CatalogPage = () => {
  const [categories, setCategories] = useState([]);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      API.get("catalog/")
        .then((response) => setCategories(response.data))
        .catch((error) => console.error(error))
        .finally(() => setReady(true));
    }
  }, []);

  if (!isReady) {
    return null;
  }
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

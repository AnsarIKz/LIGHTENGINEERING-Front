import { useEffect } from "react";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import {
  FontBody,
  FontBodyBold,
  FontHeader,
  FontTitle,
  FontTitle2,
} from "../shared/fonts";
import {
  Entity,
  StyledContainer,
  StyledInput,
  StyledSection,
} from "../shared/styledComponents";
import product from "../shared/store/product";
import { useParams } from "react-router-dom";

import category from "../shared/store/category";
import { CatalogNavigation } from "../components/CatalogNavigation";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import bg from "../assets/img/section3bg.png";
import { useState } from "react";
import API from "../shared/API";

const StyledProduct = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

const StyledProductImage = styled.img`
  flex: 1;
  max-width: 320px;
`;
const StyledProductDescription = styled.div`
  box-sizing: border-box;
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledActionCard = styled.form`
  background: #232323;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 2px;
  justify-self: flex-end;
  align-items: flex-end;
  display: flex;
`;

const ActionCard = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const onHandleClick = () => {
    if (!name || !phoneNumber) {
      handleShow("Заполните оба поля");
      return;
    }

    API.post("requests/create/", {
      full_name: name,
      phone: phoneNumber,
    })
      .then((response) => {
        console.log(response.data); // Do something with the response if needed
        handleShow("Заявка отправлена");
      })
      .catch((error) => {
        console.error(error);
        handleShow("Ошибка, попробуйте позже.");
      });
  };
  return (
    <StyledActionCard>
      <StyledInput
        onChange={(event) => setName(event.target.value)}
        placeholder="Валерий Игубин"
      />
      <StyledInput
        onChange={(event) => setPhoneNumber(event.target.value)}
        placeholder="+7 705 772 88 40"
        style={{ marginRight: 20, marginLeft: 20 }}
      />{" "}
      <br />
      <StyledInput onClick={onHandleClick} value={"ЗАКАЗАТЬ"} type="button" />
    </StyledActionCard>
  );
};

const ProductDescription = observer(() => {
  return (
    <StyledProduct>
      <div>
        <StyledProductImage src={product.data?.image} />
      </div>
      <StyledProductDescription>
        <FontTitle2 color="primary">{product.data?.name}</FontTitle2>
        <br />
        {product.data?.body_material && (
          <span>
            <FontBodyBold color="white">Материал корпуса:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.body_material}</FontBody>
          </span>
        )}
        {product.data?.wind_region && (
          <span>
            <FontBodyBold color="white">Ветровой район:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.wind_region}</FontBody>
          </span>
        )}
        {product.data?.coating && (
          <span>
            <FontBodyBold color="white">Покрытие:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.coating}</FontBody>
          </span>
        )}
        {product.data?.luminous_flux && (
          <span>
            <FontBodyBold color="white">Световой поток, лм:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.luminous_flux}</FontBody>
          </span>
        )}
        {product.data?.power_consumption && (
          <span>
            <FontBodyBold color="white">Потребляемость, вт:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.power_consumption}</FontBody>
          </span>
        )}
        {product.data?.operating_voltage && (
          <span>
            <FontBodyBold color="white">Рабочее напряжение:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.operating_voltage}</FontBody>
          </span>
        )}
        {product.data?.plinth_type && (
          <span>
            <FontBodyBold color="white">Тип цоколя:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.plinth_type}</FontBody>
          </span>
        )}
        {product.data?.led_generation && (
          <span>
            <FontBodyBold color="white">Поколение светодиодов:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.led_generation}</FontBody>
          </span>
        )}
        {product.data?.protection_level && (
          <span>
            <FontBodyBold color="white">Степень защиты:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.protection_level}</FontBody>
          </span>
        )}
        {product.data?.length && (
          <span>
            <FontBodyBold color="white">Длина, мм:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.length}</FontBody>
          </span>
        )}
        {product.data?.size && (
          <span>
            <FontBodyBold color="white">Размер ДхШхВ:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.size}</FontBody>
          </span>
        )}
        {product.data?.height && (
          <span>
            <FontBodyBold color="white">Высота, мм:</FontBodyBold>{" "}
            <FontBody color="white">{product.data?.height} мм</FontBody>
          </span>
        )}
        {product.data?.bracket_outreach && (
          <span>
            <FontBodyBold color="white">Вылет кронштейна:</FontBodyBold>{" "}
            <FontBody color="white">
              {product.data?.bracket_outreach} мм
            </FontBody>
          </span>
        )}

        {product.data?.distance_between_holes && (
          <span>
            <FontBodyBold color="white">
              Расстояние между посадочными отверстиями для закладной:
            </FontBodyBold>{" "}
            <FontBody color="white">
              {product.data?.distance_between_holes} мм
            </FontBody>
          </span>
        )}

        {product.data?.profile_tube_size && (
          <span>
            <FontBodyBold color="white">Размер профильной трубы:</FontBodyBold>{" "}
            <FontBody color="white">
              {product.data?.profile_tube_size} мм
            </FontBody>
          </span>
        )}
        {product.data?.curve_power_light && (
          <span>
            <FontBodyBold color="white">Кривая Силы Света:</FontBodyBold>{" "}
            <FontBody color="white">
              {product.data?.curve_power_light} мм
            </FontBody>
          </span>
        )}
        {product.data?.light_angle && (
          <span>
            <FontBodyBold color="white">
              Угол светового потока, градусы:
            </FontBodyBold>{" "}
            <FontBody color="white">{product.data?.light_angle} мм</FontBody>
          </span>
        )}
        <br />

        {/* Description */}
        {product.data?.description && (
          <span>
            <FontBody color="white">{product.data?.description}</FontBody>
          </span>
        )}
        <ActionCard />
        <StyledInput
          style={{ marginTop: 40 }}
          value={"СКАЧАТЬ СХЕМУ СБОРКИ"}
          type="button"
        />
      </StyledProductDescription>
    </StyledProduct>
  );
});

const ProductPage = () => {
  let { productId } = useParams();
  useEffect(() => {
    let load = async () => {
      await product.fetchProduct(productId);
      category.fetchCatalog(product.data?.category);
    };
    load();
  }, []);
  return (
    <>
      <CommonIntroduction>
        <FontHeader>КАТАЛОГ</FontHeader>
      </CommonIntroduction>
      <StyledSection
        style={{
          backgroundColor: "#232323",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
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

import Header from "../components/Header";
import styled from "styled-components";
import mainImg from "../assets/img/main.png";
import {
  StyledCard,
  StyledContainer,
  StyledInput,
  StyledSection,
} from "../shared/styledComponents";
import {
  FontBody,
  FontBodyBold,
  FontCaption,
  FontFootnote,
  FontHeader,
  FontHeadline,
  FontHeadline2,
  FontHeadline2Bold,
  FontHeadlineBold,
  FontTitle,
  FontTitle2,
} from "../shared/fonts";

import product1 from "../assets/img/introductionproduct1.png";
import product2 from "../assets/img/introductionproduct2.png";
import product3 from "../assets/img/introductionproduct3.png";

import produced1 from "../assets/img/produced1.png";
import produced2 from "../assets/img/produced2.png";
import produced3 from "../assets/img/produced3.png";

import section2 from "../assets/img/section2bg.png";
import section3 from "../assets/img/section3bg.png";
import section4 from "../assets/img/section4bg.png";
import section5 from "../assets/img/section5bg.png";

import whywebg1 from "../assets/img/whywe1.png";
import whywebg2 from "../assets/img/whywe2.png";
import whywebg3 from "../assets/img/whywe3.png";
import whywebg4 from "../assets/img/whywe4.png";
import whywebg5 from "../assets/img/whywe5.png";
import whywebg6 from "../assets/img/whywe6.png";

import catalogbg from "../assets/img/catalogbg.png";
import catalog from "../assets/img/catalog1.png";

import instagrammockup from "../assets/img/instagrammockup.png";
import Footer from "../components/Footer";
import API from "../shared/API";
import { useContext, useState } from "react";
import { AlertContext } from "../shared/contexts/AlertContext";
import { observer } from "mobx-react-lite";
import productList from "../shared/store/productList";
import projectList from "../shared/store/projectList";
import { useNavigate } from "react-router-dom";
import review from "../shared/store/review";

const StyledIntroductionSection = styled.div`
  background: url(${mainImg});
  background-color: #232323;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  padding-top: 140px;
`;

const StyledIntroductionContainer = styled(StyledContainer)``;

const StyledIntroductionTitle = styled.div`
  text-align: center;
`;

const StyledIntroductionForm = styled.div`
  margin-top: 24px;
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 680px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 360px;
  }
`;

const StyledIntroductionFormInputs = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 270px);
  gap: 20px;
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 230px);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 360px);
  }
`;
const StyledTermsWarnings = styled(FontFootnote)`
  color: #848484;
  text-align: center;
`;

const StyledIntroductionProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIntroductionProduct = styled.div`
  height: 180px;
  min-width: 360px;
  background: white;
  border-radius: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 1200px) {
    min-width: 220px;
    display: none;
  }
`;

const IntroductionForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const { handleShow } = useContext(AlertContext);

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
    <StyledIntroductionForm>
      <StyledIntroductionFormInputs>
        <StyledInput
          placeholder="Валерий Игубин"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <StyledInput
          type="tel"
          placeholder="+7 705 772 88 40"
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
        />
      </StyledIntroductionFormInputs>
      <StyledInput
        onClick={onHandleClick}
        value={"Оставить заявку на консультацию"}
        style={{ marginTop: 20 }}
        type="button"
      />
      <StyledTermsWarnings style={{ marginTop: 12 }}>
        Нажимая на кнопку вы принимаете условия передачи информации
      </StyledTermsWarnings>
    </StyledIntroductionForm>
  );
};

const IntroductionSection = (props) => {
  return (
    <StyledIntroductionSection>
      {props.children}
      <StyledIntroductionContainer>
        <StyledIntroductionTitle>
          <FontHeader>КАРАГАНДИНСКИЙ ЗАВОД</FontHeader>
          <br />
          <FontHeader color="primary">ПРАВИЛЬНОГО СВЕТА</FontHeader>
        </StyledIntroductionTitle>
        <IntroductionForm />
        <StyledIntroductionProducts style={{ marginTop: 77, marginBottom: 77 }}>
          <StyledIntroductionProduct
            style={{
              backgroundImage: `url(${product1})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FontHeadlineBold style={{ marginTop: 90 }} color="black">
              Опоры и светильники
              <br /> на любой бюджет
            </FontHeadlineBold>
          </StyledIntroductionProduct>
          <StyledIntroductionProduct
            style={{
              marginLeft: 40,
              marginRight: 40,
              backgroundImage: `url(${product2})`,
              backgroundPosition: "center top 10px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FontHeadlineBold style={{ marginTop: 90 }} color="black">
              Отгрузка со склада
              <br />
              сразу же в день оплаты
            </FontHeadlineBold>
          </StyledIntroductionProduct>
          <StyledIntroductionProduct
            style={{
              backgroundImage: `url(${product3})`,
              backgroundPosition: "center top 10px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FontHeadlineBold style={{ marginTop: 90 }} color="black">
              Доставка в любую точку
              <br />
              СНГ по выгодной цене
            </FontHeadlineBold>
          </StyledIntroductionProduct>
        </StyledIntroductionProducts>
      </StyledIntroductionContainer>
    </StyledIntroductionSection>
  );
};

const StyledProducesContainer = styled(StyledContainer)`
  flex-direction: column;
  display: flex;
`;

const StyledProducesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledProduced = styled.div`
  min-height: 370px;
  width: 260px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: ${(props) => (props.index == 3 ? "none" : "flex")};
  }
  @media (max-width: 960px) {
    display: ${(props) =>
      props.index == 2 || props.index == 3 ? "none" : "flex"};
    width: 305px;
  }
`;

const StyledCatalog = styled.div`
  display: flex;
  background: url(${catalogbg});
  background-color: #232323;
  width: 100%;
  height: 260px;
  margin-top: 40px;
  justify-content: space-around;
  align-items: center;
`;
const StyledCatalogCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const StyledProducedDescription = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  justify-self: flex-end;
  text-align: right;
`;

const Produced = observer(({ index }) => {
  const navigation = useNavigate();
  return (
    <StyledProduced
      index={index}
      onClick={() => navigation(`/product/${productList.data[index]?.id}`)}
      style={{
        backgroundImage: `url(${produced1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <StyledProducedDescription>
        <FontHeadline2Bold>{productList.data[index]?.name}</FontHeadline2Bold>
        <br />
        <br />
        {productList.data[index]?.body_material && (
          <span>
            <FontFootnote color="white">Материал корпуса:</FontFootnote>
            <br />
            <FontHeadline2Bold color="white">
              {productList.data[index]?.body_material}
            </FontHeadline2Bold>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.wind_region && (
          <span>
            <FontFootnote color="white">Ветровой район:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.wind_region}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.coating && (
          <span>
            <FontFootnote color="white">Покрытие:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.coating}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.power_consumption && (
          <span>
            <FontFootnote color="white">Потребляемость, вт:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.power_consumption}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.operating_voltage && (
          <span>
            <FontFootnote color="white">Рабочее напряжение:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.operating_voltage}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.plinth_type && (
          <span>
            <FontFootnote color="white">Тип цоколя:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.plinth_type}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.led_generation && (
          <span>
            <FontFootnote color="white">Поколение светодиодов:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.led_generation}
            </FontBody>
            <br />
            <br />
          </span>
        )}
        {productList.data[index]?.protection_level && (
          <span>
            <FontFootnote color="white">Степень защиты:</FontFootnote>
            <br />
            <FontBody color="white">
              {productList.data[index]?.protection_level}
            </FontBody>
            <br />
            <br />
          </span>
        )}
      </StyledProducedDescription>
    </StyledProduced>
  );
});

const StyledCatalogImg = styled.img`
  height: 70%;
  @media (max-width: 1200px) {
    height: 50%;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
const OurProduces = () => {
  const navigation = useNavigate();
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section2})`,
        backgrundColor: "#232323",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <StyledProducesContainer>
        <FontTitle color="black">
          ЧТО МЫ ПРОИЗВОДИМ<FontTitle color="primary">?</FontTitle>
        </FontTitle>
        <FontHeadline color="black">Самые популярные товары</FontHeadline>
        <StyledProducesList style={{ marginTop: 40 + "px" }}>
          <Produced key={0} index={0} />
          <Produced key={1} index={1} />
          <Produced key={2} index={2} />
          <Produced key={3} index={3} />
        </StyledProducesList>
        <StyledCatalog>
          <StyledCatalogCard>
            <FontHeadline>
              ПЕРЕЙДИТЕ В КАТАЛОГ ЧТОБЫ УВИДЕТЬ ВСЕ ТОВАРЫ
            </FontHeadline>
            <StyledInput
              onClick={() => {
                navigation("/catalog");
              }}
              style={{ marginTop: 12 }}
              value={"Перейти в каталог"}
              type="button"
            />
          </StyledCatalogCard>

          <StyledCatalogImg src={catalog} />
        </StyledCatalog>
      </StyledProducesContainer>
    </StyledSection>
  );
};

const StyledWhyWeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* создаем три колонки с равной шириной */
  gap: 40px; /* добавляем промежуток между элементами */
  margin: 40px 0px 0px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledWhyWeCard = styled(StyledCard)`
  background: white;
  height: 220px;
  width: 360px;
  box-sizing: border-box;
  padding: 40px;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 960px) {
    width: 300px;
  }
  @media (max-width: 680px) {
    width: 360px;
    align-self: center;
    justify-self: center;
  }
`;

const StyledWhyWeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  text-align: center;
`;
const WhyWe = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section3})`,
        backgroundColor: "#232323",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <StyledContainer>
        <FontTitle style={{ textAlign: "center" }}>
          ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС <FontTitle color="primary">?</FontTitle>
        </FontTitle>
        <StyledWhyWeWrapper>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg1})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">Научный подход</FontBodyBold>

              <FontCaption color="black">
                У нас 9 патентов и инженеры со степенью PhD и MTech
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg2})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">5 лет гарантии!</FontBodyBold>
              <FontCaption color="black">
                Без разбора ситуации ремонтируем или меняем сбойный светильник
                на новый
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg3})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">По честной цене!</FontBodyBold>
              <FontCaption color="black">
                Мы работаем в "долгую" поэтому наши цены "не кусаются" и всегда
                обоснованы
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg4})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">На любой объект!</FontBodyBold>
              <FontCaption color="black">
                Благодаря собственной сборочной линии можно изготовить
                оборудование под самый требовательный проект
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg5})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">На любой бюджет!</FontBodyBold>
              <FontCaption color="black">
                Всегда можно найти решение на любой бюджет, дайте только
                направление и определите нам рамки
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
          <StyledWhyWeCard
            style={{
              backgroundImage: `url(${whywebg6})`,
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundSize: 120,
              backgroundRepeat: "no-repeat",
            }}
          >
            <StyledWhyWeDescription>
              <FontBodyBold color="black">Мы стараемся!</FontBodyBold>
              <FontCaption color="black">
                Мы пока не №1 на светотехническом рынке, поэтому очень стараемся
                чтоб ими стать
              </FontCaption>
            </StyledWhyWeDescription>
          </StyledWhyWeCard>
        </StyledWhyWeWrapper>
      </StyledContainer>
    </StyledSection>
  );
};

const StyledFormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #232323;
  width: 460px;
  text-align: center;
  padding: 40px 0;
  border-radius: 1px;
`;

const StyledFormInput = styled(StyledInput)`
  width: 320px;
`;

const ConsultingForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const { handleShow } = useContext(AlertContext);

  const onHandleClick = () => {
    // Make sure both name and phone number are filled in
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
    <StyledSection
      style={{
        backgroundImage: `url(${section4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <StyledContainer>
        <StyledFormWrapper>
          <div></div>
          <StyledForm>
            <FontTitle2 style={{ marginBottom: 12 }}>
              ПОЛУЧИТЕ
              <FontTitle2 color="primary"> БЕСПЛАТНУЮ</FontTitle2>
              <br></br> КОНСУЛЬТАЦИЮ
            </FontTitle2>
            <FontFootnote style={{ marginBottom: 20 }}>
              Оставьте заявку и наш менеджер свяжется с вами!{" "}
            </FontFootnote>
            <StyledFormInput
              placeholder="Валерий Игубин"
              onChange={(event) => setName(event.target.value)}
              value={name}
            ></StyledFormInput>
            <StyledFormInput
              placeholder="+7 705 772 88 40"
              style={{ marginTop: 20, marginBottom: 20 }}
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
            ></StyledFormInput>
            <StyledFormInput
              onClick={onHandleClick}
              value={"Оставить заявку на консультацию"}
              type="button"
            ></StyledFormInput>
          </StyledForm>
        </StyledFormWrapper>
      </StyledContainer>
    </StyledSection>
  );
};

const StyledOurProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* создаем три колонки с равной шириной */
  gap: 40px; /* добавляем промежуток между элементами */
  margin: 40px 0px 0px;
  width: 100%;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledOurProjectCard = styled(StyledCard)`
  height: 225px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 680px) {
    display: ${(props) =>
      props.index == 4 || props.index == 5 || props.index == 3
        ? "none"
        : "flex"};
  }
`;

const StyledInstagram = styled(StyledContainer)`
  display: flex;
  align-items: center;
  margin-top: 140px;
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    justify-items: center;
    align-items: center;
  }
`;

const StyledInstagramTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInstagramMockup = styled.img`
  margin-left: 24px;
  @media (max-width: 960px) {
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    width: 360px;
  }
`;

const StyledInstagramButton = styled(StyledInput)`
  width: 340px;
  margin-top: 40px;
  @media (max-width: 960px) {
    align-self: center;
  }
`;

const OurInstagram = () => {
  function onHandleReferToInstagram() {
    window.open("https://www.instagram.com/svet.krg/");
  }
  return (
    <StyledInstagram>
      <StyledInstagramTitle>
        <FontTitle>
          ПОДПИСЫВАЙТЕСЬ НА НАШ INSTAGRAM
          <br />И УЗНАВАЙТЕ О НОВОСТЯХ ПЕРВЫМИ!
        </FontTitle>
        <StyledInstagramButton
          onClick={onHandleReferToInstagram}
          value={"ПЕРЕЙТИ В ИНСТАГРАМ"}
          type="button"
        />
      </StyledInstagramTitle>
      <StyledInstagramMockup src={instagrammockup} />
    </StyledInstagram>
  );
};

const Projects = observer(({ index }) => {
  const navigation = useNavigate();
  return (
    <StyledOurProjectCard
      index={index}
      onClick={() => navigation(`/blog/project/${projectList.data[index]?.id}`)}
      style={{
        backgroundImage: `url(${projectList.data[index]?.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <FontHeadline2>{projectList.data[index]?.title}</FontHeadline2>
    </StyledOurProjectCard>
  );
});

const OurProjects = () => {
  return (
    <StyledSection
      style={{
        backgroundColor: "#232323",
        backgroundImage: `url(${section5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <StyledContainer>
        <FontTitle style={{ textAlign: "center" }}>
          ПРОЕКТЫ НАД КОТОРЫМИ <FontTitle color="primary">МЫ</FontTitle>{" "}
          РАБОТАЛИ
        </FontTitle>
        <StyledOurProjectsWrapper>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Projects key={index} index={index} />
          ))}
        </StyledOurProjectsWrapper>
      </StyledContainer>
      <OurInstagram></OurInstagram>
    </StyledSection>
  );
};

const StyledReviewScroll = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-top: 40px;
  padding-bottom: 20px;
`;
const StyledReviewImg = styled.img`
  height: 400px;
  margin-right: 20px;
`;

const OurReviews = observer(() => {
  return (
    <StyledSection>
      <StyledContainer>
        <FontTitle color="black">Реальные Отзывы</FontTitle>
        <StyledReviewScroll>
          {review.data.map((review) => {
            return <StyledReviewImg src={review.image} />;
          })}
        </StyledReviewScroll>
      </StyledContainer>
    </StyledSection>
  );
});

const MainPage = () => {
  return (
    <>
      <Header />

      <IntroductionSection></IntroductionSection>
      <OurProduces></OurProduces>
      <WhyWe></WhyWe>
      <ConsultingForm></ConsultingForm>
      <OurProjects></OurProjects>
      <OurReviews></OurReviews>
      <Footer />
    </>
  );
};

export default MainPage;

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
  FontFootnote,
  FontHeader,
  FontHeadline,
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

import catalogbg from "../assets/img/catalogbg.png";
import catalog from "../assets/img/catalog1.png";

import instagrammockup from "../assets/img/instagrammockup.png";
import Footer from "../components/Footer";

const StyledIntroductionSection = styled.div`
  /* min-height: 870px; */
  background: url(${mainImg});
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
`;

const StyledIntroductionFormInputs = styled.form`
  display: flex;
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
`;

const IntroductionForm = () => {
  const onHandleSubmit = () => {};
  return (
    <StyledIntroductionForm>
      <StyledIntroductionFormInputs onSubmit={onHandleSubmit}>
        <StyledInput placeholder="Валерий Игубин" />

        <StyledInput
          type="tel"
          placeholder="+7 705 772 88 40"
          style={{ marginLeft: 20 }}
        />
      </StyledIntroductionFormInputs>
      <StyledInput
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
  display: flex;
`;
const StyledProduced = styled.div`
  min-height: 370px;
  width: 260px;
`;

const StyledCatalog = styled.div`
  display: flex;
  background: url(${catalogbg});
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
`;

const OurProduces = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section2})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <StyledProducesContainer>
        <FontTitle color="black">
          ЧТО МЫ ПРОИЗВОДИМ<FontTitle color="primary">?</FontTitle>
        </FontTitle>
        <FontHeadline color="black">Самые популярные товары</FontHeadline>
        <StyledProducesList style={{ marginTop: 40 + "px" }}>
          <StyledProduced
            style={{
              marginRight: 40,
              backgroundImage: `url(${produced1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></StyledProduced>
          <StyledProduced
            style={{
              marginRight: 40,
              backgroundImage: `url(${produced2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></StyledProduced>
          <StyledProduced
            style={{
              marginRight: 40,
              backgroundImage: `url(${produced3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></StyledProduced>
          <StyledProduced
            style={{
              backgroundImage: `url(${produced1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></StyledProduced>
        </StyledProducesList>
        <StyledCatalog>
          <StyledCatalogCard>
            <FontHeadline>
              ПЕРЕЙДИТЕ В КАТАЛОГ ЧТОБЫ УВИДЕТЬ ВСЕ ТОВАРЫ
            </FontHeadline>
            <StyledInput
              style={{ marginTop: 12 }}
              value={"Перейти в каталог"}
              type="button"
            />
          </StyledCatalogCard>
          <StyledCatalogCard>
            <img style={{ height: "100%" }} src={catalog} />
          </StyledCatalogCard>
        </StyledCatalog>
      </StyledProducesContainer>
    </StyledSection>
  );
};

const StyledWhyWeWrapper = styled.div`
  display: flex;
  margin: 40px 0px 0px;
  width: 100%;
  justify-content: space-between;
`;

const StyledWhyWeCard = styled(StyledCard)`
  background: white;
  height: 220px;
  width: 360px;
`;
const WhyWe = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section3})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <StyledContainer>
        <FontTitle>
          ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС<FontTitle color="primary">?</FontTitle>
        </FontTitle>
        <StyledWhyWeWrapper>
          <StyledWhyWeCard></StyledWhyWeCard>
          <StyledWhyWeCard></StyledWhyWeCard>
          <StyledWhyWeCard></StyledWhyWeCard>
        </StyledWhyWeWrapper>
        <StyledWhyWeWrapper>
          <StyledWhyWeCard></StyledWhyWeCard>
          <StyledWhyWeCard></StyledWhyWeCard>
          <StyledWhyWeCard></StyledWhyWeCard>
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
  width: 340px;
`;

const ConsultingForm = () => {
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
            <StyledFormInput placeholder="Валерий Игубин"></StyledFormInput>
            <StyledFormInput
              placeholder="+7 705 772 88 40"
              style={{ marginTop: 20, marginBottom: 20 }}
            ></StyledFormInput>
            <StyledFormInput
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
  display: flex;
  margin: 40px 0px 0px;
  width: 100%;
  justify-content: space-between;
`;
const StyledOurProjectCard = styled(StyledCard)`
  width: 360px;
  height: 225px;
  background: black;
`;

const StyledInstagram = styled.div`
  display: flex;
  align-items: center;
  margin-top: 140px;
`;

const StyledInstagramTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInstagramMockup = styled.img`
  margin-left: 24px;
`;

const StyledInstagramButton = styled(StyledInput)`
  width: 340px;
  margin-top: 40px;
`;

const OurInstagram = () => {
  return (
    <StyledContainer>
      <StyledInstagram>
        <StyledInstagramTitle>
          <FontTitle>
            ПОДПИСЫВАЙТЕСЬ НА НАШ INSTAGRAM
            <br />И УЗНАВАЙТЕ О НОВОСТЯХ ПЕРВЫМИ!
          </FontTitle>
          <StyledInstagramButton value={"ПЕРЕЙТИ В ИНСТАГРАМ"} type="button" />
        </StyledInstagramTitle>
        <StyledInstagramMockup src={instagrammockup} />
      </StyledInstagram>
    </StyledContainer>
  );
};

const OurProjects = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <StyledContainer>
        <FontTitle>
          ПРОЕКТЫ НАД КОТОРЫМИ <FontTitle color="primary">МЫ</FontTitle>{" "}
          РАБОТАЛИ
        </FontTitle>
        <StyledOurProjectsWrapper>
          <StyledOurProjectCard></StyledOurProjectCard>
          <StyledOurProjectCard></StyledOurProjectCard>
          <StyledOurProjectCard></StyledOurProjectCard>
        </StyledOurProjectsWrapper>
        <StyledOurProjectsWrapper>
          <StyledOurProjectCard></StyledOurProjectCard>
          <StyledOurProjectCard></StyledOurProjectCard>
          <StyledOurProjectCard></StyledOurProjectCard>
        </StyledOurProjectsWrapper>
      </StyledContainer>
      <OurInstagram></OurInstagram>
    </StyledSection>
  );
};

const OurReviews = () => {
  return (
    <StyledSection>
      <StyledContainer></StyledContainer>
    </StyledSection>
  );
};

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

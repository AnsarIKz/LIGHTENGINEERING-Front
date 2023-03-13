import Header from "../components/MainHeader";
import styled from "styled-components";
import mainImg from "../assets/img/main.png";
import {
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
} from "../shared/fonts";

import product1 from "../assets/img/introductionproduct1.png";
import product2 from "../assets/img/introductionproduct2.png";
import product3 from "../assets/img/introductionproduct3.png";

import section2 from "../assets/img/section2bg.png";

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
            <FontHeadlineBold style={{ marginTop: 60 }} color="black">
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
            <FontHeadlineBold style={{ marginTop: 60 }} color="black">
              Отгрузка со склада
              <br />
              сразу же в день оплаты
            </FontHeadlineBold>
          </StyledIntroductionProduct>
          <StyledIntroductionProduct
            style={{
              marginLeft: 40,
              marginRight: 40,
              backgroundImage: `url(${product3})`,
              backgroundPosition: "center top 10px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FontHeadlineBold style={{ marginTop: 60 }} color="black">
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

const OurProduces = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${section2})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <StyledProducesContainer>
        <FontTitle color="black">
          ЧТО МЫ ПРОИЗВОДИМ<FontTitle color="primary">?</FontTitle>
        </FontTitle>
        <FontHeadline color="black">Самые популярные товары</FontHeadline>

        <StyledProducesList>
          <StyledProduced></StyledProduced>
          <StyledProduced></StyledProduced>
          <StyledProduced></StyledProduced>
          <StyledProduced></StyledProduced>
        </StyledProducesList>
      </StyledProducesContainer>
    </StyledSection>
  );
};

const MainPage = () => {
  return (
    <>
      <Header />
      <IntroductionSection></IntroductionSection>
      <OurProduces></OurProduces>
    </>
  );
};

export default MainPage;

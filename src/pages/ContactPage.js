import styled from "styled-components";
import CommonIntroduction from "../components/CommonIntroduction";
import Footer from "../components/Footer";
import {
  FontBody,
  FontBodyBold,
  FontHeader,
  FontHeadline,
  FontHeadline2,
  FontTitle2,
} from "../shared/fonts";
import { StyledContainer, StyledSection } from "../shared/styledComponents";
import appStore from "../shared/store/appStore";

const StyledContactContainer = styled(StyledContainer)`
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledContactDescription = styled.div`
  flex: 1;
`;
const StyledContactMap = styled.div`
  flex: 1;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
`;

const ContactPage = () => {
  return (
    <>
      <CommonIntroduction>
        <FontHeader>КОНТАКТЫ</FontHeader>
      </CommonIntroduction>
      <StyledSection>
        <StyledContactContainer>
          <StyledContactDescription>
            <FontTitle2 color="black">Телефоны</FontTitle2>
            <br />
            <br />
            <FontHeadline color="black">+7 705 777 12 21</FontHeadline>
            <br />
            <FontHeadline color="black">+7 705 112 49 51</FontHeadline>
            <br />
            <br />
            <FontTitle2 color="black">Почта</FontTitle2>
            <br />
            <br />
            <FontHeadline color="black">svet.krg@mail.ru</FontHeadline>
            <br />
            <br />
            <FontTitle2 color="black">Мы работаем по адресу</FontTitle2>
            <br />
            <br />
            <FontHeadline color="black">
              Казахстан, г. Караганда, ул. Волгодонская, д. 62
            </FontHeadline>
            <br />
            <br />
            <FontBodyBold color="black">Пн - Пт с 08:00 до 20:00</FontBodyBold>
            <br />
          </StyledContactDescription>
          <StyledContactMap>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                border: 0,
              }}
            >
              <a
                href="https://yandex.ru/maps/164/karaganda/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Караганда
              </a>
              <a
                href="https://yandex.ru/maps/164/karaganda/house/Y0oYdwdgTEQDQFpjfXRzeXlkYA==/?from=mapframe&ll=73.102399%2C49.826483&mode=search&sll=73.102399%2C49.826483&source=mapframe&text=%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2062&utm_medium=mapframe&utm_source=maps&z=15"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Волгодонская улица, 62 — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=73.102399%2C49.826483&mode=search&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTMwMTY2NjMxElHSmtCw0LfQsNKb0YHRgtCw0L0sINKa0LDRgNCw0pPQsNC90LTRiywg0JLQvtC70LPQvtC00L7QvdGB0LrQsNGPINC606nRiNC10YHRliwgNjIiCg13M5JCFXVQR0I%2C&sll=73.102399%2C49.826483&source=mapframe&text=%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2062&utm_source=mapframe&z=15"
                width="560"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </StyledContactMap>
        </StyledContactContainer>
      </StyledSection>
      <Footer />
    </>
  );
};

export default ContactPage;

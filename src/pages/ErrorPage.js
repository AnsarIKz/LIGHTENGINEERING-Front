import { useRouteError } from "react-router-dom";
import CommonIntroduction from "../components/CommonIntroduction";
import { FontHeader } from "../shared/fonts";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <CommonIntroduction>
        <FontHeader>
          ERROR <FontHeader color="primary">404</FontHeader>
          <br />
          <FontHeader>
            СТРАНИЦА <FontHeader color="primary"> НЕ НАЙДЕНА</FontHeader>
          </FontHeader>
        </FontHeader>
      </CommonIntroduction>
      <Footer />
    </>
  );
}

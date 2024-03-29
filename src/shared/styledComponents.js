import styled from "styled-components";
import {
  FontBody,
  FontFootnote,
  FontHeadline,
  FontHeadlineBold,
} from "./fonts";
import { useNavigate } from "react-router-dom";

export const StyledContainer = styled.div`
  max-width: 1160px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1200px) {
    max-width: 840px;
  }
  @media (max-width: 960px) {
    max-width: 640px;
  }
  @media (max-width: 680px) {
    max-width: 480px;
  }
  @media (max-width: 480px) {
    max-width: 360px;
  }
`;

export const StyledInput = styled.input`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  min-height: 80px;
  max-height: 80px;
  transition: 0.3s;
  border: 0px;
  border-radius: 5px;

  ${(props) =>
    props.type === "button"
      ? "background: linear-gradient(267.17deg, #ffc10e 0%, #ffcf45 100%); border-bottom: solid 3px #974800; color:white; cursor: pointer;"
      : ""}

  :hover {
    ${(props) =>
      props.type === "button"
        ? "opacity: 0.8; border-bottom: solid 1px #974800;"
        : ""}
  }
`;

export const StyledSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledCard = styled.div`
  width: 360px;
  border-radius: 1px;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 960px) {
    width: 300px;
  }
  @media (max-width: 680px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    max-width: 360px;q
  }
`;

const StyledEntityImage = styled.div`
  margin: 40px 0px 40px 60px;
  height: 285px;
  min-width: 300px;
  border-radius: 1px;
  background: linear-gradient(269.73deg, #ffc10e 8.84%, #ffcf45 90.86%), #d9d9d9;
  @media (max-width: 960px) {
    min-width: 220px;
  }
  @media (max-width: 680px) {
    min-width: 1px;
  }
`;

const StyledEntity = styled.div`
  display: flex;
  background: #232323;
  width: 100%;
  border-radius: 1px;
`;

const StyledEntityDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

export const Entity = ({
  created_at,
  title,
  subtitle,
  image,
  id,
  blog_type,
}) => {
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${month} ${day}, ${year}`;
  const navigation = useNavigate();
  function handleClick() {
    navigation(`/blog/${blog_type}/${id}/`);
  }
  return (
    <StyledEntity style={{ marginBottom: 40 }}>
      <StyledEntityImage></StyledEntityImage>
      <StyledEntityDescription>
        <FontFootnote>{formattedDate}</FontFootnote>
        <FontHeadlineBold>{title}</FontHeadlineBold>
        <FontBody
          style={{ textOverflow: "elipsis", overflow: "hidden", maxHeight: 76 }}
        >
          {subtitle}
        </FontBody>
        <StyledInput
          onClick={handleClick}
          style={{ maxWidth: 250 }}
          value={"ПОДРОБНЕЕ"}
          type="button"
        />
      </StyledEntityDescription>
    </StyledEntity>
  );
};

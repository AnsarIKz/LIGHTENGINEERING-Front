import styled, { createGlobalStyle } from "styled-components";
import DrukCyrBold from "../assets/font/DrukCyr/DrukCyr-Bold.ttf";
import DrukCyrMedium from "../assets/font/DrukCyr/DrukCyr-Medium.ttf";
import DrukCyrSuper from "../assets/font/DrukCyr/DrukCyr-Super.ttf";
import DrukCyrHeavy from "../assets/font/DrukCyr/DrukCyr-Heavy.ttf";

import RalewayBlack from "../assets/font/Raleway/Raleway-Black.ttf";
import RalewayBold from "../assets/font/Raleway/Raleway-Bold.ttf";
import RalewayExtraBold from "../assets/font/Raleway/Raleway-ExtraBold.ttf";
import RalewayLight from "../assets/font/Raleway/Raleway-Light.ttf";
import RalewayExtraLight from "../assets/font/Raleway/Raleway-ExtraLight.ttf";
import RalewayThin from "../assets/font/Raleway/Raleway-Thin.ttf";
import RalewayRegular from "../assets/font/Raleway/Raleway-Regular.ttf";
import RalewaySemiBold from "../assets/font/Raleway/Raleway-SemiBold.ttf";
import RalewayMedium from "../assets/font/Raleway/Raleway-Medium.ttf";

const FontGlobalStyles = createGlobalStyle`
body {
  font-family: 'Raleway';
}
@font-face {
    font-family: 'Druk Cyr';
    src: url(${DrukCyrSuper}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Druk Cyr';
    src: url(${DrukCyrHeavy}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Druk Cyr';
    src: url(${DrukCyrBold}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Druk Cyr';
    src: url(${DrukCyrMedium}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${RalewaySemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

`;

const fontDefault = styled.span`
  opacity: ${(props) => (props.color === "secondary" ? 0.5 : 1)};
  color: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#FFC10E";
      case "white":
        return "white";
      case "black":
        return "black";
      default:
        return "white";
    }
  }};
`;

const fontRaleway = styled(fontDefault)`
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
`;
const fontDrukCyr = styled(fontDefault)`
  font-family: "Druk Cyr";
  font-size: 60px;
  font-weight: 500;
`;

const FontCaption = styled(fontRaleway)`
  font-size: 14px;
`;

const FontCaptionBold = styled(fontRaleway)`
  font-size: 14px;
  font-weight: 600;
`;

const FontFootnote = styled(fontRaleway)`
  font-size: 12px;
`;

const FontHeadline = styled(fontRaleway)`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;
const FontHeadlineBold = styled(fontRaleway)`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
`;
const FontHeadline2 = styled(fontRaleway)`
  font-size: 18px;

  font-weight: 500;
`;
const FontHeadline2Bold = styled(fontRaleway)`
  font-size: 18px;
  font-weight: 600;
`;

const FontBody = styled(fontRaleway)``;
const FontBodyBold = styled(fontRaleway)`
  font-weight: 700;
`;

const FontHeader = styled(fontDrukCyr)`
  font-size: 100px;
  text-transform: uppercase;
`;
const FontTitle = styled(fontDrukCyr)`
  font-size: 60px;
  text-transform: uppercase;
`;
const FontTitle2 = styled(fontDrukCyr)`
  font-size: 40px;
  text-transform: uppercase;
`;

export {
  FontGlobalStyles,
  FontCaption,
  FontBody,
  FontBodyBold,
  FontTitle,
  FontHeader,
  FontFootnote,
  FontHeadline,
  FontHeadlineBold,
  FontTitle2,
  FontCaptionBold,
  FontHeadline2,
  FontHeadline2Bold,
};

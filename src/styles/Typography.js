import { createGlobalStyle } from "styled-components"

import GilroyThinWoff2 from "../fonts/gilroy/Gilroy-Thin.woff2"
import GilroySemiBoldWoff2 from "../fonts/gilroy/Gilroy-Semibold.woff2"
import GilroyRegularWoff2 from "../fonts/gilroy/Gilroy-Regular.woff2"
import GilroyMediumWoff2 from "../fonts/gilroy/Gilroy-Medium.woff2"
import GilroyLightWoff2 from "../fonts/gilroy/Gilroy-Light.woff2"
import GilroyHeavyWoff2 from "../fonts/gilroy/Gilroy-Heavy.woff2"
import GilroyBoldWoff2 from "../fonts/gilroy/Gilroy-Bold.woff2"
import GilroyBlackWoff2 from "../fonts/gilroy/Gilroy-Black.woff2"
import GilroyExtraBoldWoff2 from "../fonts/gilroy/Gilroy-Extrabold.woff2"

import GilroyThinWoff from "../fonts/gilroy/Gilroy-Thin.woff"
import GilroySemiBoldWoff from "../fonts/gilroy/Gilroy-Semibold.woff"
import GilroyRegularWoff from "../fonts/gilroy/Gilroy-Regular.woff"
import GilroyMediumWoff from "../fonts/gilroy/Gilroy-Medium.woff"
import GilroyLightWoff from "../fonts/gilroy/Gilroy-Light.woff"
import GilroyHeavyWoff from "../fonts/gilroy/Gilroy-Heavy.woff"
import GilroyBoldWoff from "../fonts/gilroy/Gilroy-Bold.woff"
import GilroyBlackWoff from "../fonts/gilroy/Gilroy-Black.woff"
import GilroyExtraBoldWoff from "../fonts/gilroy/Gilroy-Extrabold.woff"

import GilroyThinOtf from "../fonts/gilroy/Gilroy-Thin.otf"
import GilroySemiBoldOtf from "../fonts/gilroy/Gilroy-Semibold.otf"
import GilroyRegularOtf from "../fonts/gilroy/Gilroy-Regular.otf"
import GilroyMediumOtf from "../fonts/gilroy/Gilroy-Medium.otf"
import GilroyLightOtf from "../fonts/gilroy/Gilroy-Light.otf"
import GilroyHeavyOtf from "../fonts/gilroy/Gilroy-Heavy.otf"
import GilroyBoldOtf from "../fonts/gilroy/Gilroy-Bold.otf"
import GilroyBlackOtf from "../fonts/gilroy/Gilroy-Black.otf"
import GilroyExtraBoldOtf from "../fonts/gilroy/Gilroy-Extrabold.otf"

export const Typography = createGlobalStyle`


@font-face {
    font-family:"Gilroy-Thin";
    src:url(${GilroyThinWoff2}) format("woff2"),url(${GilroyThinWoff}) format("woff"),url(${GilroyThinOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Semibold";
    src:url(${GilroySemiBoldWoff2}) format("woff2"),url(${GilroySemiBoldWoff}) format("woff"),url(${GilroySemiBoldOtf}) format("opentype");
    font-style:normal;font-weight:400;
}
@font-face {
    font-family:"Gilroy";
    src:url(${GilroyRegularWoff2}) format("woff2"),url(${GilroyRegularWoff}) format("woff"),url(${GilroyRegularOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Medium";
    src:url(${GilroyMediumWoff2}) format("woff2"),url(${GilroyMediumWoff}) format("woff"),url(${GilroyMediumOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Light";
    src:url(${GilroyLightWoff2}) format("woff2"),url(${GilroyLightWoff}) format("woff"),url(${GilroyLightOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Heavy";
    src:url(${GilroyHeavyWoff2}) format("woff2"),url(${GilroyHeavyWoff}) format("woff"),url(${GilroyHeavyOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Extrabold";
    src:url(${GilroyExtraBoldWoff2}) format("woff2"),url(${GilroyExtraBoldWoff}) format("woff"),url(${GilroyExtraBoldOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Bold";
    src:url(${GilroyBoldWoff2}) format("woff2"),url(${GilroyBoldWoff}) format("woff"),url(${GilroyBoldOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

@font-face {
    font-family:"Gilroy-Black";
    src:url(${GilroyBlackWoff2}) format("woff2"),url(${GilroyBlackWoff}) format("woff"),url(${GilroyBlackOtf}) format("opentype");
    font-style:normal;font-weight:400;
}

    :root{
    --font-family-sans: "Gilroy", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --gilReg:"Gilroy";
    --gilSemi:"Gilroy-Semibold";
    --gilThin:"Gilroy-Thin";
    --gilMed:"Gilroy-Medium";
    --gilLight:"Gilroy-Light";
    --gilBlack:"Gilroy-Black";
    --gilBold:"Gilroy-Bold";
    --gilExtraBold:"Gilroy-ExtraBold";

    --unit: 18;
    --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
    --font-micro-line-height: calc(12 / 10); /* 12px */
    --font-small-size: calc(14 / var(--unit) * 1rem); /* 14px */
    --font-small-line-height: calc(21 / 14); /* 21px */
    --font-base-size: 1em; /* 16px */
    --font-base-line-height: calc(24 / var(--unit)); /* 24px */
    --font-large-size: calc(18 / var(--unit) * 1rem); /* 18px */
    --font-large-line-height: calc(27 / 18); /* 27px */

    --font-title3-size: calc(21 / var(--unit) * 1rem); /* 21px */
    --font-title3-line-height: calc(30 / 21); /* 30px */
    --font-title2-size: calc(24 / var(--unit) * 1rem); /* 24px */
    --font-title2-line-height: calc(33 / 24); /* 33px */
    --font-title1-size: calc(52 / var(--unit) * 1rem); /* 49px */
    --font-title1-line-height: calc(62 / 49); /* 57px */
    }

    html {
        font-family: var(--font-family-sans);
        font-size: var(--font-base-size);
        line-height: var(--font-base-line-height);
    }

h1,h2,h3,h4,h5{
    /* font-weight: ; */
  margin:0;
  padding: 0;

}
h1{
      /* font-size: clamp(2.2rem, 8vw, 10.25rem); */
  line-height: var(--font-title1-line-height);
}
h2{
  /* font-size:clamp(1.6rem, 2vw, 6.25rem); */
  line-height: var(--font-title2-line-height);
}

`

// export default Typography

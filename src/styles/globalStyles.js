import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { Link } from "gatsby"


export const GlobalStyle = createGlobalStyle`
${normalize}


:root {
    --gable-green: #293e40;
    --acapulco: #81b5a1;
    --cloud: #f7f7f7;
    --pure-white: #fff;
    --fountain-blue: #68a1af;
    --wild-blue-yonder: #8686bc;
    --orchid: #db8f8f;
    --tumbleweed: #e8a679;
    --flax: #e5d87c;
    --cruise: #b0e1ce;
    --cavern-pink: #e9bcbc;
    --apricot: #fbd0b3;
    --french-pass: #a7d4df;
    --perano: #b1b1e4;
    --buttermilk: #fbf2b4;
    --aquamarine: #64ddac;
    --bittersweet: #fc726d;
    --tan-hide: #ff924e;
    --ocean-spray: #72d0e2;
    --lavender: #9898e5;
    --wattle: #d6df38;
    --interstitial-green: #4b8169;
    --light-monochromacy: #5ea188;
    --powder-blue: #b8d9e2;
    --powder-pink: #f8d1d4;
    --powder-green: #b9d0cc;
    --powder-yellow: #f2e5be;
    --powder-dark-grey: #c8c8c8;
    --powder-light-grey: #e1e1e1;
    --accessible-grey: #5b6f70;
    --accessible-green: #497e6e;
    --error-red: #b33233

    --color-black: #202123;
    --color-dark-gray: #32373e;
    --color-gray: #697a90;
    --color-light-gray: #b4bcc7;
    --color-very-light-gray: #e7ebed;
    --color-white: #ffffff;
    --color-accent: #156dff;

    --theme-light-background: #FFFFFF;
    --theme-light-text-on-background: #000000;
    --theme-dark-background: #000000;
    --theme-dark-text-on-background: #FFFFFF;
    --theme-dark-color-white: #E7E5E5;



    --small: 1024px;
    --med: 1216px;
    --xLarge: 1408px;

    }





* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-family-sans);
        font-size: var(--font-base-size);
        line-height: var(--font-base-line-height);


}
body {
   font-family: var(--font-family-sans);
        font-size: var(--font-base-size);
        line-height: var(--font-base-line-height);
  font-family: var(--font-family-sans);

  overscroll-behavior: none;
  overflow-x: hidden;
  height:min(1700px, calc(70% + 100px));
  -webkit-font-smoothing: antialiased;
  background: var(--theme-light-background);
  color: var(--theme-light-text-on-background);
  /* margin: 0; */
  margin: 0 auto;
  height: 100%;
  @media (min-width: var(--small)) {
     height: auto;
     overflow-y: scroll;

  }
}

button{
  border:none;
  outline: none;
  cursor: pointer;
}

ul{
  padding-left: 1.2rem;
  /* margin-top: 1.5rem ; */
  margin-bottom: 1.5rem ;
  li{
margin-bottom: .5rem ;
  }
}


/* h2,
  h3,
  h4,
  h5 {
    padding-bottom: .6rem;
  } */

strong,b{
  font-family: var(--gilMed);
}

p{
  padding-bottom: .6rem;
}
/* Global Dark Theme */
@media (prefers-color-scheme: dark) {
  /* body {
    background: var(--theme-dark-background);
    color: var(--theme-dark-text-on-background);
  }
  img[src*=".svg"] {
    filter: invert(1);
  } */
}

/* Global Light Theme */
@media (prefers-color-scheme: light) {
  /* body {
    background: var(--theme-light-background);
    color: var(--theme-light-text-on-background);
  } */
}`

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: 100%;
  /* overflow: hidden;
  /* height: auto; */


  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
  /* @media (min-width: 1700px) {
    max-width: 1636px;
  } */
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}
`

export const Col = styled.div`
  /* padding: 2.5rem; */

  flex: ${(props) => props.size};
  @media (max-width: 967px) {
    flex: auto;
  }
`
export const Row = styled.div`
  /* min-width: 50%; */
`

export const Flex = styled.div`
  /* flex-wrap: wrap;*/
  align-items: center;
  position: relative;
  display: flex;

  gap: ${(props) => props.gap};

  ${(props) =>
    props.respond &&
    css`
      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;

      }
    `};

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.flexStart &&
    css`
      justify-content: flex-start;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.alignBottom &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.centerV &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

export const ArrowLink = styled(Link)`
  font-family: var(--gilBold);
  font-size: 1.2rem;
  display: block;
  cursor: pointer;
  position: relative;
  /* span {
    font-family: var(--gilLight);
  } */
  h2 {
    display: inline;
  }

  /* display: flex;
  flex-direction: column; */
  padding-top: ${(props) => (props.pt ? props.pt : ".2rem")};
  &::before {
    content: "➔";
    font-size: inherit;
    /* position:; */
    position: relative;
    color: inherit;
    padding-right: 0.6rem;
    ${(props) =>
      props.twoLine &&
      css`
        position: absolute;
        left: -33px;
        top: 8px;
      `}
  }

  ${(props) =>
    props.drkGreen &&
    css`
      color: var(--gable-green);
    `}
  ${(props) =>
    props.green &&
    css`
      color: var(--acapulco);
    `}
  ${(props) =>
    props.right &&
    css`
      &::before {
        content: "";
        font-size: inherit;
        color: inherit;
        padding-right: 0;
      }
      &::after {
        content: "➔";
        font-size: inherit;
        color: inherit;
        display: inline-flex;
        /* align-items: center; */
        /* justify-content: center; */
        padding-left: 0.5rem;
        position: relative;
        top:2px;
      }
    `}

    p {
    font-size: initial;
    font-family: var(--gilReg);
    color: initial !important;
  }
`


export const Line = styled.span`
  border-top: .25rem solid #fff;
  width: 80%;
  margin: .5rem 0;
  display: inline-block;
`

export const StyledWrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  /* background: red;
  place-content: start; */
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  /* color: #ccc; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

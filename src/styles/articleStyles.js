import { motion } from "framer-motion"

import styled, { css } from "styled-components"
// ========= Cover Styles =============
export const CoverHero = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* max-height: 800px; */
  display: grid;
  /* overflow: hidden; */
  /* position: absolute; */
  align-items: flex-start;
  top: 0;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: minmax(auto, 1fr) 1fr;
  grid-template-areas:
    "Hero Hero"
    "bottom bottom";
  /* position: fixed; */
  /* overflow: hidden; */
  @media (max-width: 767px) {
    grid-template-rows: auto 1fr;
    /* height: auto; */
  }
  /* background: green; */
  .heroWrap {
    grid-area: 1 / 1 / 2 / 3;
    place-content: flex-start;
    /* height: auto; */
    /* max-height: 38rem; */
    /* max-height: 38rem; */
    height: inherit;

    z-index: -1;
    /* position: absolute; */
    /* overflow: hidden; */
    .hero {
      object-fit: cover;
      /* height: 100vh; */
      /* object-fit: contain; */
      /* position: absolute; */ /* max-height: 90vw; */
      @media (max-width: 967px) {
        position: absolute;
        height: auto;
      }
      top: 0;
      bottom: 0;
    }
  }
  .content {
    justify-content: space-around;
    display: flex;
    &.top {
      min-height: 29rem;
      overflow: hidden;
    }
    grid-area: 1 / 1 / 2/ 3;
    /* flex-direction: column; */
    height: inherit;
    /* max-width: 50vw; */
    /* min-height: 39rem; */
    /* position: absolute; */
    @media (max-width: 767px) {
      width: 100%;
      /* height: 100%; */
      grid-area: 1 / 1 / 2/ 3;
      /* background: red; */
    }
    h4 {
      font-size: clamp(1.2rem, 3vw, 2rem);
      color: black;
      font-family: var(--gilLight);
    }
    h3 {
      color: black;
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 6rem);
      line-height: 1.1;
      color: var(--gable-green);
      /* font-weight: 500; */
      font-family: var(--gilReg);
    }
  }
`
export const CoverContent = styled.div`
  /* height: 100%; */
  grid-area: bottom;
  position: relative;
  bottom: 0;
  width: 100%;
  background: white;
  color: #000;
  padding: 2.5rem;

  @media (max-width: 767px) {
    /* padding-top: 0; */
  }

  .content {
    flex: 2;
    font-size: 1.2rem;
    line-height: 1.7rem;
    /* grid-area: "content"; */
  }
  h3 {
    padding-bottom: 1rem;
  }
  .toc {
    flex: 1;
    width: auto;
    padding-left: 4rem;
    a{
      text-decoration: none;
    }
    /* padding-bottom: 4rem; */
    /* grid-area: "toc"; */
    border-left: 2px solid #000000;
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 0.5rem;
        display: block;
        cursor: pointer;
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
      border-left: none;
      border-top: 2px solid #000000;
      padding-left: 0;
      margin-top: 2rem;
      padding-top: 2rem;
    }
  }
`

export const TocTitle = styled.li`
  h4 {
    font-family: var(--gilMed);
    color: ${(props) => props.color || css`var(--acapulco);`};
  }
`

// ========= Hero =============
export const MainHero = styled.div`
  /* background: blue; */
  display: grid;
  height: auto;

  width: 100vw;
  /* overflow: hidden; */

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(50vh, 1fr) min-content;
  gap: 0px 0px;
  grid-template-areas:
    "content ."
    "main-Content main-Content";
`
export const HeroContentOverlay = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 3;
  z-index: 5;
  text-align: center;
  .inner {
    padding-top: 5rem;
    /* width: 100%; */
  }
  /* height: 100%; */
  color: #fff;
  @media (max-width: 1024px) {
    .inner {
      padding-top: 5rem;
      /* width: 100%; */
    }
  }
  hr {
    outline: none;
    border: none;
    border-top: 2px solid #fff;
    padding: 2.5rem;
  }
  h1 {
    font-family: var(--gilLight);
    font-size: clamp(2.2rem, 5.8vw, 60pt);
    margin: 0;
  }
  h2 {
    font-family: var(--gilMed);
    /* line-height: ; */
  }
`
export const HeroContent = styled.div`
  background: #ffffffa6;
  padding: 2.5rem;
  z-index: 5;
  height: auto;

  @media (max-width: 1024px) {
    background: #ffffff;
  }

  max-height: min-content;

  grid-area: 2 / 1 / 3 / 3;
  overflow: hidden;
`
export const HeroImg = styled.figure`
  overflow: hidden;
  max-height: 59rem;
  @media (max-width: 1024px) {
    height: 100vh;
  }
  z-index: 0;
  grid-area: 1 / 1 / 3 / 3;
`
// ==========Pic Content =============
export const PicHero = styled.div`
  display: grid;
  grid-template-columns: 45vw 2fr;
  grid-template-rows: repeat(1fr, auto);
  min-height: min-content;
  height: auto;
  .hero {
    opacity: 0.5;

    background-blend-mode: screen;
    background: black;
  }
  background: black;
  @media (max-width: 967px) {
    .hero {
      opacity: 1;
    }
    display: flex;
    background: white;
    flex-direction: column;
  }
  ${(props) =>
    props.right &&
    css`
      grid-template-columns: 2fr 45vw;
    `}
  ${(props) =>
    props.watch &&
    css`
      grid-template-columns: 37vw 2fr;
    `}
`
export const PicText = styled.div`
  max-width: 75vw;
  /* height: inherit; */
  h1 {
    font-family: var(--gilReg);
    padding-bottom: 1rem;
  }
  h2 {
    padding-bottom: 1.2rem;
  }
  h3 {
    font-family: var(--gilLight);
    line-height: 1.4;

    font-size: clamp(0.5rem, 5vw, 1.2rem);
  }
  a {
    font-family: var(--gilMed);
    font-size: inherit;
    display: inline-block;
    cursor: pointer;
    position: relative;
    color: var(--light-monochromacy);
    &::after {
      content: "➔";
      font-size: inherit;
      color: inherit;
      position: relative;
      padding-left: 0.5rem;
      top: 3px;
      /* padding-top: 1rem; */
    }
    span {
      font-family: var(--gilLight);
    }
  }
  @media (max-width: 967px) {
    max-width: 100%;
  }
`
export const MainContent = styled.div`
  /* a {
    font-family: var(--gilBold);
    font-size: inherit;
    color: inherit;
    font-size: inherit;
    display: inline-block;
    cursor: pointer;
    position: relative;
    &::after {
      content: "➔";
      font-size: inherit;
      color: inherit;
      padding-left: 0.5rem;
    }
    span {
      font-family: var(--gilLight);
    }
    color: var(--acapulco);
  } */
  h3 {
    /* a {
      text-indent: -1.6rem;
      @media (max-width: 967px) {
        text-indent: 0;
      }
      &::before {
        content: "➔";
        font-size: inherit;

        position: relative;
        color: inherit;
        padding-right: 0.6rem;
      }
      &::after {
        content: " ";
        font-size: inherit;
        color: inherit;
        padding-left: 0.5rem;
      }
    } */
  }
  h2,
  h3 {
    padding-bottom: 0.4rem;
    color: var(--light-monochromacy);
  }
  a {
    color: var(--light-monochromacy);
  }
  h3 {
    font-family: var(--gilSemi);
    line-height: 1.2;
    font-size: clamp(0.5rem, 5vw, 1.3rem);
  }
`
export const PicTitle = styled.div`
  font-family: var(--gilMed);
  font-size: 0.9rem;
  align-self: flex-start;
  color: inherit;
  color: #ffffffb9;
  ${(props) =>
    props.pageTitle &&
    css`
      color: #ffffffb9;
      position: absolute;
      padding-top: 4rem;
      padding-left: 2rem;
    `};
  ${(props) =>
    props.pageTop &&
    css`
      color: #ffffffb9;
      position: absolute;
      top: -1rem;
      left: -2.5rem;
      @media (max-width: 967px) {
        top: 0rem;
        left: 0rem;
      }
    `};

  &.page {
  }
  @media (max-width: 967px) {
    padding-bottom: 1rem;
  }
`
export const PicImg = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  max-height: 30rem;
  /* display: flex; */
  position: relative;
  .videoWrapper {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  ${(props) =>
    props.PicTopHero &&
    css`
      height: min(19rem, 22rem);
    `};
`
export const PicContentOverlay = styled.div`
  background: #ffffffb3;
  padding: 4rem 3.5rem 3.5rem 3.5rem;
  z-index: 5;
  height: auto;
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  @media (max-width: 967px) {
    padding: 2.5rem;
  }
  ${(props) =>
    props.right &&
    css`
      align-content: flex-start;
      justify-content: flex-start;
      grid-area: 1 / 2 / 3 / 3;
    `};

  ${(props) =>
    props.PicTopHero &&
    css`
      background: none;
      grid-area: 1 / 1 / 3 / 3;
      /* align-content: flex-start; */
      justify-content: flex-start;
      color: var(--color-white);
    `};

  .picContentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* max-width: max(21rem, 23rem); */
    height: 100%;
    justify-self: flex-end;
    @media (max-width: 967px) {
      max-width: 100%;
    }

    ${(props) =>
      props.watch &&
      css`
        max-width: max(10rem, 16rem);

        align-items: center;
        justify-content: center;
        /* grid-area: 1 / 2 / 3 / 3; */
      `};
    ${(props) =>
      props.PicTopHero &&
      css`
        max-width: initial;
        height: 100%;
        justify-content: space-between;
        color: var(--color-white);
        @media (max-width: 967px) {
          color: initial;
        }
      `};
  }
`
export const SideContent = styled.div`
  background: #000000a6;
  padding: 2.5rem;
  z-index: 5;
  width: 100%;
  height: min-content;
  color: var(--color-white);
  /* flex: ; */
  grid-area: 2 / 2 / 3 / 3;

  .sideContentWrapper {
    max-width: max(18rem, 40rem);
  }

  ${(props) =>
    props.right &&
    css`
      display: flex;
      /* justify-content: flex-end; */
      grid-area: 2 / 1 / 3 / 2; ;
    `};
`
export const PlayBut = styled.div`
  display: block;
  cursor: pointer;
  width: 1.9rem;
  padding: 1rem 0 2rem;
`

// ==========Partner =============

export const PartnerHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  /* min-height: 100vh; */
  width: 100%;
  bottom: 0;
  top: 0;
  /* overflow: hidden; */
  position: absolute;


  grid-template-rows: 1fr;
  .fullScreen {
    height: 100%;

    /* height: 1000rem; */
    /* display: flex; */
  }
  @media (max-width: 967px) {
    display: flex;
    /* background: #0000003d; */
    flex-direction: column;
    justify-content: space-between;
  }
`
export const PartnerImg = styled.div`
  /* grid-area: 1 / 1 / 2 / 3; */
  height: 100vh;

  position: fixed;
  z-index: -1;
  @media (max-width: 967px) {
    /* opacity: 0.2; */
  }
`
export const PartnerContentOverlay = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  z-index: 5;
  padding: 2.5rem;
  max-width: 54rem;
  overflow: scroll;

  @media (max-width: 967px) {
    padding: 0;
  }
`
export const IntroText = styled.div`
  margin-top: 4rem;
  padding: 2.5rem;
  height: auto;
  min-height: clamp(22rem, 6vw, 58rem);
  /* position: fixed; */
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-white);

  h2 {
    font-family: var(--gilSemi);
    font-size: clamp(16pt, 3vw, 24pt);
    padding-bottom: 1rem;
    /* color: var(--color-white); */
  }

  h1 {
    font-family: var(--gilSemi);
    font-size: clamp(34pt, 8vw, 48pt);
    line-height: 1;
    padding-bottom: 1.5rem;
    color: var(--light-monochromacy);
  }

  h3 {
  }
`
export const ScrollBox = styled.div`
  background: #ffffffcf;
  position: relative;
  padding: 2.5rem;
  h2 {
    font-family: var(--gilSemi);
    font-size: clamp(16pt, 3vw, 24pt);
    padding-bottom: 1rem;

    &.pageHeader {
      color: initial;
    }
  }
  h2,
  h3,
  h4,
  h5 {
    padding-bottom: 0.6rem;
    color: var(--light-monochromacy);
  }

  /* margin-top:20rem; */
  z-index: 10;
  @media (max-width: 967px) {
    background: #ffffffe8;
  }
`

// ========== Two Column Did you =============

export const TwoColSection = styled.section`
  padding: 2.5em;
  .introText {
    width: 50vw;
    text-align: center;
    display: flex;
    margin: 0 auto 1rem;
    @media (max-width: 967px) {
      max-width: 100%;
      width: 100%;
    }
  }
`
export const DidYouBox = styled.div`
  color: var(--light-monochromacy);
  background: var(--cloud);
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: var(--gilBold);
    padding-bottom: 0.6rem;
  }
`

// ========== Top of Mind =============

export const TopForm = styled.div`
  color: var(--color-white);
  background: var(--gable-green);
  padding: 5em;
  display: flex;
  width: 100vw;
  position: absolute;
  height: calc(100vh +200px);
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .flex {
    min-height: 30rem;
  }
  .starWrap {
    width: 24rem;
  }
  .star {
    margin-right: 1.3rem;
  }

  .form-inner {
    padding-left: 2rem;
    min-width: 38vw;
    * {
      border: none;
      outline: none;
    }
  }
  button {
    padding: 1rem;
    background: var(--acapulco);
    font-family: var(--gilBold);
    color: var(--color-white);
    cursor: pointer;
  }
  input,
  textarea {
    width: 100%;
    min-height: 3rem;
    padding: 0.5rem;
    position: relative;
  }
  label,
  h3,
  h2 {
    display: block;
    margin-bottom: 0.7rem;
  }
  p {
    padding: 0;
  }
  h1 {
    font-family: var(--gilBold);
    font-size: clamp(10pt, 10vw, 48pt);
    padding-bottom: 0.6rem;
    margin: 3rem 0;
    line-height: 1;
  }

  @media (max-width: 967px) {
    .form-inner {
      padding: 0;
      width: 100%;
    }
    padding: 2.5rem;
    padding-top: 4rem;
  }
`

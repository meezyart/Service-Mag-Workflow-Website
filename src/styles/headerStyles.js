import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 55px;
  width: 100%;
  background: none;
  display: flex;
  border-bottom: 2px solid #ffffff2f;
  position: fixed;
  background-color: #2324245c;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;

`
export const NavItem = styled(motion.li)`
  list-style: none;
  display: grid;
  grid-template-areas: "img";
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 55px;
  min-width: 57px;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  color: #ffffff;
  font-weight: 600;
  height: 55px;
  border-right: 2px solid #ffffff58;
  font-size: 1.1rem;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  .menuImg {
    grid-area: "img";
    height: 100%;
    z-index: 1;
    opacity: 0.7;
  }
  .inner {
    z-index: 5;
    &:hover {
      padding: 5px;
      /* border: 2px solid transparent; */
      background-color: #fdffff47;
      ${(props) =>
        props.articleNav &&
        css`
          background-color: #4b5d5d96;
          svg {
            fill: #000000f1;
          }
          border: none;

          overflow: hidden;
        `};
    }
    grid-area: "img";
    display: flex;
    height: inherit;
    position: absolute;
    justify-content: center;
    width: inherit;
    background-color: #1f1f1f67;
    align-items: center;

    svg {
      width: 0.25rem;
    }
    ${(props) =>
      props.articleNav &&
      css`
        background-color: #fdffff73;
        /* backdrop-filter: blur(20px); */
        border-left: 2px solid #ffffff3e;
        border-right: none;
        overflow: hidden;
      `};
  }
`

export const ArticleNavHolder = styled.ul`
  background: red;

`
export const MenuTitle = styled.div`
  color: var(--color-white);
  left: .8rem;
  opacity: .8;
  font-size: .8rem;
  display: inline-flex;
height: inherit;
  position: relative;
  width: 100%;
  font-family: var(--gilSemi);
  @media (max-width: 567px) {
    visibility: hidden;
  }
`


export const HeaderTitle = styled.span`
  color:#fff;

  text-transform: uppercase;
position: absolute;
  font-weight: 600;
  padding: 0;
  padding-left: 55vw;
  margin: 0;
  padding-right: 2.5rem;
  @media (max-width: 1200px) {
    visibility: hidden;
  }
`

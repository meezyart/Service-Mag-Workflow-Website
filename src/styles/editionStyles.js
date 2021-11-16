import styled from "styled-components"
import { motion } from "framer-motion"



export const MainMenu = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: fixed;

  flex-direction: column;
  background: #293e40;
  color: #fff;
  z-index: 100;
  overflow-x: hidden;
  padding: 3rem;
`

export const EditionNav = styled.div``
export const TabNav = styled.button`
  background-color: #81b5a1;
  color: white;
  font-family: var(--gilSemi);
  padding: 10px 30px;
  margin: 1rem 1rem 1rem 0;
`
export const EditionNavItem = styled(motion.div)`
  /* flex: 1 0 33.3333%; */
  height: 15rem;
  display: block;
  cursor: pointer;
  /* width: 400px;
  flex-basis: 400px; */
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .inner {
    /* background: blue; */
    display: flex;
    height: 100%;
    color: white;
    font-size: 1.5rem;
    font-family: var(--gilSemi);
    justify-content: center;
    align-items: center;
  }

  background-color: #a4a8a8;
`

export const EditionInner = styled.div`
  margin-top: 6rem;
  height: 80vh;
  width: 100%;

`
export const EditionWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  gap: 1rem;
  width: 100%;
  /* outline: solid blue 1px; */
  /* justify-content: space-between; */
  flex-wrap: wrap;
`








export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea5816;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`

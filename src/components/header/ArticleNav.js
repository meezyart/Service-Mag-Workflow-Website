import React from 'react'
import { Flex } from '../../styles/globalStyles'
import { NavItem } from "../../styles/headerStyles"
// import { BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'


const ArticleNav = () => {
    return (
      <Flex>
        <NavItem articleNav>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.06 18.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon
                  points="0 9.03 9.03 0 10.83 1.8 4.98 7.66 18.06 7.66 18.06 10.21 4.79 10.21 10.83 16.25 9.03 18.06 0 9.03 0 9.03"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>

        </NavItem>
        <NavItem articleNav>
          <svg viewBox="0 0 18.06 18.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon
                  points="18.06 9.03 9.03 0 7.22 1.8 13.07 7.66 0 7.66 0 10.21 13.27 10.21 7.22 16.25 9.03 18.06 18.06 9.03 18.06 9.03"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </NavItem>
      </Flex>
    )
}

export default ArticleNav

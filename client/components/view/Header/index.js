// imports
import { useState } from 'react'
import { useRouter } from 'next/router'
// components
import { Flex, Text } from '../../structural'
import { Menu, ContactMe } from '../../view'
import Link from 'next/link';
// styles
import * as S from './styled'
// consts
import { theme, colors, breadcrumbs } from '../../../consts'
// icons
import { FaHome } from "react-icons/fa";

const Header = () => {
  // hooks
  const router = useRouter()

  // state
  const [showMenu, setShowMenu] = useState(false)

  // methods
  const mouseOver = () => setShowMenu(true)
  const mouseOut = () => setShowMenu(false)
  const homeIconMouseOver = (e) => e.target.style.color = theme.SECONDARY
  const homeIconMouseOut = (e) => e.target.style.color = colors.WHITE

  return (
    <S.Container 
      justify="space-between"
      align="center"
      height="50px"
      padding="0 10px"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      width="100%"
    >
      <S.Left>
        <Flex> 
          {showMenu ? (
            <Link href="/">
              <a>
                <Flex>
                  {router.pathname === "/" ? (
                    <Text color={theme.SECONDARY}>Explore Reed's</Text>
                  ) : (
                    <S.IconWrapper
                      size="24px"
                      onMouseOver={homeIconMouseOver}
                      onMouseOut={homeIconMouseOut}
                      color={colors.WHITE}
                      as="div"
                    >
                      <FaHome /> 
                    </S.IconWrapper>
                  )}
                </Flex>
              </a>
          </Link>
          ) : (
            <Flex>
              <Text color={theme.SECONDARY}>
                Mr
              </Text>
              <Text color={theme.SECONDARY}>
                .
              </Text>
              <Text color={theme.SECONDARY}>
                T
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex padding="0 0 0 7px">
          {showMenu ? (
            <Menu path={router.pathname} />
          ) : (
            <Text fontStyle="italic" color={colors.WHITE}>{breadcrumbs[router.pathname]}</Text>
          )}
        </Flex>
      </S.Left>
      <S.Right>
        <ContactMe />
      </S.Right>
    </S.Container>
  )
}

export default Header
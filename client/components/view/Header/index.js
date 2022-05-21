// imports
import { useState } from 'react'
import { useRouter } from 'next/router'
// components
import { Flex, Text } from '../../structural'
import { Menu } from '../../view'
import Link from 'next/link';
// styles
import * as S from './styled'
// consts
import { theme, colors, breadcrumbs } from '../../../consts'
// icons
import { BiHomeAlt } from "react-icons/bi";

const Header = () => {
  // hooks
  const router = useRouter()

  // state
  const [showMenu, setShowMenu] = useState(false)

  // methods
  const mouseOver = () => setShowMenu(true)
  const mouseOut = () => setShowMenu(false)

  return (
    <S.Container 
      justify="space-between"
      align="center"
      height="50px"
      padding="0 10px"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      {/* TODO: extract text component */}
      <S.Left>
        <Flex> 
          {showMenu ? (
            <Link
              href="/"
            >
              <a>
                <Flex>
                  {router.pathname === "/" ? (
                    <Text color={theme.SECONDARY}>Explore Reed's</Text>
                  ) : (
                    <BiHomeAlt style={{ color: theme.SECONDARY, fontSize: "20px"}}/> 
                  )}
                </Flex>
              </a>
          </Link>
          ) : (
            <Flex>
              <Text color={theme.SECONDARY}>
              {/* <Text color={colors.WHITE}> */}
                Mr
              </Text>
              <Text color={theme.SECONDARY}>
              {/* <Text color={colors.WHITE}> */}
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
            <Menu />
          ) : (
            <Text fontStyle="italic" color={colors.WHITE}>{breadcrumbs[router.pathname]}</Text>
          )}
        </Flex>
      </S.Left>
    </S.Container>
  )
}

export default Header
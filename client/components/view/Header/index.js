// imports
import { useState } from 'react'
import { useRouter } from 'next/router'
// components
import { Flex } from '../../structural'
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
      border="2px solid blue" 
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
                    <S.Accent color={theme.SECONDARY}>Explore Reed's</S.Accent>
                  ) : (
                    <BiHomeAlt style={{ color: theme.SECONDARY, fontSize: "20px"}}/> 
                  )}
                </Flex>
              </a>
          </Link>
          ) : (
            <Flex>
              <S.Accent color={theme.SECONDARY}>
              {/* <S.Accent color={colors.WHITE}> */}
                Mr
              </S.Accent>
              <S.Accent color={theme.SECONDARY}>
              {/* <S.Accent color={colors.WHITE}> */}
                .
              </S.Accent>
              <S.Accent color={theme.SECONDARY}>
                T
              </S.Accent>
            </Flex>
          )}
        </Flex>
        <Flex padding="0 0 0 7px">
          {showMenu ? (
            <Menu />
          ) : (
            <S.Accent fontStyle="italic" color={colors.WHITE}>{breadcrumbs[router.pathname]}</S.Accent>
          )}
        </Flex>
      </S.Left>
    </S.Container>
  )
}

export default Header
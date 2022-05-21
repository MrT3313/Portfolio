// components
import { Flex, Text } from "../../structural"
import Link from 'next/link';
// styles
import * as S from './styled'
// consts
import { colors, menuItems } from "../../../consts"

const Menu = ({
  path
}) => {
  return (
    <S.Container height="100%" align="center">
      <S.Spacer />
      {menuItems.map((_, i) => {
        return (
          <Flex key={i} margin="0 10px 0 0">
            <Link href={_.to}>
              <a>
                <Text color={colors.WHITE} kind={path.slice(1, path.length) === _.title.toLocaleLowerCase() && `active`}>
                  {_.title}
                </Text>
              </a>
            </Link>
          </Flex>
        )
      })}
    </S.Container>
  )
}

export default Menu
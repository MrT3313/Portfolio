// components
import { Flex, Text } from "../../structural"
import Link from 'next/link';
// consts
import { colors, menuItems } from "../../../consts"

const Menu = () => {
  return (
    <Flex>
      <Text margin="0 7px 0 0" color={colors.WHITE }> {/* TODO: extract to structual text component*/}
        |
      </Text>  {/* TODO: how to preserve the white space. {" "} isnt working */}
      {menuItems.map((_, i) => {
        return (
          <Flex key={i} margin="0 10px 0 0">
            <Link href={_.to}>
              <a>
                <Text color={colors.WHITE}>
                  {_.title}
                </Text>
              </a>
            </Link>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Menu
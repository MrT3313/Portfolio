// components
import { Flex } from "../../structural"
import Link from 'next/link';
// consts
import { colors, menuItems } from "../../../consts"

const Menu = () => {
  return (
    <Flex>
      <Flex margin="0 7px 0 0" style={{ color: colors.WHITE }}> {/* TODO: extract to structual text component*/}
        |
      </Flex>  {/* TODO: how to preserve the white space. {" "} isnt working */}
      {menuItems.map((_, i) => {
        return (
          <Flex margin="0 10px 0 0">
            <Link
              href={_.to}
            >
              <a style={{ color: colors.WHITE }}>{_.title}</a>
            </Link>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Menu
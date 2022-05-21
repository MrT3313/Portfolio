// components
import { Flex } from "../../structural"
import Link from 'next/link';
// consts
import { menuItems } from "../../../consts"

const Menu = () => {
  return (
    <Flex>
      <Flex margin="0 7px 0 0">
        {`|`}
      </Flex>  {/* TODO: how to preserve the white space. {" "} isnt working */}
      {menuItems.map((_, i) => {
        return (
          <Flex margin="0 10px 0 0">
            <Link
              href={_.to}
            >
              <a>{_.title}</a>
            </Link>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Menu
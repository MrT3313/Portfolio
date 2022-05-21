// components
import { Flex } from "../components/structural"
import { Header } from "../components/view"

const Homepage = () => {
  return (
    <Flex direction="column" height="100%">
      <Header />
      <Flex width="100%" height="100%" justify="space-between">
        Homepage
      </Flex>
    </Flex>
  )
}

export default Homepage
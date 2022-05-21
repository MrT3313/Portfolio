// components
import { Flex, Text } from "../components/structural"
import { Header, Ascii } from "../components/view"

const Homepage = () => {
  return (
    <Flex direction="column" height="100%">
      <Header />
      <Flex 
        width="100%" 
        height="100%" 
        justify="flex-start" 
        align="center"
        direction="column"
      >
        <Text>Homepage</Text>
        <Flex 
          width="80%" 
          justify="center"
        >
          <Ascii />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Homepage
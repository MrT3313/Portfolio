// components
import { Flex, Text } from "../components/structural"
import { Header, Ascii } from "../components/view"
// consts
import { theme } from "../consts"

const Homepage = () => {
  return (
    <Flex 
      direction="column" 
      justify="center" align="center"
      height="100%" 
      background={theme.PRIMARY}
    >
      <Header />
      <Flex 
        width="100%" 
        height="100%" 
        justify="flex-start" 
        align="center"
        direction="column"
      >
        <Flex 
          direction="column"
          borderRadius="10px"
          padding="5px"
          margin="30px"
          background="white"
        >
          <Text kind="title">Welcome 👋</Text>
          <Text>While your waiting to choose a category why not enjoy some Ascii Art!</Text>
          <Text>Can you guess the image?</Text>
        </Flex>
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
import { useState } from 'react' 
// components
import { colors, experience, theme } from "../../../consts"
import { Text, Flex, IconWrapper } from "../../structural"
// styles
import * as S from './styled'
// icons
import { BsChevronDown } from "react-icons/bs";

const ExperienceCard = ({item}) => {
  // state
  const [expanded, setExpanded] = useState(false)

  // methods
  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <S.Container 
      direction="column"
      onClick={toggleExpanded} 
      className='experienceCard'
    >
      <Flex justify="space-between">
        <Flex>
          <S.Title color={theme.SECONDARY}>{item.title}</S.Title>
          {item.subTitle && (
            <S.subTitle color={colors.WHITE} fontStyle="italic">{item.subTitle}</S.subTitle>
          )}
        </Flex>
        <IconWrapper color={colors.WHITE}>
          <BsChevronDown />
        </IconWrapper>
      </Flex>
      {expanded && (
        <Flex>DRAWER</Flex>
      )}
    </S.Container>
  )
}

export default ExperienceCard
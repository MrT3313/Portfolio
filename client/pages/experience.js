import React from 'react'
// components
import { Flex } from '../components/structural'
import { Header, ExperienceCard, TimeRangeCard } from "../components/view"
//styles
import * as S from './experience.styles'
// data
import { experience } from "../consts"

const Experience = () => {
  return (
    <S.Container direction='column' height="100%">
      <Header />
      <Flex padding="20px" direction="column" width="100%">
        {experience.map((item, i) => {
          return (
            <Flex width="100%">
              <TimeRangeCard jobs={item.data}/>
              <ExperienceCard key={i} item={item}/>
            </Flex>
          )
        })}
      </Flex>
    </S.Container>
  )
}

export default Experience
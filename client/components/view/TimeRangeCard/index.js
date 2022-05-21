import { useState, useEffect } from 'react'
import moment from 'moment'
// components
import { Text, Flex } from '../../structural'
// styles
import * as S from './styled'
import { theme } from '../../../consts'

const TimeRangeCard = ({ jobs }) => {
  // state
  const [dates, setDates] = useState(null)

  // useEffect
  useEffect(() => {
    let dates = []
    let minDate = null
    let maxDate = null
    for (const _ of jobs) {
      dates.push(moment(new Date(_.startDate)))
      if (_.endDate !== null) {
        dates.push(moment(new Date(_.endDate)))
      } else {
        maxDate = "Present"
      }
    }
    minDate = moment.min(dates)
    let diff
    if ( maxDate === null) {
      maxDate = moment.max(dates)
      diff = maxDate.diff(minDate, 'months', true)
      maxDate = maxDate.format('MMM DD')
    } else {
      diff = minDate.diff(moment(new Date()), 'months', true)
    }

    minDate = minDate.format('MMM DD')

    setDates([
      minDate, 
      maxDate,
      Math.round(diff).toFixed(0),
      Math.round(diff / 12, 2).toFixed(2),
    ])
  }, [jobs])
  return(
    dates ? (
      <S.Container>
        <Flex>
          <S.Date>{dates[0]}</S.Date>
          <Text color={theme.SECONDARY}>{`-`}</Text>
          <S.Date
            className={dates[1] === "Present" ? "currentJob" : ""}
          >{dates[1]}</S.Date>
        </Flex>
        <Flex>
          {`${dates[2]} Months`}
        </Flex>
      </S.Container>
    ) : (
      <Text>Loading...</Text>
    )
  )
}

export default TimeRangeCard
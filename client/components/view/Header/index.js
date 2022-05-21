// consts
import { theme } from '../../../consts'
// styles
import * as S from './styled'

const Header = () => {
  return (
    <S.Container 
      justify="space-between"
      align="center"
      height="50px"
      padding="0 10px"
      border="2px solid blue" 
    >
      {/* TODO: extract text component */}
      <S.Left>
          <S.Accent>Mr</S.Accent>
          <S.Accent color={theme.PRIMARY}>
            .
          </S.Accent>
          <S.Accent color={theme.SECONDARY}>
            T
          </S.Accent>
        </S.Left>
    </S.Container>
  )
}

export default Header
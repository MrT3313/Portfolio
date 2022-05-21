// components
import { Flex, Text, IconWrapper } from "../../structural";
// styles
import * as S from './styled'

// consts
import { colors, contactItems } from "../../../consts";

const ContactMe = () => {
  return (
    <S.Container>
      {contactItems.map((item, i) => {
        return (
          <IconWrapper key={i} className="contact" size="24px" color={colors.WHITE}>
            <item.icon />
          </IconWrapper>  
        )
      })}
    </S.Container>
  )
}

export default ContactMe
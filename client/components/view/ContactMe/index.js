// components
import { IconWrapper, ExternalLink, MailTo } from "../../structural";
// styles
import * as S from './styled'

// consts
import { colors, contactItems } from "../../../consts";

const ContactMe = () => {
  return (
    <S.Container>
      {contactItems.map((item, i) => {
        const IconFactory = () => (
          <IconWrapper size="24px" color={colors.WHITE}>
            <item.icon />
          </IconWrapper>
        )

        if (item.title !== "Email") {
          return (
            <ExternalLink kind="contact" key={i} to={item.data}> 
              {IconFactory()}
            </ExternalLink>
          )
        } 

        return (
          <MailTo kind="contact" key={i} email={item.data}>
            {IconFactory()}
          </MailTo>
        )
      })}
    </S.Container>
  )
}

export default ContactMe
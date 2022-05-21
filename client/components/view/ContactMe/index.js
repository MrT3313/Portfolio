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
          <IconWrapper key={i} className="contact" size="24px" color={colors.WHITE}>
            <item.icon />
          </IconWrapper>
        )

        if (item.title !== "Email") {
          return (
            <ExternalLink to={item.data}> 
              {IconFactory()}
            </ExternalLink>
          )
        } 

        return (
          <MailTo email={item.data}>
            {IconFactory()}
          </MailTo>
        )
      })}
    </S.Container>
  )
}

export default ContactMe
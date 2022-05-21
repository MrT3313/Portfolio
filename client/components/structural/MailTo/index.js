// styles
import * as S from './styled'

const MailTo = ({ children, email, kind }) => {
  return (
    <S.MailTo
      className={kind && kind}
      href={`mailTo:${email}`}
    >
      {children}
    </S.MailTo>
  )
}

export default MailTo
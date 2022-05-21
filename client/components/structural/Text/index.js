// styles
import * as S from './styled'

const Text = ({ children, kind = "", className = "", ...props }) => (
  <S.Text
      className={kind || className && `${kind} ${className}`}
      {...props}
  >
      {children}
  </S.Text>
);

export default Text
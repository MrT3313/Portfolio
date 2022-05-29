// styles
import * as S from './styled';

const Text = ({ children, kind = '', as, className = '', ...props }) => (
	<S.Text
		as={as}
		className={kind || className && `${kind} ${className}`}
		{...props}
	>
		{children}
	</S.Text>
);

export default Text;
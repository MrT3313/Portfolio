// components
import { Flex } from '../../structural';
import { EmailPrompt } from '../../view/prompts';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
// styled
import * as S from './styled';

const MailTo = ({ children, email, kind, ...rest }) => {
	// methods
	const handleClick = (e) => {
		if (e.type === 'contextmenu') {
			e.preventDefault();
			navigator.clipboard.writeText(email);
			return;
		}
	};
  
	return (
		<Flex className={kind && kind}>
			<Tooltip
				placement="bottom"
				overlay={
					<EmailPrompt />
				}
				arrowContent={
					<div className="rc-tooltip-arrow-inner"></div>
				}
			>
				<S.MailTo
					handleclick={handleClick}
					onContextMenu={handleClick}
					href={`mailTo:${email}`}
					{...rest}
				>
					{children}
				</S.MailTo>
			</Tooltip>
		</Flex>
	);
};

export default MailTo;
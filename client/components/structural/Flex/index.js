import * as Styled from './styled'

const Flex = ({
	testId,
	children,
	...props
}) => (
	<Styled.Flex
		data-testid={testId}
		{...props}
	>
		{children}
	</Styled.Flex>
)

export default Flex
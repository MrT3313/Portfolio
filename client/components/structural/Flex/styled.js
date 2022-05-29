import styled from '@emotion/styled';

export const Flex = styled.div`
	label: ${({ label }) => label };
	data-testid: ${({ testId }) => testId };

	display: ${({ display = 'flex' }) => display };
	flex-direction: ${({ column, direction }) => (column ? 'column' : direction)};
	justify-content: ${({ justify }) => justify };
	align-items: ${({ align }) => align };

	position: ${({ position }) => position };
	top: ${({ top }) => top };
	right: ${({ right }) => right };
	bottom: ${({ bottom }) => bottom };
	left: ${({ left }) => left };

	flex-wrap: ${({ flexWrap }) => flexWrap };
	flex-grow: ${({ flexGrow }) => flexGrow };

	width: ${({ width }) => width };
	max-width: ${({ maxWidth }) => maxWidth };
	min-width: ${({ minWidth }) => minWidth };
	height: ${({ height }) => height };
	max-height: ${({ maxHeight }) => maxHeight };
	min-height: ${({ minHeight }) => minHeight };

	overflow: ${({ overflow }) => overflow };
	overflow-y: ${({ overflowY }) => overflowY };
	overflow-x: ${({ overflowX }) => overflowX };

	padding: ${({ padding }) => padding };
	padding-top: ${({ paddingTop }) => paddingTop };
	padding-right: ${({ paddingRight }) => paddingRight };
	padding-bottom: ${({ paddingBottom }) => paddingBottom };
	padding-left: ${({ paddingLeft }) => paddingLeft };

	margin: ${({ margin }) => margin};
	margin-top: ${({ marginTop }) => marginTop};
	margin-right: ${({ marginRight }) => marginRight};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	margin-left: ${({ marginLeft }) => marginLeft};

	border: ${({ border }) => border };
	border-top: ${({ borderTop }) => borderTop };
	border-right: ${({ borderRight }) => borderRight };
	border-bottom: ${({ borderBottom }) => borderBottom };
	border-left: ${({ borderLeft }) => borderLeft };
	border-radius: ${({ borderRadius }) => borderRadius };

	background: ${({ background }) => background };
	box-shadow: ${({ boxShadow }) => boxShadow };
	cursor: ${({ cursor }) => cursor };
	gap: ${({ gap }) => gap };

	font-style: ${({ fontStyle }) => fontStyle};
	color: ${({ fontStyle }) => fontStyle}; // TODO: move to structural text component
`;
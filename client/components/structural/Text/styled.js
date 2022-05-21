import styled from "@emotion/styled";
import { colors } from '../../../consts'

export const Text = styled.div`
	display: ${({ display }) => display};
	color: ${({ color }) => colors[color] || color};
	font-weight: ${({ weight }) => weight};
	font-size: ${({ size }) => size};
	font-style: ${({ fontStyle }) => fontStyle};
	line-height: ${({ line }) => line};
	width: ${({ width }) => width};
	padding: ${({ padding }) => padding};
	margin: ${({ margin }) => margin};
	text-transform: ${({ transform }) => transform};
	text-align: ${({ textAlign }) => textAlign};
	vertical-align: ${({ verticalAlign }) => verticalAlign};
	text-decoration: ${({ decoration }) => decoration};
	opacity: ${({ opacity }) => opacity};
	background: ${({ background }) => colors[background] || background};
	text-indent: ${({ indent }) => indent};
	letter-spacing: ${({ letterSpacing }) => letterSpacing};
	word-spacing: ${({ wordSpacing }) => wordSpacing};
	white-space: ${({ whiteSpace }) => whiteSpace};
	text-shadow: ${({ shadow }) => shadow};
	direction: ${({ direction }) => direction};
	unicode-bidi: ${({ bidi }) => bidi};
	label: ${({ label }) => label};
	cursor: ${({ cursor }) => cursor};
`
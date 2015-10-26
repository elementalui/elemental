import constants from '../constants';
import color from 'color';
import * as gradients from './gradients'

const active = {
	background: '#e6e6e6',
	borderColor: color(constants.input.borderColor).darken(0.1).rgbaString(),
	boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
	color: constants.color.textColor
};

export default {
	base: {
		userSelect: 'none',
		background: 'none',
		border: '1px solid transparent',
		borderRadius: constants.relBorderRadius.base,
		cursor: 'pointer',
		display: 'inline-block',
		fontWeight: constants.button.fontWeight,
		lineHeight: constants.component.lineHeight,
		height: constants.component.height,
		marginBottom: 0,
		overflow: 'hidden', // contain gradient on IE9
		padding: '0 ' + constants.button.horizontalPadding,
		textAlign: 'center',
		touchAction: 'manipulation',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		WebkitAppearance: 'none',
		'&:hover, &:focus': {
			color: constants.button.defaultColor,
			textDecoration: 'none'
		},
		'&:active': {
			backgroundImage: 'none',
			outline: 'none'
		},
		'&[disabled]': {
			opacity: 0.4,
			pointerEvents: 'none'
		}
	},
	default: {
		extend: gradients.vertical('#fafafa', '#eaeaea'),
		border: '1px solid ' + constants.input.borderColor,
		borderColor: [
			constants.input.borderColor,
			color(constants.input.borderColor).darken(0.06).rgbaString(),
			color(constants.input.borderColor).darken(0.12).rgbaString()
		].join(' '),
		color: constants.color.textColor,
		textShadow: '0 1px 0 white',
		'&:hover': {
			extend: gradients.vertical('#fff', '#eee'),
			borderColor: [
				color(constants.input.borderColor).darken(0.05).rgbaString(),
				color(constants.input.borderColor).darken(0.05).rgbaString(),
				color(constants.input.borderColor).darken(0.1).rgbaString()
			].join(' '),
			boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
			color: constants.color.textColor
		},
		'&:focus': {
			borderColor: constants.color.appPrimary,
			boxShadow: '0 0 0 3px ' + color(constants.color.appPrimary).alpha(0.1).rgbaString(),
			color: constants.color.textColor,
			outline: 'none'
		},
		'&:active': active,
		'&[disabled]': {
			backgroundColor: constants.button.defaultDisabledBg
		}
	},
	lg: {
		fontSize: constants.fontSize.lg
	},
	sm: {
		fontSize: constants.fontSize.sm
	},
	xs: {
		fontSize: constants.fontSize.xs,
		lineHeight: 1.9,
		paddingLeft: '.66em',
		paddingRight: '.66em'
	},
	block: {
		display: 'block',
		paddingLeft: 0,
		paddingRight: 0,
		width: '100%'
	},
	active: {
		extend: active,
		// yuck...
		'&:focus:not(:active)': {
			borderColor: constants.color.appPrimary,
			boxShadow: [
				'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
				'0 0 0 3px ' + color(constants.color.appPrimary).alpha(0.1).rgbaString()
			].join(',')
		}
	}
};

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const blacklist = require('blacklist');
const createReactClass = require('create-react-class');

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
	'default',
	'default-primary',
	'default-success',
	'default-warning',
	'default-danger',
	'hollow-primary',
	'hollow-success',
	'hollow-warning',
	'hollow-danger',
	'primary',
	'success',
	'warning',
	'danger',
	'link',
	'link-text',
	'link-primary',
	'link-success',
	'link-warning',
	'link-danger',
	'link-cancel',
	'link-delete',
];

export default createReactClass({
	displayName: 'Button',
	propTypes: {
		block: PropTypes.bool,
		className: PropTypes.string,
		component: PropTypes.element,
		href: PropTypes.string,
		isActive: PropTypes.bool,
		size: PropTypes.oneOf(BUTTON_SIZES),
		submit: PropTypes.bool,
		type: PropTypes.oneOf(BUTTON_TYPES),
	},
	getDefaultProps () {
		return {
			type: 'default',
		};
	},
	render () {
		// classes
		const componentClass = classNames(
			'Button',
			'Button--' + this.props.type,
			(this.props.size ? 'Button--' + this.props.size : null),
			{
				'Button--block': this.props.block,
				'is-active': this.props.isActive,
			},
			this.props.className
		);

		// props
		const props = blacklist(this.props, 'block', 'isActive', 'type', 'size', 'component', 'className', 'submit');
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		let tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	},
});

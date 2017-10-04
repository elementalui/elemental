const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const createReactClass = require('create-react-class');

const ALERT_TYPES = [
	'danger',
	'error', // alias for danger
	'info',
	'primary',
	'success',
	'warning',
];

export default createReactClass({
	displayName: 'ElementalAlert',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		type: PropTypes.oneOf(ALERT_TYPES).isRequired,
	},
	render () {
		const componentClass = classNames(
			'Alert',
			'Alert--' + this.props.type,
			this.props.className
		);

		return <div className={componentClass}>{this.props.children}</div>;
	},
});

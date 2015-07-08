var React = require('react/addons');
var classNames = require('classnames');

var ALERT_TYPES = [
	'danger',
	'info',
	'primary',
	'success',
	'warning'
];

module.exports = React.createClass({
	displayName: 'ElementalAlert',
	propTypes: {
		className: React.PropTypes.string,
		children: React.PropTypes.node.isRequired,
		type: React.PropTypes.oneOf(ALERT_TYPES).isRequired
	},
	render() {
		var componentClass = classNames(
			'Alert',
			'Alert--' + this.props.type,
			this.props.className
		);

		return <div className={componentClass}>{this.props.children}</div>;
	}
});

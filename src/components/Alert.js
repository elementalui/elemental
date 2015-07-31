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
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
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

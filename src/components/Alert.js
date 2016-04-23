var React = require('react');
var classNames = require('classnames');
var utils = require('../utils');

var ALERT_TYPES = [
	'danger',
	'error', // alias for danger
	'info',
	'success',
	'warning'
];

module.exports = React.createClass({
	displayName: 'ElementalAlert',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		theme: utils.getThemeValidator({
			classes: ALERT_TYPES
		}),
		type: React.PropTypes.oneOf(ALERT_TYPES).isRequired
	},
	getDefaultProps () {
		return {
			theme: {
				classes: {
					danger: 'Alert Alert--danger',
					error: 'Alert Alert--danger',
					info: 'Alert Alert--info',
					success: 'Alert Alert--success',
					warning: 'Alert Alert--warning'
				}
			}
		};
	},
	render () {
		var componentClass = classNames(
			this.props.theme.classes[this.props.type],
			this.props.className
		);

		return <div className={componentClass}>{this.props.children}</div>;
	},
});

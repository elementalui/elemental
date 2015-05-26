'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

var ALERT_TYPES = ['danger', 'info', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'ElementalAlert',
	propTypes: {
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		var componentClass = classNames('Alert', 'Alert--' + this.props.type, this.props.className);

		var props = blacklist(this.props, 'type', 'className');

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});

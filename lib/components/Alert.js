'use strict';

var React = require('react');
var classNames = require('classnames');

var ALERT_TYPES = ['danger', 'error', // alias for danger
'info', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'ElementalAlert',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(ALERT_TYPES).isRequired
	},
	render: function render() {
		var componentClass = classNames('Alert', 'Alert--' + this.props.type, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});
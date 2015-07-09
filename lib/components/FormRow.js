'use strict';

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	render: function render() {
		var className = classNames('FormRow', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});
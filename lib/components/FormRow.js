'use strict';

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		var className = classNames('FormRow', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});
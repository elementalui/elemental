'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('form-row', this.props.className);

		// props
		var props = blacklist(this.props, 'className');

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});

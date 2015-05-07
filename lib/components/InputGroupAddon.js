'use strict';

var React = require('react/addons');
var classNames = require('classnames');
// var _ = require('lodash');

var Button = require('elemental').Button;

module.exports = React.createClass({
	displayName: 'InputGroupAddon',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		return React.createElement(
			'span',
			{ className: 'InputGroup_addon' },
			React.createElement(
				Button,
				this.props,
				this.props.children
			)
		);
	}
});
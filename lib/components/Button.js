'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

var BUTTON_TYPES = ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-cancel', 'link-delete'];

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func,
		size: React.PropTypes.string,
		submit: React.PropTypes.bool,
		type: React.PropTypes.oneOf(BUTTON_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('Button', 'Button--' + this.props.type, this.props.size ? 'Button--' + this.props.size : null, this.props.className);

		// props
		var props = blacklist(this.props, ['type', 'size', 'className']);
		props.className = componentClass;

		var tag = 'a';

		if (!props.href) {
			tag = 'button';
			props.type = this.props.submit ? 'submit' : 'button';
		}

		return React.createElement(tag, props, this.props.children);
	}
});
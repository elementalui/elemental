'use strict';

var React = require('react');
var classNames = require('classnames');
var blacklist = require('blacklist');

var BUTTON_SIZES = ['lg', 'sm', 'xs'];

var BUTTON_TYPES = ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-primary', 'link-success', 'link-warning', 'link-danger', 'link-cancel', 'link-delete'];

module.exports = React.createClass({
	displayName: 'Button',
	propTypes: {
		block: React.PropTypes.bool,
		className: React.PropTypes.string,
		component: React.PropTypes.element,
		href: React.PropTypes.string,
		isActive: React.PropTypes.bool,
		size: React.PropTypes.oneOf(BUTTON_SIZES),
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
		var componentClass = classNames('Button', 'Button--' + this.props.type, this.props.size ? 'Button--' + this.props.size : null, {
			'Button--block': this.props.block,
			'is-active': this.props.isActive
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'type', 'size', 'component', 'className');
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		var tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	}
});
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		multiline: React.PropTypes.bool,
		noedit: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render: function render() {
		// classes
		var className = classNames({
			'FormInput-noedit': this.props.noedit,
			'FormInput': !this.props.noedit }, this.props.size ? 'FormInput--' + this.props.size : null, this.props.className);

		var props = _extends(blacklist(this.props, 'className'), {
			onBlur: this.handleBlur,
			className: className,
			id: this.props.id || this.props.name
		});

		// element
		var componentElement = 'input';
		if (this.props.noedit && this.props.href) {
			componentElement = 'a';
		} else if (this.props.noedit) {
			componentElement = 'div';
		} else if (this.props.multiline) {
			componentElement = 'textarea';
		}

		return React.createElement(componentElement, props);
	}
});
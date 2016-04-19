'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		autofocus: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		href: React.PropTypes.string,
		id: React.PropTypes.string,
		multiline: React.PropTypes.bool,
		name: React.PropTypes.string,
		noedit: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},

	componentDidMount: function componentDidMount() {
		if (this.props.autofocus) {
			this.focus();
		}
	},

	focus: function focus() {
		this.refs.input.focus();
	},

	render: function render() {
		// classes
		var className = classNames({
			'FormInput-noedit': this.props.noedit,
			'FormInput-noedit--multiline': this.props.noedit && this.props.multiline,
			'FormInput': !this.props.noedit
		}, this.props.size ? 'FormInput--' + this.props.size : null, this.props.className);
		var props = _extends({}, this.props, { className: className, ref: 'input' });
		var Element = 'input';
		if (this.props.noedit && this.props.href) {
			Element = 'a';
			props.type = null;
			props.children = props.children || props.value;
		} else if (this.props.noedit) {
			Element = 'div';
			props.type = null;
			props.children = props.children || props.value;
		} else if (this.props.multiline) {
			Element = 'textarea';
		}

		return React.createElement(Element, props);
	}
});
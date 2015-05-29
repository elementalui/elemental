'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormField',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		multiline: React.PropTypes.bool,
		offsetAbsentLabel: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.string,
		width: React.PropTypes.oneOf(['one-half', 'two-quarters', 'three-sixths', 'one-quarter', 'three-quarters', 'one-third', 'two-sixths', 'two-thirds', 'four-sixths', 'one-fifth', 'two-fifths', 'three-fifths', 'four-fifths', 'one-sixth', 'five-sixths'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('form-field', {
			'offset-absent-label': this.props.offsetAbsentLabel
		}, this.props.width, this.props.className);

		// props
		var props = blacklist(this.props, 'className', 'label', 'type', 'width');

		// elements
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: this.props.id || this.props.htmlFor },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			_extends({ className: componentClass }, props),
			componentLabel,
			this.props.children
		);
	}
});
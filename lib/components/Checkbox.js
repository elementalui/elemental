'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react');

var Checkbox = React.createClass({
	displayName: 'Checkbox',

	propTypes: {
		autofocus: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		indeterminate: React.PropTypes.bool,
		inline: React.PropTypes.bool,
		label: React.PropTypes.string,
		style: React.PropTypes.object,
		title: React.PropTypes.string
	},
	componentDidMount: function componentDidMount() {
		if (this.props.autofocus) {
			this.refs.target.focus();
		}
		this.setIndeterminate(this.props.indeterminate);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setIndeterminate(nextProps.indeterminate);
	},
	setIndeterminate: function setIndeterminate(value) {
		this.refs.target.indeterminate = value;
	},
	render: function render() {
		var componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label', 'style', 'title');
		return React.createElement(
			'label',
			{ className: componentClass, style: this.props.style, title: this.props.title },
			React.createElement('input', _extends({ ref: 'target', type: 'checkbox', className: 'Checkbox__input' }, props)),
			this.props.label && React.createElement(
				'span',
				{ className: 'Checkbox__label' },
				this.props.label
			)
		);
	}
});

module.exports = Checkbox;
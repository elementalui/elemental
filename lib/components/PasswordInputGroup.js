'use strict';

var React = require('react');
var classNames = require('classnames');

function validatePassword(value) {
	return value.length >= 8;
}

module.exports = React.createClass({
	displayName: 'PasswordInputGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		className: React.PropTypes.string,
		invalidMessage: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		validatePassword: React.PropTypes.func,
		value: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			validatePassword: validatePassword,
			requiredMessage: 'Password is required',
			invalidMessage: 'Password must be at least 8 characters in length'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (value.length && !this.props.validatePassword(value) || !value.length && this.props.required) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage
			);
		}
		var formGroupClass = classNames('FormField', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'FormLabel', htmlFor: 'inputPassword' },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: formGroupClass },
			componentLabel,
			React.createElement('input', { onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value, type: 'password', className: 'FormInput', placeholder: 'Enter password', id: 'inputPassword' }),
			validationMessage
		);
	}
});
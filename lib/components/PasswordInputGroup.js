'use strict';

var React = require('react/addons');
var classNames = require('classnames');

function validatePassword(value) {
	return value.length >= 8;
}

module.exports = React.createClass({
	displayName: 'PasswordInputGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		required: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		requiredMessage: React.PropTypes.string,
		invalidMessage: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
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
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e);
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
		if (value.length && !validatePassword(value) || !value.length && this.props.required) {
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
		var formGroupClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: 'inputPassword' },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: formGroupClass },
			componentLabel,
			React.createElement('input', { onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value, type: 'password', className: 'form-input', placeholder: 'Enter password', id: 'inputPassword' }),
			validationMessage
		);
	}
});
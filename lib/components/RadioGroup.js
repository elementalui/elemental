'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		className: React.PropTypes.string,
		inline: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'This field is required'
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
		if (this.props.onChange) this.props.onChange(e.target.value);
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
		if (this.props.required && (!value || value && !value.length)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var self = this;

		// props
		var props = blacklist(this.props, 'alwaysValidate', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value');

		// classes
		var componentClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.requiredMessage
			);
		}

		// dynamic elements
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label' },
			this.props.label
		) : null;

		// options
		var radios = this.props.options.map(function (radio, i) {
			return React.createElement(
				'div',
				{ key: 'radio-' + i, className: 'radio' },
				React.createElement(
					'label',
					{ className: 'radio-label' },
					React.createElement('input', { value: radio.value, type: 'radio', onChange: self.handleChange, onBlur: self.handleBlur, name: self.props.name, className: 'radio-input' }),
					' ',
					radio.label
				)
			);
		});
		if (this.props.inline) {
			radios = React.createElement(
				'div',
				{ className: 'inline-controls' },
				radios
			);
		}

		return React.createElement(
			'div',
			_extends({ className: componentClass }, props),
			componentLabel,
			radios,
			validationMessage
		);
	}
});
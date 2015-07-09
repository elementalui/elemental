'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormSelect',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		className: React.PropTypes.string,
		firstOption: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		prependEmptyOption: React.PropTypes.bool,
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
		// props
		var props = blacklist(this.props, 'prependEmptyOption', 'firstOption', 'alwaysValidate', 'htmlFor', 'id', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value', 'className');

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
		var forAndID = this.props.htmlFor || this.props.id;
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: forAndID },
			this.props.label
		) : null;

		// options
		var options = this.props.options.map(function (opt, i) {
			return React.createElement(
				'option',
				{ key: 'option-' + i, value: opt.value },
				opt.label
			);
		});
		if (this.props.prependEmptyOption || this.props.firstOption) {
			options.unshift(React.createElement(
				'option',
				{ key: 'option-blank', value: '' },
				this.props.firstOption ? this.props.firstOption : 'Select...'
			));
		}

		return React.createElement(
			'div',
			{ className: componentClass },
			componentLabel,
			React.createElement(
				'select',
				_extends({ className: 'FormInput', id: forAndID, onChange: this.handleChange, onBlur: this.handleBlur }, props),
				options
			),
			validationMessage
		);
	}
});
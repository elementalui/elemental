'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

module.exports = _react2['default'].createClass({
	displayName: 'FormSelect',
	propTypes: {
		alwaysValidate: _react2['default'].PropTypes.bool,
		className: _react2['default'].PropTypes.string,
		disabled: _react2['default'].PropTypes.bool,
		firstOption: _react2['default'].PropTypes.string,
		htmlFor: _react2['default'].PropTypes.string,
		id: _react2['default'].PropTypes.string,
		label: _react2['default'].PropTypes.string,
		onChange: _react2['default'].PropTypes.func.isRequired,
		options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
			label: _react2['default'].PropTypes.string,
			value: _react2['default'].PropTypes.string
		})).isRequired,
		prependEmptyOption: _react2['default'].PropTypes.bool,
		required: _react2['default'].PropTypes.bool,
		requiredMessage: _react2['default'].PropTypes.string,
		value: _react2['default'].PropTypes.string
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
			this.setState({
				validationIsActive: false
			});
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
	renderIcon: function renderIcon(icon) {
		var iconClassname = (0, _classnames2['default'])('FormSelect__arrows', {
			'FormSelect__arrows--disabled': this.props.disabled
		});
		return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: icon }, className: iconClassname });
	},
	render: function render() {
		// props
		var props = (0, _blacklist2['default'])(this.props, 'prependEmptyOption', 'firstOption', 'alwaysValidate', 'htmlFor', 'id', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'className');

		// classes
		var componentClass = (0, _classnames2['default'])('FormField', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage = undefined;
		if (!this.state.isValid) {
			validationMessage = _react2['default'].createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.requiredMessage
			);
		}

		// dynamic elements
		var forAndID = this.props.htmlFor || this.props.id;
		var componentLabel = this.props.label ? _react2['default'].createElement(
			'label',
			{ className: 'FormLabel', htmlFor: forAndID },
			this.props.label
		) : null;

		// options
		var options = this.props.options.map(function (opt, i) {
			return _react2['default'].createElement(
				'option',
				{ key: 'option-' + i, value: opt.value },
				opt.label
			);
		});
		if (this.props.prependEmptyOption || this.props.firstOption) {
			options.unshift(_react2['default'].createElement(
				'option',
				{ key: 'option-blank', value: '' },
				this.props.firstOption ? this.props.firstOption : 'Select...'
			));
		}

		return _react2['default'].createElement(
			'div',
			{ className: componentClass },
			componentLabel,
			_react2['default'].createElement(
				'div',
				{ className: 'u-pos-relative' },
				_react2['default'].createElement(
					'select',
					_extends({ className: 'FormInput FormSelect', id: forAndID, onChange: this.handleChange, onBlur: this.handleBlur }, props),
					options
				),
				this.renderIcon(_icons2['default'].selectArrows)
			),
			validationMessage
		);
	}
});
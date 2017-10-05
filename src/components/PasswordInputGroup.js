const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

function validatePassword (value) {
	return value.length >= 8;
}

export default createReactClass({
	displayName: 'PasswordInputGroup',
	propTypes: {
		alwaysValidate: PropTypes.bool,
		className: PropTypes.string,
		invalidMessage: PropTypes.string,
		label: PropTypes.string,
		onChange: PropTypes.func,
		required: PropTypes.bool,
		requiredMessage: PropTypes.string,
		validatePassword: PropTypes.func,
		value: PropTypes.string,
	},
	getDefaultProps () {
		return {
			validatePassword,
			requiredMessage: 'Password is required',
			invalidMessage: 'Password must be at least 8 characters in length',
		};
	},
	getInitialState () {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate,
		};
	},
	componentDidMount () {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	componentWillReceiveProps (newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false,
				});
			}
			this.validateInput(newProps.value);
		}
	},
	handleChange (e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e);
	},
	handleBlur () {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput (value) {
		const newState = {
			isValid: true,
		};
		if ((value.length && !this.props.validatePassword(value)) || (!value.length && this.props.required)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render () {
		let validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">
					{this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage}
				</div>
			);
		}
		const formGroupClass = classNames('FormField', {
			'is-invalid': !this.state.isValid,
		}, this.props.className);

		const componentLabel = this.props.label ? <label className="FormLabel" htmlFor="inputPassword">{this.props.label}</label> : null;

		return (
			<div className={formGroupClass}>
				{componentLabel}
				<input onChange={this.handleChange} onBlur={this.handleBlur} value={this.props.value} type="password" className="FormInput" placeholder="Enter password" id="inputPassword" />
				{validationMessage}
			</div>
		);
	},
});

var React = require('react/addons');
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
		value: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			requiredMessage: 'Password is required',
			invalidMessage: 'Password must be at least 8 characters in length'
		};
	},
	getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	componentWillReceiveProps(newProps) {
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
	handleChange(e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e);
	},
	handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput(value) {
		var newState = {
			isValid: true
		};
		if ((value.length && !validatePassword(value)) || (!value.length && this.props.required)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">
					{this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage}
				</div>
			);
		}
		var formGroupClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? <label className="form-label" htmlFor="inputPassword">{this.props.label}</label> : null;

		return (
			<div className={formGroupClass}>
				{componentLabel}
				<input onChange={this.handleChange} onBlur={this.handleBlur} value={this.props.value} type="password" className="FormInput" placeholder="Enter password" id="inputPassword" />
				{validationMessage}
			</div>
		);
	}
});

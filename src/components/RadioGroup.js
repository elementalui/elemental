const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: PropTypes.bool,
		className: PropTypes.string,
		inline: PropTypes.bool,
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		required: PropTypes.bool,
		requiredMessage: PropTypes.string,
		value: PropTypes.string,
	},
	getDefaultProps () {
		return {
			requiredMessage: 'This field is required',
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
		if (this.props.onChange) this.props.onChange(e.target.value);
	},
	handleBlur () {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput (value) {
		var newState = {
			isValid: true,
		};
		if (this.props.required && (!value || (value && !value.length))) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render () {
		var self = this;

		// props
		var props = blacklist(this.props, 'alwaysValidate', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value', 'inline');

		// classes
		var componentClass = classNames('FormField', {
			'is-invalid': !this.state.isValid,
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">{this.props.requiredMessage}</div>
			);
		}

		// dynamic elements
		var componentLabel = this.props.label ? <label className="FormLabel">{this.props.label}</label> : null;

		// options
		var radios = this.props.options.map(function (radio, i) {
			return (
				<label key={'radio-' + i} className="Radio">
					<input value={radio.value} type="radio" onChange={self.handleChange} onBlur={self.handleBlur} name={self.props.name} className="Radio__input" />
					<span className="Radio__label">{radio.label}</span>
				</label>
			);
		});
		if (this.props.inline) {
			radios = <div className="inline-controls">{radios}</div>;
		}

		return (
			<div className={componentClass} {...props}>
				{componentLabel}
				{radios}
				{validationMessage}
			</div>
		);
	},
});

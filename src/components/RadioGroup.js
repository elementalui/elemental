var React = require('react/addons');
var _ = require('lodash');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			requiredMessage: 'This field is required'
		};
	},
	getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
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
	componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e.target.value);
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
		if (this.props.required && (!value || (value && !value.length))) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render() {
		var self = this;
		// props
		var props = _.extend({}, this.props)
		delete props.alwaysValidate
		delete props.label
		delete props.onChange
		delete props.options
		delete props.required
		delete props.requiredMessage
		delete props.value

		// classes
		var componentClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">{this.props.requiredMessage}</div>
			);
		}

		// dynamic elements
		var componentLabel = this.props.label ? <label className="form-label">{this.props.label}</label> : null;

		// options
		var radios = this.props.options.map(function(radio, i) {
			return (
				<div key={'radio-' + i} className="radio">
					<label className="radio-label">
						<input value={radio.value} type="radio" onChange={self.handleChange} onBlur={self.handleBlur} name={self.props.name} className="radio-input" /> {radio.label}
					</label>
				</div>
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
	}
});

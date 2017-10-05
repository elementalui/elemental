import blacklist from 'blacklist';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import icons from '../icons';
import createReactClass from 'create-react-class';

export default createReactClass({
	displayName: 'FormSelect',
	propTypes: {
		alwaysValidate: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		firstOption: PropTypes.string,
		htmlFor: PropTypes.string,
		id: PropTypes.string,
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
				disabled: PropTypes.bool,
			})
		).isRequired,
		prependEmptyOption: PropTypes.bool,
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
			this.setState({
				validationIsActive: false,
			});
		}
		this.validateInput(this.props.value);
	},
	validateInput (value) {
		let newState = {
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
	renderIcon (icon) {
		let iconClassname = classNames('FormSelect__arrows', {
			'FormSelect__arrows--disabled': this.props.disabled,
		});
		return <span dangerouslySetInnerHTML={{ __html: icon }} className={iconClassname} />;
	},
	render () {
		// props
		let props = blacklist(this.props, 'prependEmptyOption', 'firstOption', 'alwaysValidate', 'htmlFor', 'id', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'className');

		// classes
		let componentClass = classNames('FormField', {
			'is-invalid': !this.state.isValid,
		}, this.props.className);

		// validation message
		let validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">{this.props.requiredMessage}</div>
			);
		}

		// dynamic elements
		let forAndID = this.props.htmlFor || this.props.id;
		let componentLabel = this.props.label ? <label className="FormLabel" htmlFor={forAndID}>{this.props.label}</label> : null;

		// options
		let options = this.props.options.map(function (opt, i) {
			return <option key={'option-' + i} value={opt.value} disabled={opt.disabled}>{opt.label}</option>;
		});
		if (this.props.prependEmptyOption || this.props.firstOption) {
			options.unshift(
				<option key="option-blank" value="">{this.props.firstOption ? this.props.firstOption : 'Select...'}</option>
			);
		}

		return (
			<div className={componentClass}>
				{componentLabel}
				<div className="u-pos-relative">
					<select className="FormInput FormSelect" id={forAndID} onChange={this.handleChange} onBlur={this.handleBlur} {...props}>
						{options}
					</select>
					{this.renderIcon(icons.selectArrows)}
				</div>
				{validationMessage}
			</div>
		);
	},
});

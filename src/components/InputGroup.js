var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		onChange: React.PropTypes.func,
		width: React.PropTypes.string, // Options: one-half, two-quarters, three-sixths, one-quarter, three-quarters, one-third, two-sixths, two-thirds, four-sixths, one-fifth, two-fifths, three-fifths, four-fifths, one-sixth, five-sixths
		label: React.PropTypes.string,
		value: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		multiline: React.PropTypes.bool,
		customClass: React.PropTypes.string,
		inputClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			type: 'text'
		};
	},
	handleChange(e) {
		this.props.onChange && this.props.onChange(e);
	},
	render() {
		// classes
		var componentClass = classNames('form-group',
			this.props.width,
			this.props.customClass);
		
		var inputClass = classNames('form-input',
			this.props.inputClass);

		
		// props
		var props = _.omit(this.props, ['label', 'multiline', 'width', 'id', 'onChange', 'customClass', 'inputClass']);

		
		// elements
		var componentLabel = this.props.label ? (
			<label className="form-label" htmlFor={this.props.id || this.props.name}>
				{this.props.label}
			</label>
		) : null;

		var componentInput = this.props.multiline ? (
			<textarea onChange={this.handleChange} onBlur={this.handleBlur} className={inputClass} id={this.props.id || this.props.name} {...props} />
		) : (
			<input onChange={this.handleChange} onBlur={this.handleBlur} className={inputClass} id={this.props.id || this.props.name} {...props} />
		);

		return (
			<div className={componentClass}>
				{componentLabel}
				{componentInput}
			</div>
		);
	}
});

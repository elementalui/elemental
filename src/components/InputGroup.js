var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		onChange: React.PropTypes.func,
		size: React.PropTypes.string, // Options: one-half, two-quarters, three-sixths, one-quarter, three-quarters, one-third, two-sixths, two-thirds, four-sixths, one-fifth, two-fifths, three-fifths, four-fifths, one-sixth, five-sixths
		label: React.PropTypes.string,
		value: React.PropTypes.string,
		customClass: React.PropTypes.string
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
		var formGroupClass = classNames('form-group',
			this.props.size,
			this.props.customClass);

		var componentLabel = this.props.label ? (
			<label className="form-label" htmlFor={this.props.id || this.props.name}>
				{this.props.label}
			</label>
		) : null;

		// props
		var props = _.omit(this.props, ['label', 'size', 'value', 'id', 'onChange', 'customClass']);

		return (
			<div className={formGroupClass}>
				{componentLabel}
				<input onChange={this.handleChange} onBlur={this.handleBlur} value={this.props.value} className="form-input" id={this.props.id || this.props.name} {...props} />
			</div>
		);
	}
});

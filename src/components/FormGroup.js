var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'FormGroup',
	propTypes: {
		customClass: React.PropTypes.string,
		label: React.PropTypes.string,
		width: React.PropTypes.oneOf(['one-half', 'two-quarters', 'three-sixths', 'one-quarter', 'three-quarters', 'one-third', 'two-sixths', 'two-thirds', 'four-sixths', 'one-fifth', 'two-fifths', 'three-fifths', 'four-fifths', 'one-sixth', 'five-sixths'])
	},
	getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render() {
		// classes
		var componentClass = classNames('form-group',
			this.props.width,
			this.props.customClass);

		
		// props
		var props = _.omit(this.props, ['label', 'width', 'customClass']);

		
		// elements
		var componentLabel = !!this.props.label ? (
			<label className="form-label" htmlFor={this.props.id || this.props.htmlFor}>
				{this.props.label}
			</label>
		) : null;

		return (
			<div className={componentClass}>
				{componentLabel}
				{this.props.children}
			</div>
		);
	}
});

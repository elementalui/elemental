var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');

export default React.createClass({
	displayName: 'FormField',
	childContextTypes: {
    validity: React.PropTypes.oneOf([
			'pristine',
			'dirty',
			'valid',
			'invalid'
		])
  },
	propTypes: {
		className: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		offsetAbsentLabel: React.PropTypes.bool,
		validity: React.PropTypes.oneOf([
			'pristine',
			'dirty',
			'valid',
			'invalid'
		]),
		width: React.PropTypes.oneOf([
			'one-half',
			'two-quarters',
			'three-sixths',
			'one-quarter',
			'three-quarters',
			'one-third',
			'two-sixths',
			'two-thirds',
			'four-sixths',
			'one-fifth',
			'two-fifths',
			'three-fifths',
			'four-fifths',
			'one-sixth',
			'five-sixths',
		]),
	},
	getChildContext() {
		return {validity: this.props.validity};
	},
	setValidity(validity) {
		return `FormField--${validity}`;
	},
	render() {
		// classes
		var componentClass = classNames('FormField', {
			'offset-absent-label': this.props.offsetAbsentLabel
		}, 
		this.props.width, 
		this.props.className, 
		this.setValidity(this.props.validity));

		// props
		var props = blacklist(this.props, 'className', 'label', 'offsetAbsentLabel', 'width');
		
		// elements
		var componentLabel = this.props.label ? (
			<label className="FormLabel" htmlFor={this.props.id || this.props.htmlFor}>
				{this.props.label}
			</label>
		) : null;

		return (
			<div className={componentClass} {...props}>
				{componentLabel}
				{this.props.children}
			</div>
		);
	},
});

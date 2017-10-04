const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'FormField',
	propTypes: {
		className: PropTypes.string,
		htmlFor: PropTypes.string,
		id: PropTypes.string,
		label: PropTypes.string,
		offsetAbsentLabel: PropTypes.bool,
		width: PropTypes.oneOf([
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
	render () {
		// classes
		var componentClass = classNames('FormField', {
			'offset-absent-label': this.props.offsetAbsentLabel,
		}, this.props.width, this.props.className);

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

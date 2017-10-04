const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'FormLabel',
	propTypes: {
		className: PropTypes.string,
		htmlFor: PropTypes.string,
		id: PropTypes.string,
		style: PropTypes.object,
		verticalAlign: PropTypes.oneOf([
			'baseline',
			'bottom',
			'inherit',
			'initial',
			'middle',
			'sub',
			'super',
			'text-bottom',
			'text-top',
			'top',
		]),
	},
	render () {
		// classes
		const className = classNames('FormLabel', this.props.className);
		// props
		const props = blacklist(this.props, 'htmlFor', 'id', 'className', 'style');
		// style
		let style;
		if (this.props.verticalAlign) {
			style = {
				verticalAlign: this.props.verticalAlign,
			};
		}
		return (
			<label className={className} htmlFor={this.props.htmlFor || this.props.id} style={style || this.props.style} {...props}>
				{this.props.children}
			</label>
		);
	},
});

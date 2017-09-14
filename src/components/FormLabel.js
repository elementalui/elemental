var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');

export default React.createClass({
	displayName: 'FormLabel',
	propTypes: {
		className: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		style: React.PropTypes.object,
		verticalAlign: React.PropTypes.oneOf([
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
		var className = classNames('FormLabel', this.props.className);
		// props
		var props = blacklist(this.props, 'htmlFor', 'id', 'className', 'style');
		// style
		var style;
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
	}
});

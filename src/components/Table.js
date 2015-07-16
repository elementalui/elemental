var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormNote',
	propTypes: {
		children: React.PropTypes.any,
		className: React.PropTypes.string
	},
	render() {
		// classes
		var componentClass = classNames(
			'Table',
			this.props.className
		);

		// props
		var props = blacklist(this.props, 'className');

		// render table element
		return (
			<table className={componentClass} {...props}>
				{this.props.children}
			</table>
		);
	}
});

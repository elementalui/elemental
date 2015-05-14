var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var NOTE_TYPES = [
	'default',
	'primary',
	'success',
	'warning',
	'danger'
];

module.exports = React.createClass({
	displayName: 'FormNote',
	propTypes: {
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(NOTE_TYPES),
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		// classes
		var componentClass = classNames(
			'FormNote',
			this.props.type ? ('FormNote--' + this.props.type) : null,
			this.props.className
		);

		
		// props
		var props = blacklist(this.props, 'className', 'type');

		return (
			<div className={componentClass} {...props}>
				{this.props.children}
			</div>
		);
	}
});

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
		note: React.PropTypes.string,
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
		var props = blacklist(this.props, 'className', 'note', 'type');


		// allow users to pass through the note as an attribute or as children
		return (
			<div className={componentClass} dangerouslySetInnerHTML={this.props.note ? { __html: this.props.note } : null} {...props}>
				{this.props.children}
			</div>
		);
	}
});

const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const NOTE_TYPES = [
	'default',
	'primary',
	'success',
	'warning',
	'danger',
];

export default createReactClass({
	displayName: 'FormNote',
	propTypes: {
		className: PropTypes.string,
		note: PropTypes.string,
		type: PropTypes.oneOf(NOTE_TYPES),
	},
	getDefaultProps () {
		return {
			type: 'default',
		};
	},
	render () {
		// classes
		const componentClass = classNames(
			'FormNote',
			this.props.type ? ('FormNote--' + this.props.type) : null,
			this.props.className
		);

		// props
		const props = blacklist(this.props, 'className', 'note', 'type');

		// allow users to pass through the note as an attribute or as children
		return (
			<div className={componentClass} dangerouslySetInnerHTML={this.props.note ? { __html: this.props.note } : null} {...props}>
				{this.props.children}
			</div>
		);
	},
});

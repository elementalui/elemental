const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'Spinner',
	propTypes: {
		className: PropTypes.string,
		size: PropTypes.oneOf(['sm', 'md', 'lg']),
		type: PropTypes.oneOf(['default', 'primary', 'inverted']),
	},
	getDefaultProps () {
		return {
			type: 'default',
			size: 'sm',
		};
	},
	render () {
		const componentClass = classNames(
			'Spinner',
			'Spinner--' + this.props.type,
			'Spinner--' + this.props.size,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<span className="Spinner_dot Spinner_dot--first" />
				<span className="Spinner_dot Spinner_dot--second" />
				<span className="Spinner_dot Spinner_dot--third" />
			</div>
		);
	},
});

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		className: React.PropTypes.string,
		size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
		type: React.PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps() {
		return {
			size: 'md',
			type: 'default'
		};
	},
	render() {
		var componentClass = classNames(
			'Spinner',
			'Spinner--' + this.props.type,
			'Spinner--' + this.props.size,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<i className="SpinnerDot SpinnerDot--first" />
				<i className="SpinnerDot SpinnerDot--second" />
				<i className="SpinnerDot SpinnerDot--third" />
			</div>
		);
	}
});

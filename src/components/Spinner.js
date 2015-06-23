var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
		type: React.PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps() {
		return {
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
				<span className="Spinner_dot Spinner_dot--first" />
				<span className="Spinner_dot Spinner_dot--second" />
				<span className="Spinner_dot Spinner_dot--third" />
			</div>
		);
	}
});

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		type: React.PropTypes.string,
		className: React.PropTypes.string
	},
	render() {
		var componentClass = classNames(
			'spinner',
			'spinner--' + this.props.type,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<i className="spinner__dot spinner__dot--first" />
				<i className="spinner__dot spinner__dot--second" />
				<i className="spinner__dot spinner__dot--third" />
			</div>
		);
	}
});

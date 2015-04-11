var React = require('react');
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
				<i className="spinner__dot" />
				<i className="spinner__dot" />
				<i className="spinner__dot" />
			</div>
		);
	}
});

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		onClick: React.PropTypes.func,
		type: React.PropTypes.string,
		size: React.PropTypes.string,
		customClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		// classes
		var componentClass = classNames(
			'btn',
			('btn-' + this.props.type),
			(this.props.size ? 'btn-' + this.props.size : null),
			this.props.customClass
		);

		// props
		var props = _.omit(this.props, ['type', 'size', 'customClass']);
		
		return (
			<button type="button" className={componentClass} {...props}>
				{this.props.children}
			</button>
		);
	}
});
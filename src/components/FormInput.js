var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		multiline: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render() {
		// classes
		var className = classNames('FormInput',
			(this.props.size ? ('FormInput--' + this.props.size) : null),
			this.props.className);

		var props = Object.assign(blacklist(this.props, 'className'), {
			onBlur: this.handleBlur,
			className: className,
			id: this.props.id || this.props.name
		});

		return React.createElement(this.props.multiline ? 'textarea' : 'input', props);
	}
});



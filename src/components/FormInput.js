var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		href: React.PropTypes.string,
		id: React.PropTypes.string,
		multiline: React.PropTypes.bool,
		name: React.PropTypes.string,
		noedit: React.PropTypes.bool,
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
		var className = classNames(
			{
				'FormInput-noedit': this.props.noedit,
				'FormInput-noedit--multiline': this.props.noedit && this.props.multiline,
				'FormInput': !this.props.noedit
			},
			(this.props.size ? ('FormInput--' + this.props.size) : null),
			this.props.className
		);

		var props = Object.assign(blacklist(this.props, 'className'), {
			onBlur: this.handleBlur,
			className: className,
			id: this.props.id || this.props.name
		});

		// element
		var componentElement = 'input';
		if (this.props.noedit && this.props.href) {
			componentElement = 'a';
			props.type = null;
		} else if (this.props.noedit) {
			componentElement = 'div';
			props.type = null;
		} else if (this.props.multiline) {
			componentElement = 'textarea';
		}

		return React.createElement(componentElement, props);
	}
});

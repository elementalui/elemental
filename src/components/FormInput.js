var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		autoFocus: React.PropTypes.bool,
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
		value: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
	},

	getDefaultProps() {
		return {
			type: 'text',
		};
	},

	render() {
		// classes
		let className = classNames(
			{
				'FormInput-noedit': this.props.noedit,
				'FormInput-noedit--multiline': this.props.noedit && this.props.multiline,
				'FormInput': !this.props.noedit
			},
			(this.props.size ? ('FormInput--' + this.props.size) : null),
			this.props.className
		);
		let props = { ...this.props, className };
		let Element = 'input';
		if (this.props.noedit && this.props.href) {
			Element = 'a';
			props.type = null;
			props.children = props.children || props.value;
		} else if (this.props.noedit) {
			Element = 'div';
			props.type = null;
			props.children = props.children || props.value;
		} else if (this.props.multiline) {
			Element = 'textarea';
		}

		return <Element {...props} />;
	}
});

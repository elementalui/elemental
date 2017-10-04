var React = require('react');
var classNames = require('classnames');

export default React.createClass({
	displayName: 'FormInput',
	propTypes: {
		autoFocus: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		href: React.PropTypes.string,
		id: React.PropTypes.string,
		innerRef: React.PropTypes.func,
		multiline: React.PropTypes.bool,
		name: React.PropTypes.string,
		noedit: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string,
		]),
	},

	getDefaultProps () {
		return {
			type: 'text',
		};
	},

	componentDidMount () {
		if (this.props.autoFocus) {
			this.focus();
		}
	},

	focus () {
		this.input.focus();
	},

	select () {
		this.input.select();
	},
	getRef (ref) {
		this.input = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},

	render () {
		const { noedit, multiline, size, className, ...rest } = this.props;
		// classes
		let newClassName = classNames(
			{
				'FormInput-noedit': noedit,
				'FormInput-noedit--multiline': noedit && multiline,
				'FormInput': !noedit,
			},
			(size ? ('FormInput--' + size) : null),
			className
		);
		let props = { ...rest, className: newClassName };
		let Element = 'input';
		if (noedit && this.props.href) {
			Element = 'a';
			props.type = null;
			props.children = props.children || props.value;
		} else if (noedit) {
			Element = 'div';
			props.type = null;
			props.children = props.children || props.value;
		} else if (multiline) {
			Element = 'textarea';
		}

		return <Element ref={this.getRef} {...props} />;
	},
});

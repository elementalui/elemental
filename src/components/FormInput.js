const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'FormInput',
	propTypes: {
		autoFocus: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		href: PropTypes.string,
		id: PropTypes.string,
		innerRef: PropTypes.func,
		multiline: PropTypes.bool,
		name: PropTypes.string,
		noedit: PropTypes.bool,
		onChange: PropTypes.func,
		size: PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
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
		this.target = ref;

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

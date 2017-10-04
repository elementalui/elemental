const blacklist = require('blacklist');
const classNames = require('classnames');
const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const Checkbox = createReactClass({
	propTypes: {
		autoFocus: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		indeterminate: PropTypes.bool,
		inline: PropTypes.bool,
		innerRef: PropTypes.func,
		label: PropTypes.string,
		style: PropTypes.object,
		title: PropTypes.string,
	},
	componentDidMount () {
		if (this.props.autoFocus) {
			this.target.focus();
		}
		this.setIndeterminate(this.props.indeterminate);
	},
	componentWillReceiveProps (nextProps) {
		this.setIndeterminate(nextProps.indeterminate);
	},
	setIndeterminate (value) {
		this.target.indeterminate = value;
	},
	getRef (ref) {
		this.target = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},
	render () {
		let componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline,
		}, this.props.className);
		let props = blacklist(this.props, 'className', 'label', 'style', 'title');
		return (
			<label className={componentClass} style={this.props.style} title={this.props.title}>
				<input ref={this.getRef} type="checkbox" className="Checkbox__input" {...props} />
				{this.props.label && <span className="Checkbox__label">{this.props.label}</span>}
			</label>
		);
	},
});

export default Checkbox;

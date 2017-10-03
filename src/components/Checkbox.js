const blacklist = require('blacklist');
const classNames = require('classnames');
const React = require('react');

const Checkbox = React.createClass({
	propTypes: {
		autoFocus: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		indeterminate: React.PropTypes.bool,
		inline: React.PropTypes.bool,
		innerRef: React.PropTypes.func,
		label: React.PropTypes.string,
		style: React.PropTypes.object,
		title: React.PropTypes.string,
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

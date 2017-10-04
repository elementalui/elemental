const blacklist = require('blacklist');
const classNames = require('classnames');
const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

var Radio = createReactClass({
	propTypes: {
		className: PropTypes.string,
		disabled: PropTypes.bool,
		inline: PropTypes.bool,
		innerRef: PropTypes.func,
		label: PropTypes.string,
	},
	getRef (ref) {
		this.target = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},
	render () {
		const componentClass = classNames('Radio', {
			'Radio--disabled': this.props.disabled,
			'Radio--inline': this.props.inline,
		}, this.props.className);
		const props = blacklist(this.props, 'className', 'label');

		return (
			<label className={componentClass}>
				<input ref={this.getRef} type="radio" className="Radio__input" {...props} />
				{this.props.label && <span className="Radio__label">{this.props.label}</span>}
			</label>
		);
	},
});

export default Radio;

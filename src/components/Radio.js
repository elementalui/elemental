var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react');

var Radio = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		inline: React.PropTypes.bool,
		innerRef: React.PropTypes.func,
		label: React.PropTypes.string,
	},
	getRef (ref) {
		this.target = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},
	render () {
		var componentClass = classNames('Radio', {
			'Radio--disabled': this.props.disabled,
			'Radio--inline': this.props.inline,
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');

		return (
			<label className={componentClass}>
				<input ref={this.getRef} type="radio" className="Radio__input" {...props} />
				{this.props.label && <span className="Radio__label">{this.props.label}</span>}
			</label>
		);
	},
});

export default Radio;

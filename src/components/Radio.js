var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react/addons');

var Radio = React.createClass({
	propTypes: {
		inline: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	render() {
		var componentClass = classNames('Radio', {
			'Radio--disabled': this.props.disabled,
			'Radio--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');
		
		return (
			<label className={componentClass}>
				<input type="radio" className="Radio__input" {...props} />
				{this.props.label && <span className="Radio__label">{this.props.label}</span>}
			</label>
		);
	}
});

module.exports = Radio;


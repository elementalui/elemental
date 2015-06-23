var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react/addons');

var Checkbox = React.createClass({
	propTypes: {
		inline: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	render() {
		var componentClass = classNames('Checkbox', {
			'Checkbox--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');
		
		return (
			<label className={componentClass}>
				<input type="checkbox" className="Checkbox__input" {...props} />
				{this.props.label && <span className="Checkbox__label">{this.props.label}</span>}
			</label>
		);
	}
});

module.exports = Checkbox;


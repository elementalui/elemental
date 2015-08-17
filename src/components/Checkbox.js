var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react/addons');

var Checkbox = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		focusOnMount: React.PropTypes.bool,
		indeterminate: React.PropTypes.bool,
		inline: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	
	componentDidMount () {
		if (this.props.focusOnMount) {
			this.refs.target.getDOMNode().focus();
		}
		this.setIndeterminate(this.props.indeterminate);
	},
	
	componentWillReceiveProps (nextProps) {
		this.setIndeterminate(nextProps.indeterminate);
	},
	
	setIndeterminate (value) {
		this.refs.target.getDOMNode().indeterminate = value;
	},
	
	render() {
		var componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label', 'style', 'title');

		return (
			<label className={componentClass} style={this.props.style} title={this.props.title}>
				<input ref="target" type="checkbox" className="Checkbox__input" {...props} />
				{this.props.label && <span className="Checkbox__label">{this.props.label}</span>}
			</label>
		);
	}
});

module.exports = Checkbox;


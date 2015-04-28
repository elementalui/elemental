var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'FormLabel',
	propTypes: {
		verticalAlign: React.PropTypes.oneOf(['baseline', 'bottom', 'inherit', 'initial', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top']),
		className: React.PropTypes.string
	},
	render() {
		// classes
		var className = classNames('form-label', this.props.className);

		
		// props
		var props = _.omit(this.props, ['htmlFor', 'id', 'className', 'style']);


		// style
		var style;
		if (this.props.verticalAlign) {
			style = {
				verticalAlign: this.props.verticalAlign
			}
		}

		return (
			<label className={className} htmlFor={this.props.htmlFor || this.props.id} style={style || this.props.style} {...props}>
				{this.props.children}
			</label>
		);
	}
});

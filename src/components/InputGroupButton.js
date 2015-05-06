var React = require('react/addons');
var classNames = require('classnames');
// var _ = require('underscore');

var Button = require('elemental').Button;

module.exports = React.createClass({
	displayName: 'InputGroupButton',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		return (
			<span className="InputGroupButton">
				<Button {...this.props}>
					{this.props.children}
				</Button>
			</span>
		);
	}
});

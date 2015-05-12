var React = require('react/addons');
var classNames = require('classnames');

var Button = require('elemental').Button;

module.exports = React.createClass({
	displayName: 'InputGroupAddon',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		return (
			<span className="InputGroup_addon">
				<Button {...this.props}>
					{this.props.children}
				</Button>
			</span>
		);
	}
});

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Form',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(['horizontal', 'inline']),
	},
	render() {
		var className = this.props.type ? ('Form--' + this.props.type) : null;
		return <form {...this.props} className={className} />;
	}
});

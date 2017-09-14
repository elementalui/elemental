var React = require('react');

export default React.createClass({
	displayName: 'BlankState',
	propTypes: {
		children: React.PropTypes.node.isRequired,
	},
	render () {
		return <div className="BlankState" {...this.props} />;
	},
});

module.exports.Heading = React.createClass({
	displayName: 'BlankStateHeading',
	propTypes: {
		children: React.PropTypes.node.isRequired,
	},
	render () {
		return <h2 className="BlankState__heading" {...this.props} />;
	},
});

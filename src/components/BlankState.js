const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const BlankSlate = createReactClass({
	displayName: 'BlankState',
	propTypes: {
		children: PropTypes.node.isRequired,
	},
	render () {
		return <div className="BlankState" {...this.props} />;
	},
});

BlankSlate.Heading = createReactClass({
	displayName: 'BlankStateHeading',
	propTypes: {
		children: PropTypes.node.isRequired,
	},
	render () {
		return <h2 className="BlankState__heading" {...this.props} />;
	},
});

export default BlankSlate;

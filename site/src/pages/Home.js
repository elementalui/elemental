var React = require('react');
var Button = require('elemental').Button;

var Home = React.createClass({
	displayName: 'VIEW_Home',
	
	render () {
		return (
			<div className="demo-container container">
				<h1>Elemental UI</h1>
				<h2 className="u-margin-top-lg">A UI Tooklit for React.js Websites and Apps</h2>
				<p>Currently under development, initially for use in <a href="http://www.keystonejs.com">KeystoneJS</a>.</p>
				<p>The CSS framework is functionally complete, with some tweaks and browser testing yet to be done.</p>
				<p>The React components are currently prototypes, and we expect they will be restructured a fair bit before the initial release.</p>
				<p>Browse the components using the navigation above, and follow us for updates!</p>
				<p>
					<Button style={{ marginRight: 10 }} type="primary" href="https://twitter.com/elementalui">Follow @ElementalUI on Twitter</Button>
					<Button href="https://github.com/elementalui/elemental">View the GitHub Project</Button>
				</p>
			</div>
		);
	}
});

module.exports = Home;

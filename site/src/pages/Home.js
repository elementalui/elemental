const React = require('react');
const Router = require('react-router');

const NavItems = [
	{ value: 'css',     icon: 'paintcan',      label: 'CSS' },
	{ value: 'buttons', icon: 'screen-full',   label: 'Buttons' },
	{ value: 'forms',   icon: 'diff-modified', label: 'Forms' },
	{ value: 'spinner', icon: 'ellipsis',      label: 'Spinner' },
	{ value: 'modal',   icon: 'versions',      label: 'Modal' },
	{ value: 'misc',    icon: 'code',          label: 'Misc' }
	// { value: 'date-picker', icon: 'calendar', label: 'Date' }
];

const { Col, Container, Row } = require('elemental');

var Home = React.createClass({
	displayName: 'VIEW_Home',

	render () {
		var menuItems = NavItems.map(function(item) {
			return (
				<Col xs="1/3" sm="1/6" key={item.label} className="demo-banner-nav__col col-xs-4 col-sm-2">
					<Router.Link key={item.value} className="demo-banner-nav__item" to={'/' + item.value}>
						<span className={'demo-banner-nav__icon octicon octicon-' + item.icon} />
						<div className="demo-banner-nav__label">
							<span className="demo-banner-nav__label-inner">{item.label}</span>
						</div>
					</Router.Link>
				</Col>
			);
		});
		return (
			<div>
				<header className="demo-banner demo-banner--primary">
					<Container maxWidth={768} className="demo-container">
						<span className="demo-banner-illustration" />
						<h1 className="demo-banner__heading demo-banner__heading-1">Elemental UI</h1>
						<h2 className="demo-banner__heading demo-banner__heading-2">A UI Toolkit for React.js Websites and Apps</h2>
						<div className="demo-banner__buttons">
							<a className="Button Button--demo-primary" href="https://twitter.com/elementalui" target="_blank">Follow @ElementalUI on Twitter</a>
							<a className="Button Button--demo-link" href="https://github.com/elementalui/elemental" target="_blank">View the GitHub Project</a>
						</div>
					</Container>
				</header>
				<div className="demo-banner demo-banner--secondary">
					<Container maxWidth={768} className="demo-container">
						<h2 className="demo-banner__heading demo-banner__heading-2">Project Status</h2>
						<ul className="demo-banner-list">
							<li>Currently under development, initially for use in <a href="http://www.keystonejs.com">KeystoneJS</a></li>
							<li>We are experimenting with Component APIs</li>
							<li>Potentially, we'll transition from stylesheets to more inline styles, and would love feedback</li>
						</ul>
						<h5 className="demo-banner-divider">
							<span className="demo-banner-divider-inner">Demos</span>
						</h5>
						<Row className="demo-banner-nav">
							{menuItems}
						</Row>
					</Container>
				</div>
				<div className="demo-banner demo-banner--tertiary">
					<Container maxWidth={768} className="demo-container">
						<h2 className="demo-banner__heading demo-banner__heading-2">Why build <em>another</em> UI kit?</h2>
						<p>We believe there is a need for a high quality, modular set of UI scaffolding components and controls for React that are built from the outset to natively implement React patterns.</p>
						<p><strong>Elemental UI</strong> has been born to solve real-world requirements in projects we work on, and for use in the node.js content management platform <a href="http://www.keystonejs.com" target="_blank">KeystoneJS</a>.</p>
						<p>Our goal is to create a set of functional and unopinionated components that are useful on their own or together, with an unobtrusive default style and flexible theme capabilities.</p>
						<p>Thanks and credit go to the many other great CSS Component libraries that have been developed and whose shoulders we stand on, especially Bootstrap.</p>
						<div className="demo-banner-points">
							<Row>
								<Col sm="1/3">
									<h3>Open Source</h3>
									<p>Available for use under the MIT license,  built on foundations of React.js, LESS, Babel and Gulp, and inspired by other great projects.</p>
								</Col>
								<Col sm="1/3">
									<h3>Modern Workflows</h3>
									<p>Elemental is designed to be installed from npm and built into your project with browserify or webpack. You can customise it by including our LESS too.</p>
								</Col>
								<Col sm="1/3">
									<h3>Made by Thinkmill</h3>
									<p>Elemental UI is the cornerstone of Thinkmill's development suite, made by people who share a passion for HTML, CSS and JavaScript.</p>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
		);
	}
});

module.exports = Home;

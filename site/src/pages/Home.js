var React = require('react');
var Button = require('elemental').Button;
var Router = require('react-router');

const NavItems = [
	{ value: 'css',     icon: 'paintcan',      label: 'CSS' },
	{ value: 'buttons', icon: 'screen-full',   label: 'Buttons' },
	{ value: 'forms',   icon: 'diff-modified', label: 'Forms' },
	{ value: 'spinner', icon: 'ellipsis',      label: 'Spinner' },
	{ value: 'modal',   icon: 'versions',      label: 'Modal' },
	{ value: 'misc',    icon: 'code',          label: 'Misc' },
	// { value: 'date-picker', icon: 'calendar', label: 'Date' }
];

var Home = React.createClass({
	displayName: 'VIEW_Home',

	render () {
		var menuItems = NavItems.map(function(item) {
			return (
				<div key={item.label} className="demo-banner-nav__col col-xs-4 col-sm-2">
					<Router.Link key={item.value} className="demo-banner-nav__item" onClick={self.toggleMenu} to={item.value}>
						<span className={'demo-banner-nav__icon octicon octicon-' + item.icon} />
						<div className="demo-banner-nav__label">
							<span className="demo-banner-nav__label-inner">{item.label}</span>
						</div>
					</Router.Link>
				</div>
			);
		});
		return (
			<div>
				<header className="demo-banner demo-banner--primary">
					<div className="demo-container container">
						<span className="demo-banner-illustration" />
						<h1 className="demo-banner__heading demo-banner__heading-1">Elemental UI</h1>
						<h2 className="demo-banner__heading demo-banner__heading-2">A UI Toolkit for React.js Websites and Apps</h2>
						<div className="demo-banner__buttons">
							<a className="Button Button--demo-primary" href="https://twitter.com/elementalui" target="_blank">Follow @ElementalUI on Twitter</a>
							<a className="Button Button--demo-link" href="https://github.com/elementalui/elemental" target="_blank">View the GitHub Project</a>
						</div>
					</div>
				</header>
				<div className="demo-banner demo-banner--secondary">
					<div className="demo-container container">
						<h2 className="demo-banner__heading demo-banner__heading-2">Project Status</h2>
						<ul className="demo-banner-list">
							<li>Currently under heavy development, initially for use in <a href="http://www.keystonejs.com">KeystoneJS</a></li>
							<li>The CSS is functionally complete, with some tweaks and browser testing yet to be done</li>
							<li>The React components are currently prototypes, their structure and functionality is WIP</li>
						</ul>
						<h5 className="demo-banner-divider">
							<span className="demo-banner-divider-inner">Demos</span>
						</h5>
						<div className="demo-banner-nav row">
							{menuItems}
						</div>
					</div>
				</div>
				<div className="demo-banner demo-banner--tertiary">
					<div className="demo-container container">
						<h2 className="demo-banner__heading demo-banner__heading-2">Why build <em>another</em> UI kit?</h2>
						<p>At <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a> we are constantly building bespoke web applications for various clients. We noticed that whilst projects vary greatly, we're using the same CSS and Component foundations over and over again.</p>
						<p>In an effort to keep our projects' codebases <abbr title="Don't Repeat Yourself">DRY</abbr> we decided it was time to build something to improve our workflow and unify our projects to decrease development time.</p>
						<p>All this coupled with a growing need for a re-usable set of React.js UI Components for the Admin UI in <a href="http://www.keystonejs.com" target="_blank">KeystoneJS</a>, Elemental was born.</p>
						<p>While there are many other great UI Libraries available (including for React), our goal with Elemental is to develop a light-weight, unopinionated, modular framework that we can use across all our web projects.</p>

						<div className="demo-banner-points">
							<div className="row">
								<div className="col-sm-4">
									<h3>Open Source</h3>
									<p>Available for use under the MIT license,  built on foundations of React.js, LESS, Babel and Gulp, and inspired by other great projects.</p>
								</div>
								<div className="col-sm-4">
									<h3>Modern Workflows</h3>
									<p>Elemental is designed to be installed from npm and built into your project with browserify or webpack. You can customise it by including our LESS too.</p>
								</div>
								<div className="col-sm-4">
									<h3>Made by Thinkmill</h3>
									<p>Elemental UI is the cornerstone of Thinkmill's development suite, made by people who share a passion for HTML, CSS and JavaScript.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Home;

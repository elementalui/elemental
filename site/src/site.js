var React = require('react');
var Router = require('react-router');

const NavItems = [
	{ value: 'css',         label: 'CSS' },
	{ value: 'buttons',     label: 'Buttons' },
	{ value: 'forms',       label: 'Forms' },
	{ value: 'spinner',     label: 'Spinner' },
	{ value: 'modal',       label: 'Modal' },
	{ value: 'misc',        label: 'Misc' }
	// { value: 'date-picker', label: 'Date Picker' }
];

var PageNav = React.createClass({
	getInitialState () {
		return {
			mobileMenuIsVisible: false,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		};
	},

	handleResize (e) {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});
	},

	componentDidMount () {
		window.addEventListener('resize', this.handleResize);
	},

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleResize);
	},

	toggleMenu () {
		this.setState({
			mobileMenuIsVisible: !this.state.mobileMenuIsVisible
		});
	},

	render () {
		var self = this;
		var height = (this.state.windowWidth < 768) ? this.state.windowHeight : 'auto';
		var menuClass = this.state.mobileMenuIsVisible ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function(item) {
			return (
				<Router.Link key={item.value} className="primary-nav__item" onClick={self.toggleMenu} to={item.value}>
					<span className="primary-nav__item-inner">{item.label}</span>
				</Router.Link>
			);
		});
		return (
			<nav className="primary-nav">
				<Router.Link to="home" className="primary-nav__brand special" title="Home">
					<img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
				</Router.Link>
				{/*<Router.Link to="home">Home</Router.Link>*/}
				<button onClick={this.toggleMenu} className="primary-nav__item primary-nav-menu-trigger">
					<span className="primary-nav-menu-trigger-icon octicon octicon-navicon" />
					<span className="primary-nav-menu-trigger-label">{this.state.mobileMenuIsVisible ? 'Close' : 'Menu'}</span>
				</button>
				<div className={menuClass} style={{ height }}>
					<div className="primary-nav-menu-inner">
						{menuItems}
					</div>
				</div>
				<a href="https://github.com/elementalui/elemental" target="_blank" title="View on GitHub" className="primary-nav__brand right">
					<img src="./images/github-logo.svg" className="primary-nav__brand-src" />
				</a>
			</nav>
		);
	}
});

var App = React.createClass({
	render () {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					<div className="demo-container container">
						Copyright &copy; 2015 &middot; (MIT) License &middot; Built by <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a>, initially for integration with <a href="http://www.keystonejs.com" target="_blank">KeystoneJS</a>
					</div>
				</div>
			</div>
		);
	}
});

var basepath = (window.location.pathname.slice(0, 10) === '/elemental') ? '/elemental' : '';

var routes = (
	<Router.Route name="app" path={basepath + '/'} handler={App}>
		<Router.Route name="home" path={basepath + '/'} handler={require('./pages/Home')} />
		<Router.Route name="css" path={basepath + '/css'} handler={require('./pages/CSS')} />
		<Router.Route name="buttons" path={basepath + '/buttons'} handler={require('./pages/Buttons')} />
		<Router.Route name="forms" path={basepath + '/forms'} handler={require('./pages/Forms')} />
		<Router.Route name="spinner" path={basepath + '/spinner'} handler={require('./pages/Spinner')} />
		<Router.Route name="modal" path={basepath + '/modal'} handler={require('./pages/Modal')} />
		<Router.Route name="misc" path={basepath + '/misc'} handler={require('./pages/Misc')} />
		<Router.Route name="date-picker" path={basepath + '/date-picker'} handler={require('./pages/DatePicker')} />
		<Router.DefaultRoute handler={require('./pages/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});

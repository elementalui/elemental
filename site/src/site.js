import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';

const NavItems = [
	{ value: '/css',         label: 'CSS' },
	{ value: '/grid',        label: 'Grid' },
	{ value: '/buttons',     label: 'Buttons' },
	{ value: '/glyphs',      label: 'Glyphs' },
	{ value: '/forms',       label: 'Forms' },
	{ value: '/spinner',     label: 'Spinner' },
	{ value: '/modal',       label: 'Modal' },
	{ value: '/misc',        label: 'Misc' }
	// { value: 'date-picker', label: 'Date Picker' }
];

const PageNav = React.createClass({
	getInitialState () {
		return {
			mobileMenuIsVisible: false,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		};
	},
	componentDidMount () {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount () {
		window.removeEventListener('resize', this.handleResize);
	},
	handleResize () {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});
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
				<Link key={item.value} className="primary-nav__item" activeClassName="active" onClick={self.toggleMenu} to={item.value}>
					<span className="primary-nav__item-inner">{item.label}</span>
				</Link>
			);
		});
		return (
			<nav className="primary-nav">
				<Link to="/home" className="primary-nav__brand special" title="Home">
					<img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
				</Link>
				{/*<Link to="home">Home</Link>*/}
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

const App = React.createClass({
	render () {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					{this.props.children}
				</div>
				<div className="page-footer">
					<div className="demo-container container">
						Copyright &copy; 2016 &middot; (MIT) License &middot; Built by <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a>, initially for integration with <a href="http://www.keystonejs.com" target="_blank">KeystoneJS</a>
					</div>
				</div>
			</div>
		);
	}
});

const basepath = (window.location.pathname.slice(0, 10) === '/elemental') ? '/elemental' : '';

ReactDOM.render(
	<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path="/" component={App}>
			<IndexRoute component={require('./pages/Home')} />
			<Route path="home" component={require('./pages/Home')} />
			<Route path="css" component={require('./pages/CSS')} />
			<Route path="grid" component={require('./pages/Grid')} />
			<Route path="buttons" component={require('./pages/Buttons')} />
			<Route path="glyphs" component={require('./pages/Glyphs')} />
			<Route path="forms" component={require('./pages/Forms')} />
			<Route path="spinner" component={require('./pages/Spinner')} />
			<Route path="modal" component={require('./pages/Modal')} />
			<Route path="misc" component={require('./pages/Misc')} />
			<Route path="*" component={require('./pages/Home')} />
		</Route>
	</Router>,
	document.getElementById('app')
);

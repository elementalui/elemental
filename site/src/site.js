var React = require('react');
var Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>Elemental UI</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<nav className="primary-nav">
				<Router.Link to="home" className="primary-nav__brand special" title="Home">
					<img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
				</Router.Link>
				{/*<Router.Link to="home">Home</Router.Link>*/}
				<Router.Link className="primary-nav__item" to="buttons">Buttons</Router.Link>
				<Router.Link className="primary-nav__item" to="tables">Tables</Router.Link>
				<Router.Link className="primary-nav__item" to="forms">Forms</Router.Link>
				<Router.Link className="primary-nav__item" to="spinner">Spinner</Router.Link>
				<Router.Link className="primary-nav__item" to="modal">Modal</Router.Link>
				<Router.Link className="primary-nav__item" to="grid">Grid</Router.Link>
				<Router.Link className="primary-nav__item" to="date-picker">Date Picker</Router.Link>
				<a href="https://github.com/JedWatson/react-express-starter" target="_blank" title="View on GitHub" className="primary-nav__brand right">
					<img src="./images/github-logo.svg" className="primary-nav__brand-src" />
				</a>
			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					<div className="page-container">
						Copyright &copy; 2015 <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a> &middot; MIT License
					</div>
				</div>
			</div>
		);
	}
});

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={require('./pages/Home')} />
		<Router.Route name="buttons" path="/buttons" handler={require('./pages/Buttons')} />
		<Router.Route name="tables" path="/tables" handler={require('./pages/Tables')} />
		<Router.Route name="forms" path="/forms" handler={require('./pages/Forms')} />
		<Router.Route name="spinner" path="/spinner" handler={require('./pages/Spinner')} />
		<Router.Route name="modal" path="/modal" handler={require('./pages/Modal')} />
		<Router.Route name="grid" path="/grid" handler={require('./pages/Grid')} />
		<Router.Route name="date-picker" path="/date-picker" handler={require('./pages/DatePicker')} />
		<Router.DefaultRoute handler={require('./pages/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});

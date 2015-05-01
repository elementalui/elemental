var React = require('react');

var Grid = React.createClass({
	displayName: 'VIEW_Grid',

	render() {
		return (
			<div className="demo-container container">
				<h1>Grid</h1>
				<p className="lead">Uses the standard Bootstrap grid which is a 12 column responsive layout, with a 20px gutter.</p>

				<h2 className="u-padding-top-lg">Three equal columns</h2>
				<div className="row">
					<div className="col-sm-4">
						<div className="demo-box u-text-muted">.col-sm-4</div>
					</div>
					<div className="col-sm-4">
						<div className="demo-box u-text-muted">.col-sm-4</div>
					</div>
					<div className="col-sm-4">
						<div className="demo-box u-text-muted">.col-sm-4</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Three unequal columns</h2>
				<div className="row">
					<div className="col-sm-3">
						<div className="demo-box u-text-muted">.col-sm-3</div>
					</div>
					<div className="col-sm-6">
						<div className="demo-box u-text-muted">.col-sm-6</div>
					</div>
					<div className="col-sm-3">
						<div className="demo-box u-text-muted">.col-sm-3</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Two unequal columns</h2>
				<div className="row">
					<div className="col-sm-8">
						<div className="demo-box u-text-muted">.col-sm-8</div>
					</div>
					<div className="col-sm-4">
						<div className="demo-box u-text-muted">.col-sm-4</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Columns on a small device</h2>
				<div className="row">
					<div className="col-xs-4">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">4</span>
							<span className="hidden-xs">.col-xs-4</span>
						</div>
					</div>
					<div className="col-xs-4">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">4</span>
							<span className="hidden-xs">.col-xs-4</span>
						</div>
					</div>
					<div className="col-xs-4">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">4</span>
							<span className="hidden-xs">.col-xs-4</span>
						</div>
					</div>
					<div className="col-xs-8">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">8</span>
							<span className="hidden-xs">.col-xs-8</span>
						</div>
					</div>
					<div className="col-xs-4">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">4</span>
							<span className="hidden-xs">.col-xs-4</span>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">3</span>
							<span className="hidden-xs">.col-xs-3</span>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">6</span>
							<span className="hidden-xs">.col-xs-6</span>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="demo-box u-text-muted">
							<span className="visible-xs-inline">3</span>
							<span className="hidden-xs">.col-xs-3</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Grid;

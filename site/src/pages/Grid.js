var React = require('react');

var Grid = React.createClass({
	displayName: 'VIEW_Grid',

	render() {
		return (
			<div className="demo-container container">
				<h1>Grid</h1>
				<p>Based on <a href="http://fluidable.com/" target="_blank">Fluidable</a> - a mobile first, responsive grid system. It is lightweight &amp; built using LESS.
				</p>

				<h2 className="u-padding-top-lg">Three equal columns</h2>
				<div className="col-group">
					<div className="col-4">
						<div className="demo-box u-text-muted">.col-4</div>
					</div>
					<div className="col-4">
						<div className="demo-box u-text-muted">.col-4</div>
					</div>
					<div className="col-4">
						<div className="demo-box u-text-muted">.col-4</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Three unequal columns</h2>
				<div className="col-group">
					<div className="col-3">
						<div className="demo-box u-text-muted">.col-3</div>
					</div>
					<div className="col-6">
						<div className="demo-box u-text-muted">.col-6</div>
					</div>
					<div className="col-3">
						<div className="demo-box u-text-muted">.col-3</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Two unequal columns</h2>
				<div className="col-group">
					<div className="col-8">
						<div className="demo-box u-text-muted">.col-8</div>
					</div>
					<div className="col-4">
						<div className="demo-box u-text-muted">.col-4</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Grid;

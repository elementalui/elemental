var React = require('react');

var Grid = React.createClass({
	displayName: 'VIEW_Grid',

	render () {
		return (
			<div className="page-container">
				<h1>Grid</h1>
				<h2 className="u-padding-top-lg">Three equal columns</h2>
				<div className="g-row">
					<div className="g-col">
						<div className="demo-box u-text-muted">.g-col</div>
					</div>
					<div className="g-col">
						<div className="demo-box u-text-muted">.g-col</div>
					</div>
					<div className="g-col">
						<div className="demo-box u-text-muted">.g-col</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Three unequal columns</h2>
				<div className="g-row">
					<div className="g-col g-one-quarter">
						<div className="demo-box u-text-muted">.g-one-quarter</div>
					</div>
					<div className="g-col g-one-half">
						<div className="demo-box u-text-muted">.g-one-half</div>
					</div>
					<div className="g-col g-one-quarter">
						<div className="demo-box u-text-muted">.g-one-quarter</div>
					</div>
				</div>
				<h2 className="u-padding-top-lg">Two unequal columns</h2>
				<div className="g-row">
					<div className="g-col g-two-thirds">
						<div className="demo-box u-text-muted">.g-two-thirds</div>
					</div>
					<div className="g-col g-one-third">
						<div className="demo-box u-text-muted">.g-one-third</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Grid;

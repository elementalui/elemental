var React = require('react');
var Button = require('elemental').Button;
var Spinner = require('elemental').Spinner;

var Buttons = React.createClass({
	displayName: 'VIEW_Spinner',
	render () {
		return (
			<div className="demo-container container">
				<h1>Spinner</h1>
				<div className="row">
					<div className="col-sm-4">
						<h2>Default</h2>
						<div className="demo-box u-text-center">
							<Spinner type="default" />
						</div>
					</div>
					<div className="col-sm-4">
						<h2>Primary</h2>
						<div className="demo-box u-text-center">
							<Spinner type="primary" />
						</div>
					</div>
					<div className="col-sm-4">
						<h2>Inverted</h2>
						<div className="demo-box u-text-center demo-box--inverted">
							<Spinner type="inverted" />
						</div>
					</div>
				</div>

				<h2>Use in Buttons</h2>
				<Button type="default">
					<Spinner />
				</Button>
				<hr />
				<Button type="default" disabled>
					<Spinner type="primary" />
					Saving
				</Button>
				<hr />
				<Button type="primary" disabled>
					<Spinner type="inverted" />
					Saving
				</Button>
			</div>
		);
	}
});

module.exports = Buttons;

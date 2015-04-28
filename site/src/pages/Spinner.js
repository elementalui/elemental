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
						<h2 className="u-padding-top-lg">Standard</h2>
						<div className="demo-box">
							<Spinner type="default" />
						</div>
					</div>
					<div className="col-sm-4">
						<h2 className="u-padding-top-lg">Primary</h2>
						<div className="demo-box">
							<Spinner type="primary" />
						</div>
					</div>
					<div className="col-sm-4">
						<h2 className="u-padding-top-lg">Inverted</h2>
						<div className="demo-box demo-box--inverted">
							<Spinner type="inverted" />
						</div>
					</div>
				</div>

				<h2 className="u-padding-top-lg">Use in Buttons</h2>
				<Button type="default" customClass="u-margin-right-sm">
					<Spinner type="primary" />
				</Button>
				<Button type="default" customClass="u-margin-right-sm" disabled>
					<Spinner type="primary" />
					Saving
				</Button>
				<Button type="primary" customClass="u-margin-right-sm" disabled>
					<Spinner type="inverted" />
					Saving
				</Button>
			</div>
		);
	}
});

module.exports = Buttons;

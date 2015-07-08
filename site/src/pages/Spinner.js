var React = require('react');
var Button = require('elemental').Button;
var Spinner = require('elemental').Spinner;

var ExampleSource = require('../components/ExampleSource');

var Buttons = React.createClass({
	displayName: 'VIEW_Spinner',
	render () {
		return (
			<div className="demo-container container">
				<h1>Spinner</h1>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Independent</div>
						<div className="demo-box u-text-center code-example__example-element--inline">
							<Spinner />
						</div>
						<div className="demo-box u-text-center code-example__example-element--inline">
							<Spinner type="primary" />
						</div>
						<div className="demo-box u-text-center code-example__example-element--inline code-example__example-element--primary-bg">
							<Spinner type="inverted" />
						</div>
					</div>
					<ExampleSource>
						{`<Spinner />\n<Spinner type="primary" />\n<Spinner type="inverted" />`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Inside Buttons</div>
						<div className="code-example__example-element--inline">
							<Button disabled>
								<Spinner />
							</Button>
						</div>
						<div className="code-example__example-element--inline">
							<Button disabled>
								<Spinner type="primary" />
								Saving
							</Button>
						</div>
						<div className="code-example__example-element--inline">
							<Button type="primary" disabled>
								<Spinner type="inverted" />
								Saving
							</Button>
						</div>
					</div>
					<ExampleSource>
						{`<Button disabled><Spinner /></Button>\n<Button disabled><Spinner type="primary" />Saving</Button>\n<Button type="primary" disabled><Spinner type="inverted" />Saving</Button>`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<div className="usage-table">
					<table className="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<body>
							<tr>
								<td className="usage-table__name">size</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">
									<p>Declare the size of the dots in the spinner. Possible options:
									<br/>
									<code className="inline-code">sm</code> <code className="inline-code">lg</code></p>
									Spinners automatically become small when inside of buttons
								</td>
							</tr>
							<tr>
								<td className="usage-table__name">type</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">default</td>
								<td className="usage-table__description">
									Declare the colour of the dots in the spinner. Possible options:
									<br/>
									<code className="inline-code">default</code> <code className="inline-code">primary</code> <code className="inline-code">inverted</code>
								</td>
							</tr>
						</body>
					</table>
				</div>
			</div>
		);
	}
});

module.exports = Buttons;

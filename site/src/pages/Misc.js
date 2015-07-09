var React = require('react');
var ExampleSource = require('../components/ExampleSource');
var Alert = require('elemental').Alert;
var Pill = require('elemental').Pill;

var Misc = React.createClass({
	displayName: 'VIEW_Misc',

	render() {
		return (
			<div className="demo-container container">
				<h1>Miscellaneous</h1>
				<p className="lead">Some components march to the beat of their own drum&hellip;</p>
				
				<h2>Alerts</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Alert type="info"><strong>Info:</strong> This could be something helpful, better read it just to make sure.</Alert>
						<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
						<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
						<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
					</div>
					<ExampleSource>
						{`
							<Alert type="info"><strong>Info:</strong> This could be something helpful, better read it just to make sure.</Alert>
							<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
							<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
							<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
						`}
					</ExampleSource>
				</div>
				<h3>Usage</h3>
				<div className="usage-table">
					<table className="table">
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="usage-table__name">children</td>
								<td className="usage-table__type">node</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Required</td>
							</tr>
							<tr>
								<td className="usage-table__name">type</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Required. 
									One of:
									<br />
									<code className="inline-code">danger</code> <code className="inline-code">info</code> <code className="inline-code">primary</code> <code className="inline-code">success</code> <code className="inline-code">warning</code>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2>Pills</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Pill label="Create" type="success-inverted" />
						<Pill label="First Pill" type="primary" showClearButton />
						<Pill label="Second Pill" type="primary" showClearButton />
						<Pill label="Third Pill" type="primary" showClearButton />
						<Pill label="Clear All" />
					</div>
					<ExampleSource>
						{`
							<Pill label="Create" type="success-inverted" />
							<Pill label="First Pill" type="primary" showClearButton />
							<Pill label="Second Pill" type="primary" showClearButton />
							<Pill label="Third Pill" type="primary" showClearButton />
							<Pill label="Clear All" />
						`}
					</ExampleSource>
				</div>
				<h3>Usage</h3>
				<div className="usage-table">
					<table className="table">
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="usage-table__name">showClearButton</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Display the clear button, rendered beside the label</td>
							</tr>
							<tr>
								<td className="usage-table__name">label</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Required. The tag label</td>
							</tr>
							<tr>
								<td className="usage-table__name">onClear</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Run when the user clicks the clear button</td>
							</tr>
							<tr>
								<td className="usage-table__name">type</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">'default'</td>
								<td className="usage-table__description">
									One of:
									<br />
									<code className="inline-code">danger</code> <code className="inline-code">default</code> <code className="inline-code">info</code> <code className="inline-code">primary</code> <code className="inline-code">success</code> <code className="inline-code">warning</code>
									<br />
									<code className="inline-code">danger-inverted</code> <code className="inline-code">default-inverted</code> <code className="inline-code">info-inverted</code> <code className="inline-code">primary-inverted</code> <code className="inline-code">success-inverted</code> <code className="inline-code">warning-inverted</code>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
});

module.exports = Misc;

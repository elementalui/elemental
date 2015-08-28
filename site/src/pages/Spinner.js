const React = require('react');
const { Button, Col, Container, Row, Spinner, Table } = require('elemental');
const DemoBox = require('../components/DemoBox');
const ExampleSource = require('../components/ExampleSource');

var Buttons = React.createClass({
	displayName: 'VIEW_Spinner',
	render () {
		return (
			<Container maxWidth={800} className="demo-container">
				<h1>Spinner</h1>
				<h2>Common use cases</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Page Element</div>
						<Row>
							<Col>
								<DemoBox style={{ paddingBottom: 20, paddingTop: 20 }}>
									<Spinner size="md" />
								</DemoBox>
							</Col>
							<Col>
								<DemoBox style={{ paddingBottom: 20, paddingTop: 20 }}>
									<Spinner size="md" type="primary" />
								</DemoBox>
							</Col>
							<Col>
								<DemoBox style={{ paddingBottom: 20, paddingTop: 20 }} inverted >
									<Spinner size="md" type="inverted" />
								</DemoBox>
							</Col>
						</Row>
					</div>
					<ExampleSource>
						{`
						<Spinner size="md" />
						<Spinner size="md" type="primary" />
						<Spinner size="md" type="inverted" />
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Inside Buttons</div>
						<div className="code-example__example-element--inline">
							<Button>
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
							<Button type="primary">
								<Spinner type="inverted" />
								Submitting
							</Button>
						</div>
					</div>
					<ExampleSource>
						{`
						<Button><Spinner /></Button>
						<Button disabled><Spinner type="primary" />Saving</Button>
						<Button type="primary"><Spinner type="inverted" />Submitting</Button>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Full Page Load</div>
						<div style={{ paddingBottom: 60, paddingTop: 60, textAlign: 'center' }}>
							<Spinner size="lg" />
						</div>
					</div>
					<ExampleSource>
						{`
						<Spinner size="lg" />
						`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<div className="usage-table">
					<Table>
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
								<td className="usage-table__prop">size</td>
								<td className="usage-table__type">enum</td>
								<td className="usage-table__default">sm</td>
								<td className="usage-table__description">
									<p>Declare the size of the dots in the spinner. Possible options:
									<br/>
									<code className="inline-code">sm</code> <code className="inline-code">md</code> <code className="inline-code">lg</code></p>
									Spinners automatically become small when inside of buttons
								</td>
							</tr>
							<tr>
								<td className="usage-table__prop">type</td>
								<td className="usage-table__type">enum</td>
								<td className="usage-table__default">default</td>
								<td className="usage-table__description">
									Declare the colour of the dots in the spinner. Possible options:
									<br/>
									<code className="inline-code">default</code> <code className="inline-code">primary</code> <code className="inline-code">inverted</code>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</Container>
		);
	}
});

module.exports = Buttons;

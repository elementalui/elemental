const React = require('react');
const DemoBox = require('../components/DemoBox');
const ExampleSource = require('../components/ExampleSource');
const { Alert, Card, Col, Container, FormField, FormInput, InputGroup, Pagination, Pill, Row, Table } = require('elemental');

const MAX_PAGESIZE = 100;
const MAX_RECORDS = 1000;

var Misc = React.createClass({
	displayName: 'VIEW_Misc',

	getInitialState () {
		return {
			currentPage: 2,
			pageSize: 25,
			plural: 'Potatoes',
			singular: 'Potato',
			total: 123,
			limit: 5
		};
	},

	handlePaginationValueChange (e) {
		let newState = {};
		var fieldName = e.target.name;
		var newValue = e.target.value;

		if (fieldName === 'currentPage' || fieldName === 'pageSize' || fieldName === 'total' || fieldName === 'limit') {
			newValue = parseInt(newValue);

			if (isNaN(newValue) || newValue < 0) {
				newValue = 0;
			}
			if (fieldName !== 'total' && newValue < 1) {
				newValue = 1;
			}
			if (fieldName === 'pageSize' && newValue > MAX_PAGESIZE) {
				newValue = MAX_PAGESIZE;
			}
			if (fieldName === 'total' && newValue > MAX_RECORDS) {
				newValue = MAX_RECORDS;
			}
		}

		newState[fieldName] = newValue;
		this.setState(newState);
	},

	handlePageSelect (page) {
		this.setState({
			currentPage: page
		});
	},

	render() {
		return (
			<Container maxWidth={800} className="demo-container">
				<h1>Miscellaneous</h1>
				<p className="lead">Some components march to the beat of their own drum&hellip;</p>

				<h2>Alerts</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Alert type="info"><strong>Info:</strong> Alerts can contain <a href="/misc">Anchor Tags</a></Alert>
						<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
						<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
						<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
					</div>
					<ExampleSource>
						{`
							<Alert type="info"><strong>Info:</strong> Alerts can contain <a href="/misc">Anchor Tags</a></Alert>
							<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
							<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
							<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
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
								<td className="usage-table__prop">children</td>
								<td className="usage-table__type">node</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Required</td>
							</tr>
							<tr>
								<td className="usage-table__prop">type</td>
								<td className="usage-table__type">enum</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Required.
									One of:
									<br />
									<code className="inline-code">danger</code> <code className="inline-code">info</code> <code className="inline-code">primary</code> <code className="inline-code">success</code> <code className="inline-code">warning</code>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<h2>Cards</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Card>Hi there, I'm a card! I'm pretty simple, but with a little imagination I can be really awesome :)</Card>
						<Row>
							<Col xs="1/3"><Card>Use</Card></Col>
							<Col xs="1/3"><Card>me</Card></Col>
							<Col xs="1/3"><Card>in</Card></Col>
						</Row>
						<Row>
							<Col xs="1/2"><Card>a</Card></Col>
							<Col xs="1/2"><Card>grid</Card></Col>
						</Row>
						<Card>
							<h3 style={{ marginTop: 0 }}>Alternatively</h3>
							<DemoBox style={{ color: '#999', paddingBottom: 40, paddingTop: 40 }}>
								<span className="mega-octicon octicon-file-media" />
							</DemoBox>
							<div>As part of more complete and sophisticated component. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis maximus nisi, non feugiat ipsum. Vestibulum condimentum massa nec tempus tincidunt.</div>
						</Card>
					</div>
					<ExampleSource>
						{`
							<Card>Hi there, I'm a card! I'm pretty simple, but with a little imagination I can be really awesome :)</Card>
							<Row>
								<Col><Card>Use</Card></Col>
								<Col><Card>me</Card></Col>
								<Col><Card>in</Card></Col>
								<Col><Card>a</Card></Col>
								<Col><Card>grid</Card></Col>
							</Row>
							<Card>...</Card>
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
								<td className="usage-table__prop">children</td>
								<td className="usage-table__type">node</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Required</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<h2>Pagination</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Pagination
							currentPage={this.state.currentPage}
							onPageSelect={this.handlePageSelect}
							pageSize={this.state.pageSize}
							plural={this.state.plural}
							singular={this.state.singular}
							style={{ lineHeight: '34px', marginBottom: 0, minHeight: 34 }}
							total={this.state.total}
							limit={this.state.limit}
							/>
					</div>
					<ExampleSource>
						{`
							<Pagination
								currentPage={this.state.currentPage}
								onPageSelect={this.handlePageSelect}
								pageSize={this.state.pageSize}
								plural={this.state.plural}
								singular={this.state.singular}
								total={this.state.total}
								limit={this.state.limit}
								/>
						`}
					</ExampleSource>
				</div>
				<InputGroup>
					<InputGroup.Section grow>
						<FormField label="Current page">
							<FormInput name="currentPage" type="number" value={this.state.currentPage} onChange={this.handlePaginationValueChange} placeholder="Current page" />
						</FormField>
					</InputGroup.Section>
					<InputGroup.Section grow>
						<FormField label="Page size">
							<FormInput name="pageSize" type="number" value={this.state.pageSize} onChange={this.handlePaginationValueChange} placeholder="Page size" />
						</FormField>
					</InputGroup.Section>
					<InputGroup.Section grow>
						<FormField label="Plural">
							<FormInput name="plural" type="text" value={this.state.plural} onChange={this.handlePaginationValueChange} placeholder="Plural" />
						</FormField>
					</InputGroup.Section>
					<InputGroup.Section grow>
						<FormField label="Singular">
							<FormInput name="singular" type="text" value={this.state.singular} onChange={this.handlePaginationValueChange} placeholder="Singular" />
						</FormField>
					</InputGroup.Section>
					<InputGroup.Section grow>
						<FormField label="Total records">
							<FormInput name="total" type="number" value={this.state.total} onChange={this.handlePaginationValueChange} placeholder="Total records" />
						</FormField>
					</InputGroup.Section>
					<InputGroup.Section grow>
						<FormField label="Limit">
							<FormInput name="limit" type="number" value={this.state.limit} onChange={this.handlePaginationValueChange} placeholder="Limit" />
						</FormField>
					</InputGroup.Section>
				</InputGroup>
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
								<td className="usage-table__prop">currentPage</td>
								<td className="usage-table__type">number</td>
								<td className="usage-table__default">none&nbsp;(required)</td>
								<td className="usage-table__description">The current page number.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">onPageSelect</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">none&nbsp;(required)</td>
								<td className="usage-table__description">How you want to handle page selection by the user.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">pageSize</td>
								<td className="usage-table__type">number</td>
								<td className="usage-table__default">none&nbsp;(required)</td>
								<td className="usage-table__description">The number of records to display per page.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">plural</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">none</td>
								<td className="usage-table__description">Displayed when there are no records "No Items", or the total number of records is less than the records per page "Showing 10 Items".</td>
							</tr>
							<tr>
								<td className="usage-table__prop">singular</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">none</td>
								<td className="usage-table__description">Displayed when there is a single record "Showing 1 Item".</td>
							</tr>
							<tr>
								<td className="usage-table__prop">total</td>
								<td className="usage-table__type">number</td>
								<td className="usage-table__default">none&nbsp;(required)</td>
								<td className="usage-table__description">The total number of records.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">limit</td>
								<td className="usage-table__type">number</td>
								<td className="usage-table__default">none</td>
								<td className="usage-table__description">The number of pages to show in pagination.</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<h2>Pills</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Pill label="Create" type="success-inverted" />
						<Pill label="First Pill" type="primary" onClear={() => {}} />
						<Pill label="Second Pill" type="primary" onClear={() => {}} />
						<Pill label="Third Pill" type="primary" onClear={() => {}} />
						<Pill label="Clear All" />
					</div>
					<ExampleSource>
						{`
							<Pill label="Create" type="success-inverted" />
							<Pill label="First Pill" type="primary" onClear={this.handleClear} />
							<Pill label="Second Pill" type="primary" onClear={this.handleClear} />
							<Pill label="Third Pill" type="primary" onClear={this.handleClear} />
							<Pill label="Clear All" />
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
								<td className="usage-table__prop">label</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Required. The tag label</td>
							</tr>
							<tr>
								<td className="usage-table__prop">onClear</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Handle clear events on the pill. The clear button is rendered when this is supplied</td>
							</tr>
							<tr>
								<td className="usage-table__prop">type</td>
								<td className="usage-table__type">enum</td>
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
					</Table>
				</div>
			</Container>
		);
	}
});

module.exports = Misc;

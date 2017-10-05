/* eslint no-script-url: 0 */

const React = require('react');
const classNames = require('classnames');
const createReactClass = require('create-react-class');

const ExampleSource = require('../components/ExampleSource');
const { Container, Table } = require('elemental');

const USERS = require('../data/users');
const TABLE_HEADERS = ['', 'User', 'Age', 'Gender Identity'];

var CSSExamples = createReactClass({

	getInitialState() {
		return {
			allChecked: false,
			selectedRows: {}
		};
	},

	toggleAllRows() {
		var selectedRows = {};

		if (!this.state.allChecked) {
			for (var i = 0; i < USERS.length; i++) {
				selectedRows[i] = true;
			}
		}

		this.setState({
			selectedRows: selectedRows,
			allChecked: !this.state.allChecked
		});
	},

	handleChange(e) {
		var selectedRows = this.state.selectedRows;
		if (e.target.value in selectedRows) {
			delete selectedRows[e.target.value];
		} else {
			selectedRows[e.target.value] = true;
		}
		this.setState({
			selectedRows: selectedRows
		});
	},
	render() {
		var self = this;

		var tableHeaderCols = TABLE_HEADERS.map(function(thead, i) {
			var row = !i ? (
				<th key={'header-' + i}>
					<label title="Toggle all users">
						<input type="checkbox" onChange={self.toggleAllRows} />
					</label>
				</th>
			) : (
				<th key={'header-' + i}>{thead}</th>
			);
			return row;
		});

		var tableRows = USERS.map(function(user, i) {
			var checked = i in self.state.selectedRows;
			var rowClass = classNames({
				'row-selected': checked
			});

			return (
				<tr key={'row-' + i} className={rowClass}>
					<td>
						<label className="table-checkbox-label">
							<input id={'checkbox-' + i} value={i} onChange={self.handleChange} checked={checked} type="checkbox" name="users" />
						</label>
					</td>
					<td>
						<a href="javascript:;">{user.name}</a>
					</td>
					<td>{user.age}</td>
					<td>{user.gender}</td>
				</tr>
			);
		});

		return (
			<Container maxWidth={800} className="demo-container">
				<h1>CSS</h1>

				<h2>Typography</h2>
				<div className="code-example">
					<div className="code-example__example">
						<h1>h.1 Elemental heading</h1>
						<h2>h.2 Elemental heading</h2>
						<h3>h.3 Elemental heading</h3>
						<h4>h.4 Elemental heading</h4>
						<h5>h.5 Elemental heading</h5>
						<h6>h.6 Elemental heading</h6>
						<hr />
						<div className="lead">This is a page lead, it introduces the proceeding content.</div>
					</div>
					<ExampleSource>
						{`
							<h1>h.1 Elemental heading</h1>
							<h2>h.2 Elemental heading</h2>
							<h3>h.3 Elemental heading</h3>
							<h4>h.4 Elemental heading</h4>
							<h5>h.5 Elemental heading</h5>
							<h6>h.6 Elemental heading</h6>
							<hr />
							<div className="lead">This is a page lead, it introduces the proceeding content.</div>
						`}
					</ExampleSource>
				</div>

				<h2>Tables</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Table>
							<colgroup>
								<col width="50" />
								<col width="" />
								<col width="10%" />
								<col width="10%" />
							</colgroup>
							<thead>
								<tr>
									{tableHeaderCols}
								</tr>
							</thead>
							<tbody>
								{tableRows}
							</tbody>
						</Table>
					</div>
					<ExampleSource>
						{`
							<Table>
								<colgroup>
									<col width="50" />
									<col width="" />
									<col width="10%" />
									<col width="20%" />
								</colgroup>
								<thead>
									<tr>
										<th>
											<label>
												<input type="checkbox" />
											</label>
										</th>
										<th>User</th>
										<th>Age</th>
										<th>Gender Identity</th>
									</tr>
									{...}
								</thead>
								<tbody>
									<tr>
										<td>
											<label>
												<input type="checkbox" />
											</label>
										</td>
										<td>
											<a href="javascript:;">Hanna Villarreal</a>
										</td>
										<td>39</td>
										<td>Female</td>
									</tr>
									{...}
								</tbody>
							</Table>
						`}
					</ExampleSource>
				</div>
			</Container>
		);
	}
});

module.exports = CSSExamples;

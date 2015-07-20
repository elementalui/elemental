/* eslint no-script-url: 0 */

const React = require('react/addons');
const classNames = require('classnames');
const moment = require('moment');

const ExampleSource = require('../components/ExampleSource');
const { Table } = require('elemental');

const USERS = require('../data/users');
const TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

var CSSExamples = React.createClass({

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
			var dob = moment(user.dob, 'MMM DD, YYYY');
			var userAge = moment().diff(dob, 'years');
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
					<td>{userAge}</td>
					<td>{user.gender.substr(0, 1).toUpperCase()}</td>
				</tr>
			);
		});

		return (
			<div className="demo-container container">
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

				<h2>Grid</h2>
				<p className="lead">Uses the standard Bootstrap grid which is a 12 column responsive layout, with a 20px gutter.</p>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Three equal columns</div>
						<div className="row">
							<div className="col-sm-4">
								<div className="demo-box u-text-center">.col-sm-4</div>
							</div>
							<div className="col-sm-4">
								<div className="demo-box u-text-center">.col-sm-4</div>
							</div>
							<div className="col-sm-4">
								<div className="demo-box u-text-center">.col-sm-4</div>
							</div>
						</div>
					</div>
					<ExampleSource>
						{`
							<div className="row">
								<div className="col-sm-4">
									<div className="demo-box u-text-center">.col-sm-4</div>
								</div>
								<div className="col-sm-4">
									<div className="demo-box u-text-center">.col-sm-4</div>
								</div>
								<div className="col-sm-4">
									<div className="demo-box u-text-center">.col-sm-4</div>
								</div>
							</div>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Three unequal columns</div>
						<div className="row">
							<div className="col-sm-3">
								<div className="demo-box u-text-center">.col-sm-3</div>
							</div>
							<div className="col-sm-6">
								<div className="demo-box u-text-center">.col-sm-6</div>
							</div>
							<div className="col-sm-3">
								<div className="demo-box u-text-center">.col-sm-3</div>
							</div>
						</div>
					</div>
					<ExampleSource>
						{`
							<div className="row">
								<div className="col-sm-3">
									<div className="demo-box u-text-center">.col-sm-3</div>
								</div>
								<div className="col-sm-6">
									<div className="demo-box u-text-center">.col-sm-6</div>
								</div>
								<div className="col-sm-3">
									<div className="demo-box u-text-center">.col-sm-3</div>
								</div>
							</div>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Two unequal columns</div>
						<div className="row">
							<div className="col-sm-8">
								<div className="demo-box u-text-center">.col-sm-8</div>
							</div>
							<div className="col-sm-4">
								<div className="demo-box u-text-center">.col-sm-4</div>
							</div>
						</div>
					</div>
					<ExampleSource>
						{`
							<div className="row">
								<div className="col-sm-8">
									<div className="demo-box u-text-center">.col-sm-8</div>
								</div>
								<div className="col-sm-4">
									<div className="demo-box u-text-center">.col-sm-4</div>
								</div>
							</div>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Columns on a small device</div>
						<div className="row">
							<div className="col-xs-4">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">4</span>
									<span className="hidden-xs">.col-xs-4</span>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">4</span>
									<span className="hidden-xs">.col-xs-4</span>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">4</span>
									<span className="hidden-xs">.col-xs-4</span>
								</div>
							</div>
							<div className="col-xs-8">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">8</span>
									<span className="hidden-xs">.col-xs-8</span>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">4</span>
									<span className="hidden-xs">.col-xs-4</span>
								</div>
							</div>
							<div className="col-xs-3">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">3</span>
									<span className="hidden-xs">.col-xs-3</span>
								</div>
							</div>
							<div className="col-xs-6">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">6</span>
									<span className="hidden-xs">.col-xs-6</span>
								</div>
							</div>
							<div className="col-xs-3">
								<div className="demo-box u-text-center">
									<span className="visible-xs-inline">3</span>
									<span className="hidden-xs">.col-xs-3</span>
								</div>
							</div>
						</div>
					</div>
					<ExampleSource>
						{`
							<div className="row">
								<div className="col-xs-4">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">4</span>
										<span className="hidden-xs">.col-xs-4</span>
									</div>
								</div>
								<div className="col-xs-4">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">4</span>
										<span className="hidden-xs">.col-xs-4</span>
									</div>
								</div>
								<div className="col-xs-4">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">4</span>
										<span className="hidden-xs">.col-xs-4</span>
									</div>
								</div>
								<div className="col-xs-8">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">8</span>
										<span className="hidden-xs">.col-xs-8</span>
									</div>
								</div>
								<div className="col-xs-4">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">4</span>
										<span className="hidden-xs">.col-xs-4</span>
									</div>
								</div>
								<div className="col-xs-3">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">3</span>
										<span className="hidden-xs">.col-xs-3</span>
									</div>
								</div>
								<div className="col-xs-6">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">6</span>
										<span className="hidden-xs">.col-xs-6</span>
									</div>
								</div>
								<div className="col-xs-3">
									<div className="demo-box u-text-center">
										<span className="visible-xs-inline">3</span>
										<span className="hidden-xs">.col-xs-3</span>
									</div>
								</div>
							</div>
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
								{tableHeaderCols}
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
									<col width="10%" />
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
										<th>Gender</th>
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
										<td>F</td>
									</tr>
									{...}
								</tbody>
							</Table>
						`}
					</ExampleSource>
				</div>
			</div>
		);
	}
});

module.exports = CSSExamples;

/* eslint no-script-url: 0 */

var React = require('react/addons');
var classNames = require('classnames');
var moment = require('moment');

var Alert = require('elemental').Alert;

var USERS = require('../data/users');
var TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

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
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;h1&gt;h.1 Elemental heading&lt;/h1&gt;
							&lt;h2&gt;h.2 Elemental heading&lt;/h2&gt;
							&lt;h3&gt;h.3 Elemental heading&lt;/h3&gt;
							&lt;h4&gt;h.4 Elemental heading&lt;/h4&gt;
							&lt;h5&gt;h.5 Elemental heading&lt;/h5&gt;
							&lt;h6&gt;h.6 Elemental heading&lt;/h6&gt;
							&lt;hr /&gt;
							&lt;div className="lead"&gt;This is a page lead, it introduces the proceeding content.&lt;/div&gt;
						</code>
					</pre>
				</div>

				<h2>Alerts</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Alert type="info"><strong>Info:</strong> This could be something helpful, better read it just to make sure.</Alert>
						<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
						<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>
						<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;Alert type="info"&gt;...&lt;/Alert&gt;
							&lt;Alert type="success"&gt;...&lt;/Alert&gt;
							&lt;Alert type="warning"&gt;...&lt;/Alert&gt;
							&lt;Alert type="danger"&gt;...&lt;/Alert&gt;
						</code>
					</pre>
				</div>

				<h2>Tables</h2>
				<div className="code-example">
					<div className="code-example__example">
						<table className="table">
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
						</table>
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;table className="table"&gt;
								&lt;colgroup&gt;
									&lt;col width="50" /&gt;
									&lt;col width="" /&gt;
									&lt;col width="10%" /&gt;
									&lt;col width="10%" /&gt;
								&lt;/colgroup&gt;
								&lt;thead&gt;
									&lt;tr&gt;
										&lt;th&gt;
											&lt;label&gt;
												&lt;input type="checkbox" /&gt;
											&lt;/label&gt;
										&lt;/th&gt;
										&lt;th&gt;User&lt;/th&gt;
										&lt;th&gt;Age&lt;/th&gt;
										&lt;th&gt;Gender&lt;/th&gt;
									&lt;/tr&gt;
									&#123;...&#125;
								&lt;/thead&gt;
								&lt;tbody&gt;
									&lt;tr&gt;
										&lt;td&gt;
											&lt;label&gt;
												&lt;input type="checkbox" /&gt;
											&lt;/label&gt;
										&lt;/td&gt;
										&lt;td&gt;
											&lt;a href="javascript:;"&gt;Hanna Villarreal&lt;/a&gt;
										&lt;/td&gt;
										&lt;td&gt;39&lt;/td&gt;
										&lt;td&gt;F&lt;/td&gt;
									&lt;/tr&gt;
									&#123;...&#125;
								&lt;/tbody&gt;
							&lt;/table&gt;
						</code>
					</pre>
				</div>
			</div>
		);
	}
});

module.exports = CSSExamples;

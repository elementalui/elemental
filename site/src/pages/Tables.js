var React = require('react/addons');
var classNames = require('classnames');
var moment = require('moment');

var USERS = require('../data/users');

var Tables = React.createClass({
	displayName: 'VIEW_Tables',

	getInitialState() {
		return {
			allChecked: false
		};
	},

	toggleAllRows() {
		this.setState({ allChecked: !this.state.allChecked });
	},

	render() {
		var self = this;

		var rows = USERS.map(function(user, i) {
			var rowClass = classNames({ 'row-selected': false });
			var userAge = moment().diff(user.dob, 'years');;

			return (
				<tr className={rowClass}>
					<td>
						<label className="table-checkbox-label">
							<input checked={self.state.allChecked} type="checkbox" name="customers" className="table-checkbox" />
						</label>
					</td>
					<td>
						<a href="javascript:;" className="customer-item">{user.name}</a>
					</td>
					<td>{userAge}</td>
					<td>{user.gender}</td>
				</tr>
			);
		});

		return (
			<div className="page-container">
				<h1>Tables</h1>
				<table className="table">
					<colgroup>
						<col width="50" />
						<col />
						<col width="120" />
						<col width="120" />
					</colgroup>
					<thead>
						<tr>
							<th>
								<label title="Toggle all customers" className="table-checkbox-label">
									<input type="checkbox" className="table-checkbox" onChange={this.toggleAllRows} />
								</label>
							</th>
							<th>
								<a href="javascript:;" title="Sort by User (asc)" className="th-sort th-sort--desc">
									User
									<span className="th-sort__icon"/ >
								</a>
							</th>
							<th>
								<a href="javascript:;" title="Sort by Age (desc)" className="th-sort">
									Age
									<span className="th-sort__icon"/ >
								</a>
							</th>
							<th>Gender</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Tables;

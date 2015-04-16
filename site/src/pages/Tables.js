var React = require('react/addons');
var classNames = require('classnames');
var moment = require('moment');
var _ = require('underscore');

var USERS = require('../data/users');

var Tables = React.createClass({
	displayName: 'VIEW_Tables',

	getInitialState() {
		return {
			allChecked: false,
			selectedRows: []
		};
	},

	toggleAllRows() {
		// console.log('getCheckboxes', this.getCheckboxes());

		// var totalRows = this.getCheckboxes().length;
		var rowsToCheck = [];
		var selectedRows = [];

		for (var i = 0; i < 20; i++) {
			rowsToCheck.push(i)
		}

		console.log(rowsToCheck);

		if (!this.state.allChecked) {
			selectedRows = rowsToCheck;
		}

		this.setState({
			selectedRows: selectedRows,
			allChecked: !this.state.allChecked
		});
	},

	handleChange(checkbox) {
		var newRows = this.state.selectedRows;

		if (_.contains(newRows, checkbox)) {
			newRows = _.without(newRows, checkbox);
		} else {
			newRows.push(checkbox);
		}


		this.setState({
			selectedRows: newRows
		});
	},

	render() {
		var self = this;
		console.log(this.state.selectedRows);

		var rows = USERS.map(function(user, i) {
			var userAge = moment().diff(user.dob, 'years');
			var checked = _.contains(self.state.selectedRows, i);
			var rowClass = classNames({
				'row-selected': checked
			});

			return (
				<tr key={'row-' + i} className={rowClass}>
					<td>
						<label className="table-checkbox-label">
							<input id={'checkbox-' + i} onChange={self.handleChange.bind(this, i)} checked={checked} type="checkbox" name="customers" className="table-checkbox" />
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
			<div className="container">
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

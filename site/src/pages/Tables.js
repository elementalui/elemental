var React = require('react/addons');
var classNames = require('classnames');
var moment = require('moment');
var _ = require('underscore');

var USERS = require('../data/users');
var TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

var Table = require('elemental').Table;

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

		var tableHeaderCols = TABLE_HEADERS.map(function(thead, i) {
			var row = !i ? (
				<th>
					<label title="Toggle all customers" className="table-checkbox-label">
						<input type="checkbox" className="table-checkbox" onChange={self.toggleAllRows} />
					</label>
				</th>
			) : (
				<th>
					<a href="javascript:;" title="Sort by {thead} (asc)" className="th-sort th-sort--desc">
						{thead}
						<span className="th-sort__icon"/ >
					</a>
				</th>
			);
			return row;
		});

		var tableRows = USERS.map(function(user, i) {
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
		var tableCols = ['50', '', '120', '120'];

		return (
			<div className="demo-container container">
				<h1>Tables</h1>
				<Table cols={tableCols} rows={tableRows} headers={tableHeaderCols} />
			</div>
		);
	}
});

module.exports = Tables;

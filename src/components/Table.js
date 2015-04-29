var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'Table',
	propTypes: {
		cols: React.PropTypes.array,
		rows: React.PropTypes.array,
		headers: React.PropTypes.array,
		className: React.PropTypes.string
	},
	render() {
		// classes
		var componentClass = classNames(
			'table',
			this.props.className
		);

		// props
		var props = _.omit(this.props, ['cols', 'rows', 'headers', 'className']);

		// cols
		var tableCols;
		if (this.props.cols) {
			var cols = this.props.cols.map(function(col, i) {
				return (
					<col key={'col' + i} width={col} />
				);
			});
		}
		var tableCols = this.props.cols ? <colgroup>{cols}</colgroup> : null;
		
		return (
			<table {...props} className={componentClass}>
				{tableCols}
				<thead>
					<tr>
						{this.props.headers}
					</tr>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
			</table>
		);
	}
});
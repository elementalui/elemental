'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	render: function render() {
		// classes
		var componentClass = classNames('table', this.props.className);

		// props
		var props = _.omit(this.props, ['cols', 'rows', 'headers', 'className']);

		// cols
		var tableCols;
		if (this.props.cols) {
			var cols = this.props.cols.map(function (col, i) {
				return React.createElement('col', { key: 'col' + i, width: col });
			});
		}
		var tableCols = this.props.cols ? React.createElement(
			'colgroup',
			null,
			cols
		) : null;

		return React.createElement(
			'table',
			_extends({}, props, { className: componentClass }),
			tableCols,
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					this.props.headers
				)
			),
			React.createElement(
				'tbody',
				null,
				this.props.rows
			)
		);
	}
});
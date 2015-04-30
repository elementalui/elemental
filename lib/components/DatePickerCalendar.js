'use strict';

var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

var DatePickerHeader = require('./DatePickerHeader');

module.exports = React.createClass({
	displayName: 'DatePickerHeader',
	propTypes: {
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		selectedDate: React.PropTypes.string,
		weekStartsOn: React.PropTypes.string,
		yearRange: React.PropTypes.arrayOf(React.PropTypes.number)
	},
	getDefaultProps: function getDefaultProps() {
		var yearRange = [];
		yearRange.push(parseInt(moment().subtract(10, 'years').format('YYYY')));
		yearRange.push(parseInt(moment().add(10, 'years').format('YYYY')));

		return {
			weekStartsOn: 'Monday',
			yearRange: yearRange
		};
	},
	getInitialState: function getInitialState() {
		return {
			selectedDate: this.props.selectedDate
		};
	},

	handleDaySelection: function handleDaySelection(day) {
		this.setState({ selectedDate: day });
	},

	render: function render() {
		console.log('calendar selected day', this.props.selectedDate);
		var self = this;
		var firstDayOfMonth = moment().startOf('month').format('D');
		var lastDayOfMonth = moment().endOf('month').format('D');
		var currentDayOfMonth = moment().format('D');

		var calendarClass = classNames('date-picker-calendar', {
			'date-picker-calendar--start': this.props.startDate,
			'date-picker-calendar--end': this.props.endDate
		});

		// variables
		var currentMonth = moment().format('MMMM');
		var currentYear = moment().format('YYYY');
		var years = [];
		var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var daysOfTheMonth = [];
		var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		for (var i = firstDayOfMonth; i < lastDayOfMonth; i++) {
			daysOfTheMonth.push(i);
		}
		for (var i = this.props.yearRange[0]; i < this.props.yearRange[1]; i++) {
			years.push(i);
		}

		// elements

		var weekDays = daysOfTheWeek.map(function (day, i) {
			return React.createElement(
				'abbr',
				{ key: 'day' + i, className: 'date-picker-calendar-legend-day', title: day },
				day.slice(0, 1)
			);
		});
		var monthDays = daysOfTheMonth.map(function (day) {
			var dayClass = classNames('date-picker-calendar-month-day', {
				'current-day': day == currentDayOfMonth,
				'selected-day': day == self.state.selectedDate,
				'before-selected-day': self.state.selectedDate && day < self.state.selectedDate,
				'after-selected-day': self.state.selectedDate && day > self.state.selectedDate
			});
			return React.createElement(
				'button',
				{ key: 'day' + day, onClick: self.handleDaySelection.bind(this, day), className: dayClass },
				day
			);
		});

		var titleMonths = months.map(function (month, i) {
			return React.createElement(
				'option',
				{ key: 'month' + i, value: month },
				month.slice(0, 3)
			);
		});
		var titleYears = years.map(function (year, i) {
			return React.createElement(
				'option',
				{ key: 'year' + i, value: year },
				year
			);
		});

		var calendar = React.createElement(
			'div',
			{ className: calendarClass },
			!this.props.isHeaderless && React.createElement(DatePickerHeader, { selectedDate: this.state.selectedDate, isExpanded: this.props.isExpanded }),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-toolbar' },
				React.createElement(
					'button',
					{ className: 'date-picker-calendar-toolbar-button-prev' },
					'Previous Month'
				),
				React.createElement(
					'select',
					{ className: 'date-picker-calendar-toolbar-select', defaultValue: currentMonth },
					titleMonths
				),
				React.createElement(
					'select',
					{ className: 'date-picker-calendar-toolbar-select', defaultValue: currentYear },
					titleYears
				),
				React.createElement(
					'button',
					{ className: 'date-picker-calendar-toolbar-button-next' },
					'Next Month'
				)
			),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-legend' },
				weekDays
			),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-month' },
				monthDays
			)
		);

		return calendar;
	}
});
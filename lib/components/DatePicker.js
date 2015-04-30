'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = require('moment');
var classNames = require('classnames');

var DatePickerCalendar = require('./DatePickerCalendar');

var DEFAULT_RANGES = [{ value: moment().subtract(1, 'weeks'), label: 'Past week' }, { value: moment().subtract(1, 'months'), label: 'Past month' }, { value: moment().subtract(3, 'months'), label: 'Past 3 months' }, { value: moment().subtract(6, 'months'), label: 'Past 6 months' }, { value: moment().subtract(12, 'months'), label: 'Past 12 months' }];

module.exports = React.createClass({
	displayName: 'DatePicker',
	propTypes: {
		isOpen: React.PropTypes.bool,
		isMulti: React.PropTypes.bool,
		showPredefinedRanges: React.PropTypes.bool,
		predefinedRangeOptions: React.PropTypes.array,
		backdropClosesDatePicker: React.PropTypes.bool,

		isExpanded: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,

		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState: function getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	toggleDropdown: function toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	render: function render() {
		var self = this;

		// ranges

		var ranges;
		if (this.props.showPredefinedRanges) {
			var rangeItems = this.props.predefinedRangeOptions.map(function (r, i) {
				function action() {
					self.setState({
						startDate: moment().format('D'),
						endDate: r.value.format('D')
					});
					console.log(moment().format() + ' to ' + r.value.format());
				};
				return React.createElement(
					'button',
					{ key: 'range-button' + i, onClick: action, className: 'date-picker-range' },
					r.label
				);
			});

			ranges = React.createElement(
				'div',
				{ className: 'date-picker-ranges' },
				React.createElement(
					'div',
					{ className: 'date-picker-ranges-header' },
					'Select:'
				),
				React.createElement(
					'div',
					{ className: 'date-picker-ranges-body' },
					rangeItems
				)
			);
		}

		// classes

		var componentClass = classNames('date-picker', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.className);

		// build the components

		var datePickerBackground = this.props.isOpen ? React.createElement('div', { className: 'modal-backdrop date-picker-backdrop', onClick: this.props.backdropClosesDatePicker ? this.props.onChange : null }) : null;
		var datePickerDialog = this.props.isOpen ? React.createElement(
			'div',
			{ className: 'modal-dialog date-picker-dialog' },
			React.createElement(
				'div',
				{ className: 'date-picker-content' },
				React.createElement(
					'div',
					{ className: 'date-picker-body' },
					React.createElement(DatePickerCalendar, { selectedDate: this.state.startDate, isHeaderless: this.props.isHeaderless, isInstant: this.props.isInstant }),
					this.props.isMulti && React.createElement(DatePickerCalendar, { selectedDate: this.state.endDate, isHeaderless: this.props.isHeaderless })
				),
				ranges,
				!this.props.isInstant && React.createElement(
					'div',
					{ className: 'date-picker-footer' },
					React.createElement(
						'button',
						{ onClick: this.props.onChange, className: 'date-picker-footer-button primary' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.props.onChange, className: 'date-picker-footer-button' },
						'Cancel'
					)
				)
			)
		) : null;

		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-dialog', component: 'div' },
				datePickerDialog
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-background', component: 'div' },
				datePickerBackground
			)
		);
	}
});
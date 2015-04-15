var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = require('moment');
var classNames = require('classnames');

var DatePickerCalendar = require('./DatePickerCalendar');

var DEFAULT_RANGES = [
	{ value: moment().subtract(1, 'weeks'),   label: 'Past week' },
	{ value: moment().subtract(1, 'months'),  label: 'Past month' },
	{ value: moment().subtract(3, 'months'),  label: 'Past 3 months' },
	{ value: moment().subtract(6, 'months'),  label: 'Past 6 months' },
	{ value: moment().subtract(12, 'months'), label: 'Past 12 months' }
];

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

		customClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	render() {
		var self = this;
		
		// ranges

		var ranges;
		if (this.props.showPredefinedRanges) {
			var rangeItems = this.props.predefinedRangeOptions.map(function(r,i) {
				function action() {
					self.setState({
						startDate: moment().format('D'),
						endDate: r.value.format('D')
					});
					console.log(moment().format() + ' to ' + r.value.format());
				};
				return <button key={'range-button' + i} onClick={action} className="date-picker-range">{r.label}</button>;
			});

			ranges = (
				<div className="date-picker-ranges">
					<div className="date-picker-ranges-header">Select:</div>
					<div className="date-picker-ranges-body">
						{rangeItems}
					</div>
				</div>
			);
		}
		
		
		// classes

		var componentClass = classNames('date-picker', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.customClass);

		
		// build the components

		var datePickerBackground = this.props.isOpen ? <div className="modal-backdrop date-picker-backdrop" onClick={this.props.backdropClosesDatePicker ? this.props.onChange : null} /> : null;
		var datePickerDialog = this.props.isOpen ? <div className="modal-dialog date-picker-dialog"><div className="date-picker-content">
			<div className="date-picker-body">
				<DatePickerCalendar selectedDate={this.state.startDate} isHeaderless={this.props.isHeaderless} isInstant={this.props.isInstant} />
				{this.props.isMulti && <DatePickerCalendar selectedDate={this.state.endDate} isHeaderless={this.props.isHeaderless} />}
			</div>
			{ranges}
			{!this.props.isInstant && <div className="date-picker-footer">
				<button onClick={this.props.onChange} className="date-picker-footer-button primary">Confirm</button>
				<button onClick={this.props.onChange} className="date-picker-footer-button">Cancel</button>
			</div>}
		</div></div> : null;
		
		return (
			<div className={componentClass}>
				<ReactCSSTransitionGroup transitionName="modal-dialog" component="div">
					{datePickerDialog}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="modal-background" component="div">
					{datePickerBackground}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

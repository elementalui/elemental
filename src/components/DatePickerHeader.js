var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'DatePickerHeader',
	propTypes: {
		expanded: React.PropTypes.bool,
		date: React.PropTypes.object
	},
	render() {
		// helpers
		var date = moment(this.props.date);

		// classes
		var componentClass = classNames('date-picker-calendar-header', {
			'date-picker-calendar-header--expanded': this.props.expanded,
			'date-picker-calendar-header--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});
		
		// elements
		
		var header = this.props.expanded ? (<div className={componentClass}>
				<span className="date-picker-calendar-header-dow">{date.format('dddd')}</span>
				<span className="date-picker-calendar-header-month">{date.format('MMMM')}</span>
				<span className="date-picker-calendar-header-day">{date.format('D')}</span>
				<span className="date-picker-calendar-header-year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="date-picker-calendar-header-dow">{date.format('dddd')}</span>
				<span className="date-picker-calendar-header-day">{date.format('Do')}</span>
				<span className="date-picker-calendar-header-month">{date.format('MMMM')}</span>
				<span className="date-picker-calendar-header-year">{date.format('YYYY')}</span>
			</div>);

		if (this.props.date) {
			header = this.props.expanded ? (<div className={componentClass}>
				<span className="date-picker-calendar-header-dow">{date.format('dddd')}</span>
				<span className="date-picker-calendar-header-month">{date.format('MMMM')}</span>
				<span className="date-picker-calendar-header-day">{date.format('D')}</span>
				<span className="date-picker-calendar-header-year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="date-picker-calendar-header-dow">{date.format('dddd')}</span>
				<span className="date-picker-calendar-header-day">{date.format('Do')}</span>
				<span className="date-picker-calendar-header-month">{date.format('MMMM')}</span>
				<span className="date-picker-calendar-header-year">{date.format('YYYY')}</span>
			</div>);
		}
		
		return header;
	}
});

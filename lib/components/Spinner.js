'use strict';

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
		type: React.PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		var componentClass = classNames('Spinner', 'Spinner--' + this.props.type, 'Spinner--' + this.props.size, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--first' }),
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--second' }),
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--third' })
		);
	}
});
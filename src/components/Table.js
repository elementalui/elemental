import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

export default createReactClass({
	displayName: 'Table',

	propTypes: {
		children: PropTypes.any,
		className: PropTypes.string,
	},

	render () {
		// classes
		var className = classNames(
			'Table',
			this.props.className
		);

		// render table element
		return (
			<table {...this.props} className={className} />
		);
	},
});

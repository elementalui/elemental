import classNames from 'classnames';
import React from 'react';

export default React.createClass({
	displayName: 'Table',

	propTypes: {
		children: React.PropTypes.any,
		className: React.PropTypes.string
	},

	render() {
		// classes
		var className = classNames(
			'Table',
			this.props.className
		);

		// render table element
		return (
			<table {...this.props} className={className} />
		);
	}
});

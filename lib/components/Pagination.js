'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		pagination: React.PropTypes.shape({
			currentPage: React.PropTypes.number,
			first: React.PropTypes.number,
			last: React.PropTypes.number,
			next: React.PropTypes.bool,
			pages: React.PropTypes.array,
			previous: React.PropTypes.bool,
			total: React.PropTypes.number,
			totalPages: React.PropTypes.number
		})
	},
	renderCount: function renderCount() {
		var count = this.props.pagination;
		return React.createElement(
			'div',
			{ className: 'Pagination__count' },
			'Showing ',
			count.first,
			' to ',
			count.last,
			' of ',
			count.total
		);
	},
	renderList: function renderList() {
		if (!this.props.pagination.pages) return 'No pages...';

		var self = this;

		var pages = this.props.pagination.pages.map(function (page) {
			var className = classNames('Pagination__list__item', {
				'is-selected': self.props.pagination.currentPage === page
			});
			return React.createElement(
				'button',
				{ key: 'page_' + page, className: className, onClick: self.props.onClick },
				page
			);
		});

		return React.createElement(
			'div',
			{ className: 'Pagination__list' },
			pages
		);
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var componentClass = classNames('Pagination', this.props.className);
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			this.renderCount(),
			this.renderList()
		);
	}
});
'use strict';

var React = require('react');
var classNames = require('classnames');

var Page = React.createClass({
	displayName: 'Page',
	propTypes: {
		children: React.PropTypes.node,
		label: React.PropTypes.string,
		onSelect: React.PropTypes.func,
		page: React.PropTypes.number,
		selected: React.PropTypes.bool
	},
	onSelect: function onSelect() {
		this.props.onSelect(this.props.page);
	},
	render: function render() {
		var _props = this.props;
		var children = _props.children;
		var selected = _props.selected;
		var label = _props.label;

		var className = classNames('Pagination__list__item', {
			'is-selected': selected
		});
		return React.createElement(
			'button',
			{ className: className, onClick: this.onSelect },
			children
		);
	}
});

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		currentPage: React.PropTypes.number.isRequired,
		limit: React.PropTypes.number,
		onPageSelect: React.PropTypes.func,
		pageSize: React.PropTypes.number.isRequired,
		plural: React.PropTypes.string,
		singular: React.PropTypes.string,
		style: React.PropTypes.object,
		total: React.PropTypes.number.isRequired
	},
	renderCount: function renderCount() {
		var count = '';
		var _props2 = this.props;
		var currentPage = _props2.currentPage;
		var pageSize = _props2.pageSize;
		var plural = _props2.plural;
		var singular = _props2.singular;
		var total = _props2.total;

		if (!total) {
			count = 'No ' + (plural || 'records');
		} else if (total > pageSize) {
			var start = pageSize * (currentPage - 1) + 1;
			var end = Math.min(start + pageSize - 1, total);
			count = 'Showing ' + start + ' to ' + end + ' of ' + total;
		} else {
			count = 'Showing ' + total;
			if (total > 1 && plural) {
				count += ' ' + plural;
			} else if (total === 1 && singular) {
				count += ' ' + singular;
			}
		}
		return React.createElement(
			'div',
			{ className: 'Pagination__count' },
			count
		);
	},
	onPageSelect: function onPageSelect(page) {
		if (this.props.onPageSelect) {
			this.props.onPageSelect(page);
		}
	},
	renderPages: function renderPages() {
		if (this.props.total <= this.props.pageSize) return null;

		var pages = [];
		var _props3 = this.props;
		var currentPage = _props3.currentPage;
		var pageSize = _props3.pageSize;
		var total = _props3.total;
		var limit = _props3.limit;

		var totalPages = Math.ceil(total / pageSize);
		var minPage = 1;
		var maxPage = totalPages;

		if (limit && limit < totalPages) {
			var rightLimit = Math.floor(limit / 2);
			var leftLimit = rightLimit + limit % 2 - 1;
			minPage = currentPage - leftLimit;
			maxPage = currentPage + rightLimit;

			if (minPage < 1) {
				maxPage = limit;
				minPage = 1;
			}
			if (maxPage > totalPages) {
				minPage = totalPages - limit + 1;
				maxPage = totalPages;
			}
		}
		if (minPage > 1) {
			pages.push(React.createElement(
				Page,
				{ key: 'page_start', onSelect: this.onPageSelect, page: 1 },
				'...'
			));
		}
		for (var page = minPage; page <= maxPage; page++) {
			var selected = page === currentPage;
			/* eslint-disable no-loop-func */
			pages.push(React.createElement(
				Page,
				{ key: 'page_' + page, selected: selected, onSelect: this.onPageSelect, page: page },
				page
			));
			/* eslint-enable */
		}
		if (maxPage < totalPages) {
			pages.push(React.createElement(
				Page,
				{ key: 'page_end', onSelect: this.onPageSelect, page: totalPages },
				'...'
			));
		}
		return React.createElement(
			'div',
			{ className: 'Pagination__list' },
			pages
		);
	},
	render: function render() {
		var className = classNames('Pagination', this.props.className);
		return React.createElement(
			'div',
			{ className: className, style: this.props.style },
			this.renderCount(),
			this.renderPages()
		);
	}
});
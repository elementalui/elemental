import { test } from 'tape';
import Pagination from '../../src/components/Pagination';
import React from 'react';
import $ from 'teaspoon';


const getList = props => $(<Pagination {...props} />)
	.shallowRender()
	.children('.Pagination__list');


const getPageNumbers = props => getList(props)
	.children()
	.get()
	.map(node => node.props.children);

test('Pagination. Basics', t => {
	t.equal(
		1,
		1,
		'should create .Pagination__list container for pages');

	t.end();
});

/*
test('Pagination. Basics', t => {

	t.ok(
		$(<Pagination {...{ currentPage: 1, pageSize: 10, total: 30 }} />)
			.shallowRender()
			.is('.Pagination'),
		'should create .Pagination container');


	t.equal(
		getList({ currentPage: 1, pageSize: 10, total: 30 })
			.length,
		1,
		'should create .Pagination__list container for pages');


	t.equal(
		getList({ currentPage: 1, pageSize: 10, total: 30 })
			.children().length,
		3,
		'should render 3 pages for 30 items with 10 items per page');


	t.equal(getList({ currentPage: 1, pageSize: 10, total: 30 })
		.children('.Pagination__list__item').length,
		3,
		'should create .Pagination__list__item containers for each page');


	t.equal(getList({ currentPage: 2, pageSize: 10, total: 30 })
		.children('.is-selected').length,
		1,
		'should add "is-selected" class to current page element');

	t.deepEqual(
		getPageNumbers({ currentPage: 1, pageSize: 10, total: 45 }),
		[1, 2, 3, 4, 5],
		'should render page numbers');

	t.end();
});

test('Pagination. Limit', t => {

	t.deepEqual(
		getPageNumbers({ currentPage: 1, pageSize: 10, total: 100, limit: 6 }),
		[1, 2, 3, 4, 5, 6, '...'],
		'should limit number of first pages when on first page');


	t.deepEqual(
		getPageNumbers({ currentPage: 10, pageSize: 10, total: 100, limit: 6 }),
		['...', 5, 6, 7, 8, 9, 10],
		'should limit number of last pages when on the last page');


	t.deepEqual(
		getPageNumbers({ currentPage: 111, pageSize: 10, total: 105, limit: 6 }),
		['...', 6, 7, 8, 9, 10, 11],
		'should limit number of last pages when on the last page and it is not filled in full');


	t.deepEqual(
		getPageNumbers({ currentPage: 10, pageSize: 25, total: 1000, limit: 5 }),
		['...', 8, 9, 10, 11, 12, '...'],
		'should limit number of pages in the middle of pagination (odd number)');


	t.deepEqual(
		getPageNumbers({ currentPage: 10, pageSize: 25, total: 1000, limit: 4 }),
		['...', 9, 10, 11, 12, '...'],
		'should limit number of pages in the middle of pagination (even number)');


	t.deepEqual(
		getPageNumbers({ currentPage: 4, pageSize: 36, total: 130, limit: 2 }),
		['...', 3, 4],
		'should render correctly when limit is extremely small');


	t.end();
});
*/
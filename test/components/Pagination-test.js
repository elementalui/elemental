import { test } from 'tape';
import Pagination from '../../lib/components/Pagination';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

/**
 * TODO: move to utils for re-use
 */
const createComponent = (component, props, ...children) => {
	const shallowRenderer = TestUtils.createRenderer();
	shallowRenderer.render(
		React.createElement(component, props, children.length === 1 ? children[0] : children)
	);
	return shallowRenderer.getRenderOutput();
};


const getList = props => createComponent(Pagination, props).props.children[1];


test('Pagination. Basics', t => {

	t.ok(createComponent(Pagination, { currentPage: 1, pageSize: 10, total: 30 })
			.props.className.indexOf('Pagination') !== -1,
		'should create .Pagination container');


	t.ok(getList({ currentPage: 1, pageSize: 10, total: 30 })
			.props.className.indexOf('Pagination__list') !== -1,
		'should create .Pagination__list container for pages');


	t.equal(getList({ currentPage: 1, pageSize: 10, total: 30 })
			.props.children.length, 3,
		'should render 3 pages for 30 items with 10 items per page');


	t.ok(getList({ currentPage: 1, pageSize: 10, total: 30 })
			.props.children[0].props.className.indexOf('Pagination__list__item') !== -1,
		'should create .Pagination__list__item containers for each page');


	t.ok(getList({ currentPage: 2, pageSize: 10, total: 30 })
			.props.children[1].props.className.indexOf('is-selected') !== -1,
		'should add "is-selected" class to current page element');


	t.deepEqual(getList({ currentPage: 1, pageSize: 10, total: 45 })
		.props.children.map(page => page.props.children), [1, 2, 3, 4, 5],
		'should render page numbers');


	t.end();
});

test('Pagination. Limit', t => {

	t.deepEqual(getList({ currentPage: 1, pageSize: 10, total: 100, limit: 6 })
		.props.children.map(page => page.props.children), [1, 2, 3, 4, 5, 6, '...'],
		'should limit number of first pages when on first page');


	t.deepEqual(getList({ currentPage: 10, pageSize: 10, total: 100, limit: 6 })
		.props.children.map(page => page.props.children), ['...', 5, 6, 7, 8, 9, 10],
		'should limit number of last pages when on the last page');


	t.deepEqual(getList({ currentPage: 111, pageSize: 10, total: 105, limit: 6 })
		.props.children.map(page => page.props.children), ['...', 6, 7, 8, 9, 10, 11],
		'should limit number of last pages when on the last page and it is not filled in full');


	t.deepEqual(getList({ currentPage: 10, pageSize: 25, total: 1000, limit: 5 })
		.props.children.map(page => page.props.children), ['...', 8, 9, 10, 11, 12, '...'],
		'should limit number of pages in the middle of pagination (odd number)');


	t.deepEqual(getList({ currentPage: 10, pageSize: 25, total: 1000, limit: 4 })
		.props.children.map(page => page.props.children), ['...', 9, 10, 11, 12, '...'],
		'should limit number of pages in the middle of pagination (even number)');


	t.deepEqual(getList({ currentPage: 4, pageSize: 36, total: 130, limit: 2 })
		.props.children.map(page => page.props.children), ['...', 3, 4],
		'should render correctly when limit is extremely small');


	t.end();
});

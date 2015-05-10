'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

var Button = require('./Button');

module.exports = React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		items: React.PropTypes.array.isRequired,
		className: React.PropTypes.string,
		buttonClass: React.PropTypes.string,
		buttonLabel: React.PropTypes.string,
		buttonHasDisclosureArrow: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonHasDisclosureArrow: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			isOpen: false
		};
	},
	openDropdown: function openDropdown() {
		this.setState({ isOpen: true });
	},
	closeDropdown: function closeDropdown() {
		this.setState({ isOpen: false });
	},
	renderChildren: function renderChildren() {
		var _this = this;

		return React.Children.map(this.props.children, function (child) {
			child.props.onClick = _this.openDropdown;
			return child;
		});
	},
	renderButton: function renderButton() {
		var buttonClass = classNames('Dropdown-toggle', this.props.buttonClass);
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? React.createElement('span', { className: 'Dropdown-toggle__arrow' }) : null;
		return React.createElement(
			Button,
			{ onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown, className: buttonClass },
			this.props.buttonLabel,
			disclosureArrow
		);
	},
	renderDropdownMenu: function renderDropdownMenu() {
		if (!this.state.isOpen) return;

		var dropdownMenuItems = this.props.items.map((function (item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = React.createElement(
					'li',
					{ key: 'item-' + i, className: 'Dropdown-menu__header' },
					item.label
				);
			} else if (item.type === 'divider') {
				menuItem = React.createElement('li', { key: 'item-' + i, className: 'Dropdown-menu__divider' });
			} else {
				if (item.href) {
					menuItem = React.createElement(
						'li',
						{ key: 'item-' + i, className: 'Dropdown-menu__item' },
						React.createElement(
							'a',
							{ className: 'Dropdown-menu__action', href: item.anchor },
							item.label
						)
					);
				} else {
					menuItem = React.createElement(
						'li',
						{ key: 'item-' + i, className: 'Dropdown-menu__item' },
						React.createElement(
							'span',
							{ className: 'Dropdown-menu__action', onClick: item.action },
							item.label
						)
					);
				}
			}
			return menuItem;
		}).bind(this));

		return React.createElement(
			'ul',
			{ key: 'Dropdown-menu', className: 'Dropdown-menu', role: 'menu' },
			dropdownMenuItems
		);
	},
	renderDropdownMenuBackground: function renderDropdownMenuBackground() {
		if (!this.state.isOpen) return;
		return React.createElement('div', { className: 'Dropdown-menu-backdrop', onClick: this.closeDropdown });
	},
	render: function render() {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);

		return React.createElement(
			'div',
			{ className: dropdownClass },
			React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton(),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Dropdown-menu', component: 'div' },
				this.renderDropdownMenu()
			),
			this.renderDropdownMenuBackground()
		);
	}
});
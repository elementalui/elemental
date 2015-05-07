'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		items: React.PropTypes.array.isRequired,
		onChange: React.PropTypes.func,
		className: React.PropTypes.string,
		buttonClass: React.PropTypes.string,
		buttonLabel: React.PropTypes.string,
		buttonDisclosureArrow: React.PropTypes.bool,
		isOpen: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.props.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);
		var buttonClass = classNames('Dropdown-toggle', this.props.buttonClass);

		// elements
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
		var dropdownMenu = this.props.isOpen ? React.createElement(
			'ul',
			{ key: 'Dropdown-menu', className: 'Dropdown-menu', role: 'menu' },
			dropdownMenuItems
		) : null;
		var dropdownMenuBackground = this.props.isOpen ? React.createElement('div', { className: 'Dropdown-menu-backdrop', onClick: this.props.onChange }) : null;
		var disclosureArrow = this.props.buttonDisclosureArrow ? React.createElement('span', { className: 'Dropdown-toggle__arrow' }) : null;

		return React.createElement(
			'div',
			{ className: dropdownClass },
			React.createElement(
				'button',
				{ onClick: this.props.onChange, className: buttonClass, type: 'button' },
				this.props.buttonLabel,
				disclosureArrow
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Dropdown-menu', component: 'div' },
				dropdownMenu
			),
			dropdownMenuBackground
		);
	}
});
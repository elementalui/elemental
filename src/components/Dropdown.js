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
	getDefaultProps () {
		return {
			buttonHasDisclosureArrow: true
		};
	},
	getInitialState () {
		return {
			isOpen: false
		};
	},
	openDropdown () {
		this.setState({ isOpen: true });
	},
	closeDropdown () {
		this.setState({ isOpen: false });
	},
	renderChildren () {
		return React.Children.map(this.props.children, (child) => {
			child.props.onClick = this.openDropdown;
			return child;
		});
	},
	renderButton () {
		var buttonClass = classNames('Dropdown-toggle', this.props.buttonClass);
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? <span className="Dropdown-toggle__arrow" /> : null;
		return (
			<Button onClick={this.state.isOpen ? this.closeDropdown : this.openDropdown} className={buttonClass}>
				{this.props.buttonLabel}
				{disclosureArrow}
			</Button>
		);
	},
	renderDropdownMenu () {
		if (!this.state.isOpen) return;

		var dropdownMenuItems = this.props.items.map(function(item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = <li key={'item-' + i} className="Dropdown-menu__header">{item.label}</li>
			} else if (item.type === 'divider') {
				menuItem = <li key={'item-' + i} className="Dropdown-menu__divider" />
			} else {
				if (item.href) {
					menuItem = (
						<li key={'item-' + i} className="Dropdown-menu__item">
							<a className="Dropdown-menu__action" href={item.anchor}>{item.label}</a>
						</li>
					);
				} else {
					menuItem = (
						<li key={'item-' + i} className="Dropdown-menu__item">
							<span className="Dropdown-menu__action" onClick={item.action}>{item.label}</span>
						</li>
					);
				}
			}
			return menuItem;
		}.bind(this));

		return (
			<ul key="Dropdown-menu" className="Dropdown-menu" role="menu">
				{dropdownMenuItems}
			</ul>
		);
	},
	renderDropdownMenuBackground () {
		if (!this.state.isOpen) return;
		return <div className="Dropdown-menu-backdrop" onClick={this.closeDropdown} />;
	},
	render () {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);
		
		return (
			<div className={dropdownClass}>
				{React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton()}
				<ReactCSSTransitionGroup transitionName="Dropdown-menu" component="div">
					{this.renderDropdownMenu()}
				</ReactCSSTransitionGroup>
				{this.renderDropdownMenuBackground()}
			</div>
		);
	}
});

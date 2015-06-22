var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

var Button = require('./Button');

module.exports = React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		alignRight: React.PropTypes.bool,
		buttonHasDisclosureArrow: React.PropTypes.bool,
		buttonLabel: React.PropTypes.string,
		buttonType: React.PropTypes.string,
		className: React.PropTypes.string,
		children: React.PropTypes.element,
		isOpen: React.PropTypes.bool,
		items: React.PropTypes.array.isRequired,
		onSelect: React.PropTypes.func
	},
	getDefaultProps () {
		return {
			buttonHasDisclosureArrow: true,
			onSelect: function() {}
		};
	},
	getInitialState () {
		return {
			isOpen: this.props.isOpen || false
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
			return React.cloneElement(child, {
				onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown,
				className: classNames(child.props.className, 'Dropdown-toggle')
			});
		});
	},
	renderButton () {
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? <span className="disclosure-arrow" /> : null;

		return (
			<Button type={this.props.buttonType} onClick={this.state.isOpen ? this.closeDropdown : this.openDropdown} className="Dropdown-toggle">
				{this.props.buttonLabel}
				{disclosureArrow}
			</Button>
		);
	},

	onClick (selectedItem) {
		this.setState({
			isOpen: !this.state.isOpen
		});

		this.props.onSelect(selectedItem);
	},
	renderDropdownMenu () {
		var self = this;
		if (!this.state.isOpen) return null;

		var dropdownMenuItems = this.props.items.map(function(item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = <li key={'item-' + i} className="Dropdown-menu__header">{item.label}</li>;
			} else if (item.type === 'divider') {
				menuItem = <li key={'item-' + i} className="Dropdown-menu__divider" />;
			} else {
				menuItem = (
					<li key={'item-' + i} className="Dropdown-menu__item">
						<span className="Dropdown-menu__action" onClick={self.onClick.bind(self, item.label)}>{item.label}</span>
					</li>
				);
			}
			return menuItem;
		});

		return (
			<ul key="Dropdown-menu" className="Dropdown-menu" role="menu">
				{dropdownMenuItems}
			</ul>
		);
	},
	renderDropdownMenuBackground () {
		if (!this.state.isOpen) return null;
		return <div className="Dropdown-menu-backdrop" onClick={this.closeDropdown} />;
	},

	render () {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'alignRight', 'buttonHasDisclosureArrow', 'buttonLabel', 'buttonType', 'className', 'isOpen', 'items');

		return (
			<span className={dropdownClass} {...props}>
				{React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton()}
				<ReactCSSTransitionGroup transitionName="Dropdown-menu">
					{this.renderDropdownMenu()}
				</ReactCSSTransitionGroup>
				{this.renderDropdownMenuBackground()}
			</span>
		);
	}
});

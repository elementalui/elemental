const React = require('react');
const Transition = require('react-addons-css-transition-group');
const blacklist = require('blacklist');
const classNames = require('classnames');
const Button = require('./Button');

const ESC_KEYCODE = 27;
const NO_OP = () => undefined;

export default React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		alignRight: React.PropTypes.bool,
		buttonHasDisclosureArrow: React.PropTypes.bool,
		buttonLabel: React.PropTypes.string,
		buttonSize: React.PropTypes.string,
		buttonType: React.PropTypes.string,
		children: React.PropTypes.element,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		items: React.PropTypes.array.isRequired,
		onSelect: React.PropTypes.func,
	},
	getDefaultProps () {
		return {
			buttonHasDisclosureArrow: true,
			onSelect: NO_OP,
		};
	},
	getInitialState () {
		return {
			isOpen: this.props.isOpen || false,
		};
	},
	componentWillUpdate (nextProps, nextState) {
		if (typeof window === 'undefined') return;
		if (nextState.isOpen) {
			window.addEventListener('keydown', this.handleKeyDown);
		} else {
			window.removeEventListener('keydown', this.handleKeyDown);
		}
	},
	openDropdown () {
		this.setState({ isOpen: true });
	},
	closeDropdown () {
		this.setState({ isOpen: false });
	},
	handleKeyDown (e) {
		if (e.keyCode === ESC_KEYCODE) {
			this.closeDropdown();
		}
	},
	renderChildren () {
		return React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown,
				className: classNames(child.props.className, 'Dropdown-toggle'),
			});
		});
	},
	renderButton () {
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? <span className="disclosure-arrow" /> : null;

		return (
			<Button type={this.props.buttonType} size={this.props.buttonSize} onClick={this.state.isOpen ? this.closeDropdown : this.openDropdown} className="Dropdown-toggle">
				{this.props.buttonLabel}
				{disclosureArrow}
			</Button>
		);
	},
	onClick (selectedItem) {
		this.setState({
			isOpen: !this.state.isOpen,
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
						<span className="Dropdown-menu__action" onClick={self.onClick.bind(self, item.value)}>{item.label}</span>
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
			'align-right': this.props.alignRight,
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'alignRight', 'buttonHasDisclosureArrow', 'buttonLabel', 'buttonType', 'className', 'isOpen', 'items');

		return (
			<span className={dropdownClass} {...props}>
				{React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton()}
				<Transition transitionName="Dropdown-menu" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
					{this.renderDropdownMenu()}
				</Transition>
				{this.renderDropdownMenuBackground()}
			</span>
		);
	},
});

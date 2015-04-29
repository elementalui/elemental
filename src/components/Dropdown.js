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
	render() {
		// classes
		var dropdownClass = classNames('dropdown', {
			'is-open': this.props.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);
		var buttonClass = classNames('dropdown-toggle', this.props.buttonClass);

		// elements
		var dropdownMenuItems = this.props.items.map(function(item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = <li key={'item-' + i} className="dropdown-menu__header">{item.label}</li>
			} else if (item.type === 'divider') {
				menuItem = <li key={'item-' + i} className="dropdown-menu__divider" />
			} else {
				if (item.href) {
					menuItem = (
						<li key={'item-' + i} className="dropdown-menu__item">
							<a className="dropdown-menu__action" href={item.anchor}>{item.label}</a>
						</li>
					);
				} else {
					menuItem = (
						<li key={'item-' + i} className="dropdown-menu__item">
							<span className="dropdown-menu__action" onClick={item.action}>{item.label}</span>
						</li>
					);
				}
			}
			return menuItem;
		}.bind(this));
		var dropdownMenu = this.props.isOpen ? <ul key="dropdown-menu" className="dropdown-menu" role="menu">
			{dropdownMenuItems}
		</ul> : null;
		var dropdownMenuBackground = this.props.isOpen ? <div className="dropdown-menu-backdrop" onClick={this.props.onChange} /> : null;
		var disclosureArrow = this.props.buttonDisclosureArrow ? <span className="dropdown-toggle__arrow" /> : null;
		
		return (
			<div className={dropdownClass}>
				<button onClick={this.props.onChange} className={buttonClass} type="button">
					{this.props.buttonLabel}
					{disclosureArrow}
				</button>
				<ReactCSSTransitionGroup transitionName="dropdown-menu" component="div">{dropdownMenu}</ReactCSSTransitionGroup>
				{dropdownMenuBackground}
			</div>
		);
	}
});

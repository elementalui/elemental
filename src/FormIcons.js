var list = [
	{ label: 'Calendar',       value: 'calendar',      className: 'calendar' },
	{ label: 'Camera',         value: 'camera',        className: 'camera' },
	{ label: 'Cart',           value: 'cart',          className: 'cart' },
	{ label: 'Close Circled',  value: 'close-circled', className: 'close-circled' },
	{ label: 'Close',          value: 'close',         className: 'close' },
	{ label: 'Cog',            value: 'cog',           className: 'cog' },
	{ label: 'Home',           value: 'home',          className: 'home' },
	{ label: 'Information',    value: 'information',   className: 'information' },
	{ label: 'Mail',           value: 'mail',          className: 'mail' },
	{ label: 'Menu',           value: 'menu',          className: 'menu' },
	{ label: 'Search',         value: 'search',        className: 'search' },
	{ label: 'Star Outline',   value: 'star-outline',  className: 'star-outline' },
	{ label: 'Star',           value: 'star',          className: 'star' },
	{ label: 'Telephone',      value: 'telephone',     className: 'telephone' },
	{ label: 'Time',           value: 'time',          className: 'time' },
	{ label: 'User',           value: 'user',          className: 'user' },
	{ label: 'Users',          value: 'users',         className: 'users' },
	{ label: 'Warning',        value: 'warning',       className: 'warning' }
]

var map = {}
list.forEach(function(icon) {
	map[icon.value] = icon
})

module.exports = {
	list: list,
	map: map
}

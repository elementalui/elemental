// breakpoints
exports.breakpoint = {
	xs:              480,
	sm:              768,
	md:              992,
	lg:             1200,
};

// border radii
exports.borderRadius = {
	xs:                2,
	sm:                4,
	md:                8,
	lg:               16,
	xl:               32,
};

// color
exports.color = {
	appDanger:        '#d64242',
	appInfo:          '#56cdfc',
	appPrimary:       '#1385e5',
	appSuccess:       '#34c240',
	appWarning:       '#fa9f47',
	brandPrimary:     '#31adb8',
};

// spacing
exports.spacing = {
	xs:                 5,
	sm:                10,
	md:                20,
	lg:                40,
	xl:                80,
};

// widths
exports.width = {
	container:       1170,
	gutter:            20,
};

// fractions (for col widths)

function perc(n) {
	return (n * 100) + '%';
}

exports.fractions = {
	'1/2':      perc(1/2),
	'1/3':      perc(1/3),
	'1/4':      perc(1/4),
	'1/5':      perc(1/5),
	'1/6':      perc(1/6),
	'1/7':      perc(1/7),
	'1/8':      perc(1/8),
	'1/9':      perc(1/9),
	'1/10':    perc(1/10),
	'1/11':    perc(1/11),
	'1/12':    perc(1/12),
	'1/13':    perc(1/13),
	'1/14':    perc(1/14),
	'1/15':    perc(1/15),
	'1/16':    perc(1/16),
	'1/17':    perc(1/17),
	'1/18':    perc(1/18),
	'1/19':    perc(1/19),
	'1/20':    perc(1/20),
};

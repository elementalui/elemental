var color = require('color');

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

// border radii in em
exports.relBorderRadius = {
	base: '0.3em',
}

// color
var colors = {
	greyDark:         '#333',
};

exports.color = {
	appDanger:        '#d64242',
	appInfo:          '#56cdfc',
	appPrimary:       '#1385e5',
	appSuccess:       '#34c240',
	appWarning:       '#fa9f47',
	brandPrimary:     '#31adb8',
	bodyBg:           '#fdfdfd',
	textColor:        color.greyDark
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

function denominators (n) {
	for (var d = 2; d <= 20; d++) {
		if (n < d) {
			exports.fractions[n + '/' + d] = perc(n / d);
		}
	}
}

exports.fractions = {};

for (var numerator = 1; numerator <= 19; numerator++) {
	denominators(numerator);
}

// typography
exports.fontSize = {
	base: 14,
	xs:   '0.8rem',
	sm:   '0.9rem',
	lg:   '1.25rem'
};

exports.fontWeight = {
	bold: 500
};

// buttons
exports.button = {
	fontWeight:        exports.fontWeight.bold,
	horizontalPadding: '1em',
	defaultColor:      exports.color.appPrimary,
	defaultDisabledBg: color(exports.color.bodyBg).darken(0.04).rgbaString()
};

// used on inputs and buttons
exports.component = {
	lineHeight: '2.3em',
	height:     '2.4em',
};

// forms
exports.input = {
	borderColor: '#ccc'
};

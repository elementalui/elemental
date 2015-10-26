/**
 * Gradients
 *
 * Gratefully taken from https://github.com/twbs/bootstrap
 */

import color from 'color';

/**
 * Horizontal gradient, from left to right
 *
 * Creates two color stops, start and end, by specifying a color and position for each color stop.
 * Color stops are not available in IE9 and below.
 */
export function horizontal(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
    return {
        backgroundImage: [
            `-webkit-linear-gradient(left, ${startColor} ${startPercent}, ${endColor} ${endPercent})`, // Safari 5.1-6, Chrome 10+
            `-o-linear-gradient(left, ${startColor} ${startPercent}, ${endColor} ${endPercent})`, // Opera 12
            `linear-gradient(to right, ${startColor} ${startPercent}, ${endColor} ${endPercent})` // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
        ],
        backgroundRepeat: 'repeat-x',
        filter: filter(startColor, endColor, 1) // IE9 and down
    }
}

/**
 * Vertical gradient, from top to bottom
 *
 * Creates two color stops, start and end, by specifying a color and position for each color stop.
 * Color stops are not available in IE9 and below.
 */
export function vertical(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
    return {
        backgroundImage: [
            `-webkit-linear-gradient(top, ${startColor} ${startPercent}, ${endColor} ${endPercent})`, // Safari 5.1-6, Chrome 10+
            `-o-linear-gradient(top, ${startColor} ${startPercent}, ${endColor} ${endPercent})`, // Opera 12
            `linear-gradient(to bottom, ${startColor} ${startPercent}, ${endColor} ${endPercent})` // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
        ],
        backgroundRepeat: 'repeat-x',
        filter: filter(startColor, endColor, 1) // IE9 and down
    }
}

export function directional(startColor = '#555', endColor = '#333', deg = '45deg') {
    return {
        backgroundImage: [
            `-webkit-linear-gradient(${deg}, ${startColor}, ${endColor})`, // Safari 5.1-6, Chrome 10+
            `-o-linear-gradient(${deg}, ${startColor}, ${endColor})`, // Opera 12
            `linear-gradient(${deg}, ${startColor}, ${endColor})` // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
        ],
        backgroundRepeat: 'repeat-x'
    }
}

export function horizontalThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
    return {
        backgoundImage: [
            `-webkit-linear-gradient(left, ${startColor}, ${midColor} ${colorStop}, ${endColor})`,
            `-o-linear-gradient(left, ${startColor}, ${midColor} ${colorStop}, ${endColor})`,
            `linear-gradient(to right, ${startColor}, ${midColor} ${colorStop}, ${endColor})`
        ],
        backgroundRepeat: 'no-repeat',
        filter: filter(startColor, endColor, 1) // IE9 and down, gets no color-stop at all for proper fallback
    }
}

export function verticalThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
    return {
        backgoundImage: [
            `-webkit-linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor})`,
            `-o-linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor})`,
            `linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor})`
        ],
        backgroundRepeat: 'no-repeat',
        filter: filter(startColor, endColor, 0) // IE9 and down, gets no color-stop at all for proper fallback
    }
}

export function radial(innerColor = '#555', outerColor = '#333') {
    return {
        backgoundImage: [
            `-webkit-radial-gradient(circle, ${innerColor}, ${outerColor})`,
            `radial-gradient(circle, ${innerColor}, ${outerColor})`
        ],
        backgroundRepeat: 'no-repeat'
    }
}

export function striped(color = 'rgba(255,255,255,.15)', angle = '45deg') {
    return {
        backgoundImage: [
            `-webkit-linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`,
            `-o-linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`,
            `linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`
        ]
    }
}


function filter(startColor, endColor, gradientType) {
    // TODO we need an argb hex string here.
    const aStartColor = color(startColor).hexString()
    const aEndColor = color(endColor).hexString()
    return `progid:DXImageTransform.Microsoft.gradient(startColorstr='${aStartColor}', endColorstr='${aEndColor}', GradientType=${gradientType})`
}

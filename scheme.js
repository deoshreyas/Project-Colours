class Colour {
    constructor(h, s, l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

function hexToHSL(hexColor) {
    const hexResult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    let red = parseInt(hexResult[1], 16);
    let green = parseInt(hexResult[2], 16);
    let blue = parseInt(hexResult[3], 16);
    red /= 255, green /= 255, blue /= 255;
    let max = Math.max(red, green, blue), min = Math.min(red, green, blue);
    let hue, saturation, lightness;
    lightness = (max + min) / 2;
    if (max == min) {
        hue = saturation = 0; // achromatic
    } else {
        let delta = max - min;
        saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case red: hue = (green - blue) / delta + (green < blue ? 6 : 0); break;
            case green: hue = (blue - red) / delta + 2; break;
            case blue: hue = (red - green) / delta + 4; break;
        }
        hue /= 6;
    }
    hue = Math.round(hue * 360);
    saturation = Math.round(saturation * 100);
    lightness = Math.round(lightness * 100);
    return new Colour(hue, saturation, lightness);
}

function HSLToHex(col) {
    let h = col.h;
    let s = col.s;
    let l = col.l;
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s == 0) {
        r = g = b = l;
    } else {
        let hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function sort_colours(colours) {
    colours.sort(function(a, b) {
        return b.l - a.l;
    });
    return colours;
}

function Monochromatic(starting_colour, num_colours) {
    var h = starting_colour.h;
    var s = starting_colour.s;
    var l = starting_colour.l;
    var colours = [];
    var l_increment = 100 / num_colours;
    for (var i = 0; i < num_colours; i++) {
        l = l + l_increment;
        if (l > 100) {
            l -= 100;
        }
        colours.push(new Colour(h, s, l));
    }
    return sort_colours(colours);
}

function Analogous(starting_colour, num_colours) {
    var h = starting_colour.h;
    var s = starting_colour.s;
    var l = starting_colour.l;
    var colours = [];
    var hue_shift = 30;
    for (var i = 0; i < num_colours; i++) {
        if (i==0) {
            colours.push(new Colour(h, s, l));
            continue;
        }
        h += i <= num_colours / 2 ? hue_shift : -hue_shift;
        hue_shift *= 2;
        if (h > 360) {
            h -= 360;
        } else if (h < 0) {
            h += 360;
        }
        colours.push(new Colour(h, s, l));
    }
    return colours;
}

function Complementary(starting_colour, num_colours) {
    var h = starting_colour.h;
    var s = starting_colour.s;
    var l = starting_colour.l;
    var colours = [];
    var hue_shift = 180;
    for (var i = 0; i < num_colours; i++) {
        if (i==0) {
            colours.push(new Colour(h, s, l));
            continue;
        }
        h = (h + hue_shift) % 360;
        colours.push(new Colour(h, s, l));
        h += i % 2 ? 30 : 0;
    }
    return colours;
}

function Triadic(starting_colour, num_colours) {
    var h = starting_colour.h;
    var s = starting_colour.s;
    var l = starting_colour.l;
    var colours = [];
    var hue_shift = 120;
    for (var i = 1; i <= num_colours; i++) {
        if (i==1) {
            colours.push(new Colour(h, s, l));
            continue;
        }
        h = (h + hue_shift) % 360;
        colours.push(new Colour(h, s, l));
        h += i%3==0 ? 30 : 0;
        console.log(h)
    }
    return colours;
}

function SplitComplementary(starting_colour, num_colours) {
    var h = starting_colour.h;
    var s = starting_colour.s;
    var l = starting_colour.l;
    var colours = [];
    var hue_shift = 180;
    var num_col_split = 0;
    for (var i = 0; i < num_colours; i++) {
        if (i==0) {
            colours.push(new Colour(h, s, l));
            continue;
        }
        if (num_col_split < 3) {
            h = (h + hue_shift) % 360;
            colours.push(new Colour(h, s, l));
            num_col_split++;
            continue;
        }
        h += 30;
        colours.push(new Colour(h, s, l));
        num_col_split = 0;
    }
    return colours;
}
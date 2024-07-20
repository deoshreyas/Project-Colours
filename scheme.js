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
    console.log(hue, saturation, lightness);
    return new Colour(hue, saturation, lightness);
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
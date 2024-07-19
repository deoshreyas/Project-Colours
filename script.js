function closeMenu() {
    document.getElementById('menu').style.display = 'none';
}

function openMenu() {
    document.getElementById('menu').style.display = 'flex';
}

function drawHeroRight() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col');
    ctx.fillRect(50, 50, 100, 100);
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--accent-col');
    ctx.fillRect(50, 30, 125, 15);
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col');
    ctx.fillRect(155, 50, 20, 100);
}

drawHeroRight();

var options_open = false;
function openColourOptions() {
    if (!options_open) {
        document.getElementsByClassName('colour-options')[0].style.display = 'flex';
        options_open = true;
    } else {
        document.getElementsByClassName('colour-options')[0].style.display = 'none';
        options_open = false;
    }
}

document.getElementById('background-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--background-col', this.value);
    drawHeroRight();
});

document.getElementById('text-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--text-col', this.value);
    drawHeroRight();
});

document.getElementById('primary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--primary-button-col', this.value);
    drawHeroRight();
});

document.getElementById('secondary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--secondary-button-col', this.value);
    drawHeroRight();
});

document.getElementById('accent-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--accent-col', this.value);
    drawHeroRight();
});
function closeMenu() {
    document.getElementById('menu').style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
}

function openMenu() {
    document.getElementById('menu').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
}

function drawHeroRight() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col');
    ctx.fillRect(0, 25, canvas.width/2, canvas.height - (canvas.height/8 + 5));
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--accent-col');
    ctx.fillRect(0, 0, canvas.width/2, canvas.height/8);
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col');
    ctx.fillRect(canvas.width/2 + 5, 0, canvas.width/2 - 5, canvas.height);
}

drawHeroRight();

var options_open = false;
function openColourOptions() {
    if (!options_open) {
        document.getElementsByClassName('colour-options')[0].style.display = 'flex';
        options_open = true;
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.getElementsByClassName('colour-options')[0].style.display = 'none';
        options_open = false;
        document.querySelector('body').style.overflow = 'scroll';
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
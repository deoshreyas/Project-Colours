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

document.querySelectorAll('.col-input input[type="color"]').forEach(function (input) {
    input.addEventListener('change', function () {
        drawHeroRight();
    });
});
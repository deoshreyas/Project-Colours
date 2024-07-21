document.getElementById('background-col').value = window.getComputedStyle(document.documentElement).getPropertyValue('--background-col');
document.getElementById('text-col').value = window.getComputedStyle(document.documentElement).getPropertyValue('--text-col');
document.getElementById('primary-button-col').value = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col');
document.getElementById('secondary-button-col').value = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col');
document.getElementById('accent-col').value = window.getComputedStyle(document.documentElement).getPropertyValue('--accent-col');

function setBgParam() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('bg', window.getComputedStyle(document.documentElement).getPropertyValue('--background-col'));
    window.location.search = urlParams.toString();
}

function setTextParam() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('text', window.getComputedStyle(document.documentElement).getPropertyValue('--text-col'));
    window.location.search = urlParams.toString();
}

function setPrimParam() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('prim', window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col'));
    window.location.search = urlParams.toString();
}

function setSecParam() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('sec', window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col'));
    window.location.search = urlParams.toString();
}

function setAccParam() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('acc', window.getComputedStyle(document.documentElement).getPropertyValue('--accent-col'));
    window.location.search = urlParams.toString();
}

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
    setBgParam();
});

document.getElementById('text-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--text-col', this.value);
    setTextParam();
});

document.getElementById('primary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--primary-button-col', this.value);
    setPrimParam();
});

document.getElementById('secondary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--secondary-button-col', this.value);
    setSecParam();
});

document.getElementById('accent-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--accent-col', this.value);
    setAccParam();
});

for (var i = 0; i < document.getElementsByClassName('question').length; i++) {
    acc_ques = document.getElementsByClassName('question')[i];
    acc_ques.addEventListener('click', function() {
        this.classList.toggle('active');
        var acc_ans = this.nextElementSibling;
        var acc_btn = this.lastElementChild;
        if (acc_ans.style.maxHeight) {
            acc_ans.style.maxHeight = null;
            acc_btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        } else {
            acc_ans.style.maxHeight = acc_ans.scrollHeight + 'px';
            acc_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }
    });
};

var labels = [];
for (var i=0; i<26; i++) {
    labels = [...labels, i];
}

var data = [];
for (var i=0; i<26; i++) {
    data = [...data, Math.floor(Math.random() * 100)];
}

const ctx = document.getElementById('chart');
Chart.defaults.color = window.getComputedStyle(document.documentElement).getPropertyValue('--text-col');
Chart.defaults.borderColor = 'transparent';
var chart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'line',
            label: 'Line Dataset',
            data: data,
            borderColor: window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col'),
            backgroundColor: window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col'),
        }, {
            type: 'bar',
            label: 'Bar Dataset',
            data: data,
            backgroundColor: window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col'),
        }],
        labels: labels
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

Array.from(document.getElementsByClassName('generator-btn')).forEach(item => item.addEventListener('click', function() {
    var colours = get_random_scheme();
    var bg = HSLToHex(colours[0]);
    var text = HSLToHex(colours[1]);
    var prim = HSLToHex(colours[2]);
    var sec = HSLToHex(colours[3]);
    var acc = HSLToHex(colours[4]);
    changeURLParams(bg, text, prim, sec, acc);
}));

function changeURLParams(bg, text, prim, sec, acc) {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    urlParams.set('bg', bg);
    urlParams.set('text', text);
    urlParams.set('prim', prim);
    urlParams.set('sec', sec);
    urlParams.set('acc', acc);
    window.location.search = urlParams.toString();
}

const form = document.querySelector('.contact-form');
const formElements = form.querySelectorAll('input, textarea, button');
formElements.forEach(element => {
    element.disabled = true;
});
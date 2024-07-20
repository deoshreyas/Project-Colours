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
    drawChart();
});

document.getElementById('text-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--text-col', this.value);
    drawHeroRight();
    drawChart();
});

document.getElementById('primary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--primary-button-col', this.value);
    drawHeroRight();
    drawChart();
});

document.getElementById('secondary-button-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--secondary-button-col', this.value);
    drawHeroRight();
    drawChart();
});

document.getElementById('accent-col').addEventListener('change', function() {
    document.documentElement.style.setProperty('--accent-col', this.value);
    drawHeroRight();
    drawChart();
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
    }
});

function drawChart() {
    chart.destroy();
    const ctx = document.getElementById('chart');
    Chart.defaults.color = window.getComputedStyle(document.documentElement).getPropertyValue('--text-col');
    chart = new Chart(ctx, {
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
        }
    });
}
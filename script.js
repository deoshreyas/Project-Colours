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

const ctx = document.getElementById('chart');

function drawChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    });
}

drawChart();
const query = window.location.search;
const urlParams = new URLSearchParams(query);
if (urlParams.has('bg')) {
    document.documentElement.style.setProperty('--background-col', urlParams.get('bg'));
} else {
    window.location.href = window.location.href + '?bg=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--background-col').slice(1);
}
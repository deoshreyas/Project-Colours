const query = window.location.search;
const urlParams = new URLSearchParams(query);
if (urlParams.has('bg') && 
    urlParams.has('text') && 
    urlParams.has('prim') && 
    urlParams.has('sec') &&
    urlParams.has('acc')) {
    document.documentElement.style.setProperty('--background-col', urlParams.get('bg'));
    document.documentElement.style.setProperty('--text-col', urlParams.get('text'));
    document.documentElement.style.setProperty('--primary-button-col', urlParams.get('prim'));
    document.documentElement.style.setProperty('--secondary-button-col', urlParams.get('sec'));
    document.documentElement.style.setProperty('--accent-col', urlParams.get('acc'));
} else {
    window.location.href = window.location.href + '?bg=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--background-col').slice(1)
        + '&text=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--text-col').slice(1)
        + '&prim=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--primary-button-col').slice(1)
        + '&sec=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-button-col').slice(1)
        + '&acc=%23' + window.getComputedStyle(document.documentElement).getPropertyValue('--accent-col').slice(1);
}
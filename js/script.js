const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBox = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text');

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.textContent = 'Dark mode';
    } else {
        modeText.textContent = 'Light mode';
    }
});

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

searchBox.addEventListener('click', () => {
    sidebar.classList.remove('close');
});
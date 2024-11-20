const toggleTheme = () =>
{
    
    let theme = document.getElementById('theme');

    //Select normal or light mode.
    if (theme.getAttribute('href')== 'style.css') {
        theme.setAttribute('href', 'light.css');
    } else {
        theme.setAttribute('href', 'style.css');
    }
}
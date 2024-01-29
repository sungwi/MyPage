document.getElementById('darkModeToggle').addEventListener('click', function() {
    var isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

    if(isDarkMode){
        document.getElementById('darkIcon').src = "icons/sun.png";
        document.getElementById('darkIcon').style.background = 'white';
    }else{
        document.getElementById('darkIcon').src = "icons/moon.png";
        document.getElementById('darkIcon').style.background = 'none'; // or any default style
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkIcon').src = "icons/sun.png";
        document.getElementById('darkIcon').style.background = 'white';
    } else {
        document.getElementById('darkIcon').src = "icons/moon.png";
        document.getElementById('darkIcon').style.background = 'none'; // or any default style
    }
});

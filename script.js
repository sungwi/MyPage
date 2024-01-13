document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        document.getElementById('darkIcon').src = 'icons/efy.png';
    }else{
        document.getElementById('darkIcon').src = 'icons/burakky.png';
    }
});


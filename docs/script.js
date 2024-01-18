document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        document.getElementById('darkmode').src = '../icons/fukidashi_light_01.png';
        document.getElementById('darkIcon').src = '../icons/efy.png';
    }else{
        document.getElementById('darkmode').src = '../icons/fukidashi_maru_02.png';
        document.getElementById('darkIcon').src = '../icons/burakky.png';
    }
});


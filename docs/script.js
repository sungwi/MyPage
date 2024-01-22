document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        document.getElementById('darkmode').src = "https://github.com/sungwi/MyPage/blob/main/icons/fukidashi_light_01.png?raw=true";
        document.getElementById('darkIcon').src = "https://github.com/sungwi/MyPage/blob/main/icons/efy.png?raw=true";
    }else{
        document.getElementById('darkmode').src = "https://github.com/sungwi/MyPage/blob/main/icons/fukidashi_maru_02.png?raw=true";
        document.getElementById('darkIcon').src = "https://github.com/sungwi/MyPage/blob/main/icons/burakky.png?raw=true";
    }
});


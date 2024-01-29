document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
       // document.getElementById('darkmode').src = "https://github.com/sungwi/MyPage/blob/main/icons/fukidashi_light_01.png?raw=true";
        document.getElementById('darkIcon').src = "../icons/sun.png";
        document.getElementById('darkIcon').style.background = 'white';
    }else{
       // document.getElementById('darkmode').src = "https://github.com/sungwi/MyPage/blob/main/icons/fukidashi_maru_02.png?raw=true";
        document.getElementById('darkIcon').src = "../icons/moon.png";
    }
});


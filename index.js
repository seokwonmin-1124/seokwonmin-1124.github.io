function theme() {
    // 만약 localStorage에 theme 값이 없다면 day로 설정
    if (localStorage.getItem("theme") == null) {
        localStorage.clear();
        localStorage.setItem("theme", "day");
    }
    // localStorage에 저장된 값을 가져와서
    var theme = localStorage.getItem("theme");
    // 만약 theme 값이 day라면 nightday() 함수를 실행
    if (theme == "day") {
        nightday();
    }
    // 만약 theme 값이 night라면 dayday() 함수를 실행
    else if (theme == "night") {
        daynight();
    }
} theme();

function daynight() {
    document.querySelector('body').style.backgroundColor = '#121212'
    document.querySelector('body').style.color = '#dbdbdb'
    document.querySelector('footer').style.color = '#bbb'
    document.querySelector('.nightday').style.color = '#fff'
    document.querySelector('.info').style.color = '#dbdbdb'
    document.querySelector('body').style.transition = 'all 0.5s'
    document.querySelector('.daynight').style.display = 'none'
    document.querySelector('.nightday').style.display = 'block'
    localStorage.clear();
    localStorage.setItem("theme", "night");
}

function nightday() {
    document.querySelector('body').style.backgroundColor = '#ffffff'
    document.querySelector('body').style.color = '#000000'
    document.querySelector('.nightday').style.color = '#000'
    document.querySelector('.info').style.color = '#00000099'
    document.querySelector('footer').style.color = '#00000099'
    document.querySelector('body').style.transition = 'all 0.5s'
    document.querySelector('.nightday').style.display = 'none'
    document.querySelector('.daynight').style.display = 'block'
    localStorage.clear();
    localStorage.setItem("theme", "day");
}
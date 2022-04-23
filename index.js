function daynight() {
    document.querySelector('body').style.backgroundColor = '#121212'
    document.querySelector('body').style.color = '#bbb'
    document.querySelector('.nightday').style.color = '#fff'
    document.querySelector('body').style.transition = 'all 0.5s'
    document.querySelector('.daynight').style.display = 'none'
    document.querySelector('.nightday').style.display = 'block'
}

function nightday() {
    document.querySelector('body').style.backgroundColor = '#ffffff'
    document.querySelector('body').style.color = '#000000'
    document.querySelector('.nightday').style.color = '#000'
    document.querySelector('body').style.transition = 'all 0.5s'
    document.querySelector('.nightday').style.display = 'none'
    document.querySelector('.daynight').style.display = 'block'
}
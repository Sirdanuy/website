const myVideo = document.querySelectorAll('.my-video'),
      popUpVideo = document.querySelector('.popUp-video'),
      popUpVideoClose = document.querySelector('.popUp-video__close'),
      video = document.getElementById('my-video')


myVideo.forEach(elem => {
    elem.addEventListener('click', () => {
       popUpVideo.classList.remove('d-none');
       video.src = elem.children[2].src
       video.play();
    })
});

popUpVideoClose.addEventListener('click', () => {
    popUpVideo.classList.add('d-none');
    video.pause()
});

window.addEventListener('click', (e) => {
    if(e.target == popUpVideo) {
        popUpVideo.classList.add('d-none');
        video.pause() 
    }
});
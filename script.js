function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}


function changeBg(bg, title, i) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    if (i == 1) {
        banner.style.background = 'url("../images/movies/bg-little-mermaid.jpg")';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }

    if (i == 2) {
        banner.style.background = 'url("../images/movies/bg-the-covenant.jpeg")';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }

    if (i == 3) {
        banner.style.background = 'url("../images/movies/bg-65.jpeg")';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }

    if (i == 4) {
        banner.style.background = 'url("../images/movies/bg-the-black-demon.jpeg';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }
    if (i == 5) {
        banner.style.background = 'url("../images/movies/bg-the-tank.jpeg")';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }


    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
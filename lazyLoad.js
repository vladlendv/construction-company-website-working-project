let images = document.querySelectorAll('.gallerys .gallery-card');

const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let div = entry.target;
                    let img = entry.target.childNodes[1].childNodes[1];
                    let src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    div.classList.add('fade-img');
                    div.classList.remove('lazy-img');
    
                    observer.disconnect();
                }
            })
        })
    
        io.observe(target);
    }

images.forEach(lazyLoad);

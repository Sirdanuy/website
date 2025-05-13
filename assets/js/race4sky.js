const ourNft = new Swiper('.our-nft-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    loop:true,
    centeredSlides: true,
    pagination: {
        el: '.our-nft-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.2,
        },
        1400: {
            slidesPerView: 3.999,
        },
    }
  
  });
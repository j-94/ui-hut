let config1 = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        767: {
            perView: 1
        },
        992: {
            perView: 2
        }
    }
};

new Glide('._testimonial_slider', config1).mount();
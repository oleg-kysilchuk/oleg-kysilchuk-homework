new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 4,
    gap: 30,
    keyboard: true,
    swipeThreshold: 100,
    animationDuration: 900,
    bound: 1,
    peek: { 
        before: 100,
        after: 0 
    },

}).mount()
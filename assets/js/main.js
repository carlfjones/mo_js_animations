document.querySelector("#btn").addEventListener('click', function() {
    const burst = new mojs.Burst({
        radius: { 0 : 360},
    }).play();
});

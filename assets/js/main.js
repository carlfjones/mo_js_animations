const btn1 = document.querySelector(".btn1");

const burst1 = new mojs.Burst({

    radius:   { 0: 100 },
    count:    5,
    children: {
      shape:        'circle',
      radius:       20,
      fill:         [ 'deeppink', 'cyan', 'yellow' ],
      strokeWidth:  5,
      duration:     2000
    }
  });

btn1.addEventListener('click', function (e) {
    burst1
    .tune({ x: e.pageX, y: e.pageY  })
    .play();
});


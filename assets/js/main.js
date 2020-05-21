const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// Bursts

const burst1 = new mojs.Burst({

    radius:   { 0: 80 },
    count:    5,
    children: {
      shape:        'circle',
      radius:       20,
      fill:         [ 'deeppink', 'cyan', 'yellow' ],
      strokeWidth:  5,
      duration:     2000,
    }
});


const burst2 = new mojs.Burst({
    radius: { 0 : 80 },
    count:   20,
    angle: { 0: 100 },
    children: {
        shape: 'cross',
        stroke: 'blue',
        strokeWidth: { 6 : 0},
        angle: { 360 : 0},
        radius: {10 : 5},
        duration: 3000,
   
    }
})

const burst3 = new mojs.Burst({
    radius: { 0 : 80 },
    count:   12,
    angle: { 0: 100 },
    children: {
        shape: 'zigzag',
        points: 4,
        stroke: {'magenta' : 'pink'},
        strokeWidth: { 6 : 0},
        angle: { 360 : 0},
        radius: {30 : 5},
        duration: 3000,
   
    }
})

const burst4 = new mojs.Burst({
    radius: { 0 : 100 },
    count:   12,
    angle: { 0: 100 },
    children: {
        shape: 'polygon',
        stroke: {'grey' : 'black'},
        strokeWidth: { 6 : 0},
        angle: { 360 : 0},
        radius: {30 : 5},
        duration: 3000,
   
    }
})

const burst5 = new mojs.Burst({
    radius: { 0 : 80 },
    count:   18,
    angle: { 0: 150 },
    children: {
        shape: 'cross',
        stroke: 'cyan',
        strokeWidth: { 6 : 0},
        angle: { 180 : 0},
        radius: {20 : 5},
        duration: 3000,
   
    }
})

const burst6 = new mojs.Burst({
    radius: { 40 : 0 },
    count:   40,
    angle: { 0: 150 },
    children: {
        shape: 'curve',
        stroke: 'cyan',
        strokeWidth: { 6 : 0},
        angle: { 180 : 0},
        radius: {20 : 5},
        duration: 3000,
   
    }
})

const burst7 = new mojs.Burst({
    radius: { 0 : 40 },
    count:   10,
    angle: { 0: 150 },
    children: {
        shape: 'rect',
        stroke: 'pink',
        strokeWidth: { 6 : 2},
        angle: { 180 : 0},
        radius: {5 : 20},
        duration: 2700,
   
    }
})

const circ_opt = {
    shape: 'circle',
    radius: {0:100},
    fill: 'none',
    stroke: 'yellow',
    duration: 2800,
    strokeWidth: {6:0},
    isShowEnd: false,
};

const circ1 = new mojs.Shape({
    ...circ_opt
})
const circ2 = new mojs.Shape({
    ...circ_opt,
    delay: 500,
})
const circ3 = new mojs.Shape({
    ...circ_opt,
    delay: 500,
    stroke: 'blue',
    duration: 1000,
    radius: {0:40}
})

//Event replays

btn1.addEventListener('click', function (e) {
    burst1
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();
});

btn2.addEventListener('click', function (e) {
    burst2
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {360:0}}  })
    .replay();
});

btn3.addEventListener('click', function (e) {
    burst1
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();
    burst2
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {360:0}}  })
    .replay();
});

btn4.addEventListener('click', function (e) {

    burst2
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {'-360':0}}  })
    .replay();
    burst3
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {360:0}}  })
    .replay();
    
});

btn5.addEventListener('click', function (e) {

    const timeline = new mojs.Timeline({
    })
    .add (
    burst4
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {'-360':0}}  }),
    circ1
    .tune({ x: e.pageX, y: e.pageY,}),
    circ2
    .tune({ x: e.pageX, y: e.pageY,}),
    burst5
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {360:0}}  })
    ).replay(); 
});

btn6.addEventListener('click', function (e) {

    const timeline = new mojs.Timeline({
    })
    .add (
    burst6
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {100:0} }}),
    burst7
    .tune({ x: e.pageX, y: e.pageY, children: {angle: {200:0} }}),
    circ3
    .tune({ x: e.pageX, y: e.pageY,}),
    ).replay();
    
});


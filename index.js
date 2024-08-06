const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2D');

const canvasoffsetX = canvas.offsetLeft;
const canvasoffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasoffsetX;
canvas.height = window.innerHeight - canvasoffsetY;

let ispainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if(e.target.id === 'clear'){
        ctx.clearRect(0,0,canvas.width, canvas.height);
    }
});

toolbar.addEventListner('change'), e => {
    if(e.target.id === 'stroke') {
        ctx.strokestyle =e.target.value;
    }

    if(e.target.id ==='lineWidth') {
        lineWidth = e.target.value;
}

};

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.linewidth = linewidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasoffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListner('mousedown', (e) => {
    isPainting = true;
    startx = e.clientX;
    startY = e.clientY;
});

canvas.addEventListner('mouseup' , e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListner('mousemove', draw);

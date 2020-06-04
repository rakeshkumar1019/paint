var mycolor = "red";
var mysize = 3;

function five() {
    mysize = 5;
}

function fiveteen() {
    mysize = 15;
}

function ten() {
    mysize = 10;
}

function thirteen() {
    mysize = 30;
}

function red() {
    mycolor = "red";
    mysize = 3;
}

function green() {
    mycolor = "green";
    mysize = 3;
}

function blue() {
    mycolor = "blue";
    mysize = 3;
}

function pink() {
    mycolor = "pink";
    mysize = 3;
}

function yellow() {
    mycolor = "yellow";
    mysize = 3;

}

function black() {
    mycolor = "black";
    mysize = 70;

}

window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");



    //resizing
    canvas.height = 560;
    canvas.width = window.innerWidth;

    //varaiables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = mysize;
        ctx.lineCap = "round";
        ctx.strokeStyle = mycolor;


        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);



    //event listener


});

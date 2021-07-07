canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var width = 2;

var mouseEvent = "empty";
var last_touch_x;
var last_touch_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("input_color").value;
    width = document.getElementById("input_width").value; 
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_mouse_x, last_mouse_y);
        ctx.lineTo(current_mouse_x, current_mouse_y);
        ctx.stroke();
    }

    last_mouse_x = current_mouse_x;
    last_mouse_y = current_mouse_y;
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_touch_x, last_touch_y);
    ctx.lineTo(current_touch_x, current_touch_y);
    ctx.stroke();

    last_touch_x = current_touch_x;
    last_touch_y = current_touch_y;
}
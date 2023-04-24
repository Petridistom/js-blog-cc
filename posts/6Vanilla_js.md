---
title: Vanilla JS
publish_date: 2023-04-24
disable_html_sanitization: true
---

I am now breaking away from p5 training wheels and I'm starting to write my script in vanilla JavaScript. Part of this process is to learn how to use the canvas API for generating a canvas like the setup ( ) function does in p5. Then redefining the draw ( ) function and using `requestAnimationFrame` to have the draw function call itself recursively. I will be getting into recursion more in a later post, as it is going to be important for my next project. This post is focusing on creating a workflow for drawing to a canvas in vanilla JavaScript, by following a tutorial as an example.

---
We start with some CSS at the top of our new script.js file;

```JavaScript
// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'
```

This removes padding on the sides of the window and stops the content from overflowing and showing scrollbars.

---
The second step is to create an HTML `<canvas>` element and add it to the body of the DOM, I also give it width and height using **.width** and **.height**. At the end, I create a new variavle `ctx`, which allows me to define the context of the canvas as **2d** 

```JavaScript
const cnv  = document.createElement('canvas');
cnv.width  = window.innerWidth
cnv.height = window.innerHeight
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')
```

In future, when I want to draw something to the canvas, I use `ctx.`. 

The setup ( ) function is now coded in and a canvas is generated.

---

## Recursion ##

To get the draw ( ) function working every frame, I need to use some recursion. Wie define a new function `draw_frame` and at the end of this function, I use the `requestAnimationFrame (draw_frame )` method to have the function call itself. This means that every time the `draw_frame` functions is called, it will finish its code and then call itself again, making it loop every frame. To initialise it we call `requestAnimationFrame ( )` before defining it. 

```javaScript
// pass in the name of the function
// requestAnimationFrame will call it
requestAnimationFrame (draw_frame)

// define the function you want
// requestAnimationFrame to call it
function draw_frame () {
    // add your code

    // call the next frame
    requestAnimationFrame(draw_frame)
}
```
Now I have boilerplate code for creating a canvas without using p5.

---

## Barnsley Furn ## 

In this example, I followed The Coding Train's coding challenge [#108](https://www.youtube.com/watch?v=JFugGF1URNo) from youtube and created a recursive barnsley furn in the p5 editior. 
<iframe width = 600 height = 642 src="https://editor.p5js.org/Petridistom/full/3EMadFnn6"></iframe>

To begin I rewrite the setup ( ) and draw ( ) functions in vanilla js and fill them in with the code from my p5 editor.

```JavaScript
// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'

let x = 0 // define new variables for point x and y
let y = 0 // to be used as coordinates

// create the canvas and define width and height
const cnv  = document.createElement('canvas');
cnv.width  = 600
cnv.height = 600
document.body.appendChild(cnv)

// create the context
// fill in the canvas with a black background
const ctx = cnv.getContext('2d')
ctx.fillStyle = 'black'
ctx.fillRect (0, 0, cnv.width, cnv.height) 

requestAnimationFrame (draw_frame)
function draw_frame () {

    for (let i = 0; i < 200; i++) { //do 200 times per frame
        drawPoint(); // new functions
        nextPoint(); // defined below
      }

    // call the next frame
    requestAnimationFrame(draw_frame)
}
```
Below I add in the functions I defined from the coding challenge turorial.

```JavaScript
function nextPoint () {
    let nextX
    let nextY
    
    let r = random(1)
    
    if (r <= 0.01) {
    // 1
    nextX =  0;
    nextY =  0.16*y;
    } else if (r > 0.01 && r <= 0.86) {
    
    // 2
    nextX =  0.85*x +  0.04*y;
    nextY = -0.04*x +  0.85*y + 1.6;
    } else if (r > 0.86 && r <= 0.93) {
    
    // 3
    nextX =  0.20*x + -0.26*y;
    nextY =  0.23*x +  0.22*y + 1.6;
    } else {
   
     // 4
    nextX = -0.15*x +  0.28*y;
    nextY =  0.26*x +  0.24*y + 0.44;
    }
    
    x = nextX
    y = nextY
  }

  function drawPoint() {
  stroke(255)
  strokeWeight(1)
  let px = map(x, -2.1820, 2.6558, 0, width)
  let py = map(y, 0, 9.9980, height, 0)
  point(px ,py);
}
```

The drawPoint ( ) and nextPoint ( ) functions are using some p5 conveniences so I need to translate them into vanilla JS. 
The random( ) method is changed to Math.random( ).
The map ( ) method does not have its own pre defined JS version and so I need to define a new function and do the math myself. The following was given to me by my teacher [Thomas Capogreco](http://thomas.capogre.co/)

```JavaScript
  function map (v, i_min, i_max, o_min, o_max) {
    const i_range = i_max - i_min
    const o_range = o_max - o_min
    const i_norm  = (v -i_min) / i_range
    return i_norm * o_range + o_min
  }
```
This delivers the same functionality as map ( ) does in p5 and I can keep the code for calling it in my draw_frame ( ) function the same. 

The final step is to adapt the code for drawing the points on the screen.
p5 allows you to draw a point at a coordinate using the point ( ) method, but vanilla JS cannot do this. To work around, I first define the color of the points using,

```JavaScript
ctx.fillStyle = 'white'
```
Then I use my new map ( ) function to generate the next point and use 

```JavaScript
ctx.fillRect (px ,py, 1, 1);
```
to draw a rectangle that is the size of one pixel at my new point.

---
My finished code now looks like this; 

```JavaScript
// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'

let x = 0
let y = 0

const cnv  = document.createElement('canvas');
cnv.width  = 600
cnv.height = 600
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')
ctx.fillStyle = 'black'
ctx.fillRect (0, 0, cnv.width, cnv.height) 

requestAnimationFrame (draw_frame)
function draw_frame () {
    for (let i = 0; i < 200; i++) { //do 200 times per frame
        drawPoint(); 
        nextPoint();
      }
    // call the next frame
    requestAnimationFrame(draw_frame)
}

function nextPoint () {
    let nextX
    let nextY
    
    let r = Math.random(1)
    
    if (r <= 0.01) {
    // 1
    nextX =  0;
    nextY =  0.16*y;
    } else if (r > 0.01 && r <= 0.86) {
    
    // 2
    nextX =  0.85*x +  0.04*y;
    nextY = -0.04*x +  0.85*y + 1.6;
    } else if (r > 0.86 && r <= 0.93) {
    
    // 3
    nextX =  0.20*x + -0.26*y;
    nextY =  0.23*x +  0.22*y + 1.6;
    } else {
   
     // 4
    nextX = -0.15*x +  0.28*y;
    nextY =  0.26*x +  0.24*y + 0.44;
    }
    
    x = nextX
    y = nextY
  }

  function drawPoint() {
    ctx.fillStyle = 'white'
    // strokeWeight(1)
    let px = map (x, -2.1820, 2.6558, 0, cnv.width)
    let py = map (y, 0, 9.9980, cnv.height, 0)
    ctx.fillRect (px ,py, 1, 1);
}

  function map (v, i_min, i_max, o_min, o_max) {
    const i_range = i_max - i_min
    const o_range = o_max - o_min
    const i_norm  = (v -i_min) / i_range
    return i_norm * o_range + o_min
  }

```
First written in p5 from the coding train tutorial and then translated successfully into vanilla JS. From now on I have boilerplate code for setting up a canvas and draw function in vanilla JS. 
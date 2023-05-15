---
title: Recursive Net Art
publish_date: 2023-05-2
disable_html_sanitization: true
---

This project on Internet Art is going to include some recursion. The project itself is going to be an abstract of a pond and the user will be able to throw sand into the pond, and listen to the beautiful sounds the sand makes when it lands on the water. I'm inspired to do this by the beautifully soft and healing sounds that sand makes when you throw a handfull over a pond. 

I have learnt how to make recursive functions in p5 from Coding Challenge [#77](https://www.youtube.com/watch?v=jPsZwrV9ld0) from The Coding Train on Youtube.

---
## Recursion ##

To represent the pond water, I will be drawing a recursive square and having multiple of them line the bottom of the page.

To start, I define a recursive function, recursive_square with parameters `x`, `y`, `s`;

```JavaScript
function recursive_square(x, y, s) {
  square(x, y, s)
  
  // end clause
  if (s > 2) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);    
  }
}
```
At the end, this function calls itself, making it a recursive function. But I do not want this to happen infinitely. Using a conditional if statement, I can write the function an end clause. This means that the code inside the function that calls itself, will only run if the condition s > 2 is true. 
```JavaScript 
if (s > 2) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);
}
```
 In the code that calls the function again, the value of `s` has math done to it to make it approach the end clause, so that eventually it will be less than 2 and the recursion will stop.

 Now if I call the recursive_square in the draw( ) function, it will draw a recurive square to the screen that looks like this;
 ```JavaScript
 function setup() {
  createCanvas(576, 324)
  rectMode(CENTER)
}

function draw() {
  background(0)

  stroke('deeppink')
  noFill()
  recursive_square(width/2, height/2, 100)
}

// define recursive square function
function recursive_square(x, y, s) {
  square(x, y, s)
  
  // end clause
  if (s > 16) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5);    
  }
}
 ```
 <iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/VgKY6zMmZ"></iframe>

---

To refine the detail, I add a new argument to the function allowing me to give each little square a length as well as a width, so that they can be drawn as rectangles and look a bit smoother. 
To do this I add `l` to the parameters, and set it to 4.
```JavaScript
function setup() {
  createCanvas(576, 324)
  rectMode(CENTER)
}

function draw() {
  background(0)
  
  stroke('deeppink')
  noFill()
  recursive_square(width/2, height/2, 100, 4)
}

function recursive_square(x, y, s, l) { // designs the squares that
                                        // display at the bottom
  
  // draw a rectangle with
  // given parameters
  rect(x, y, s, l)
  
  // state an end clause for
  // recursion in next code
  if (s > 16) {
    
    // draw a recursive
    // style square
    recursive_square(x + s *0.5, y + s*0.5, s *0.5, l);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5, l);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5, l);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5, l);    
  }
}
```
<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/SbyLPhPaK"></iframe>

The last thing I need to do is write a short looping function that draws this design across the bottom edge of the screen. 

```Javascript
function setup() {
  createCanvas(576, 324)
  rectMode(CENTER)
}

function draw() {
  background(0)
  
  stroke('deeppink')
  noFill()
  draw_RS()
}

function recursive_square(x, y, s, l) { // designs the squares that
                                        // display at the bottom
  
  // draw a rectangle with
  // given parameters
  rect(x, y, s, l)
  
  // state an end clause for
  // recursion in next code
  if (s > 16) {
    
    // draw a recursive
    // style square
    recursive_square(x + s *0.5, y + s*0.5, s *0.5, l);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5, l);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5, l);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5, l);    
  }
}

function draw_RS() { // displays the squares at
                     // the bottom of the screen
  
  // call the function 
  // recursive_squares at
  // each posx along
  //the bottom of the screen
  for (let posx = -150; posx < width +150; posx += 150) {
    
      // draws the recursive squares 
      recursive_square(posx, height, 150, 4)
  }
}
```

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/mC_Dt_Ajq"></iframe>
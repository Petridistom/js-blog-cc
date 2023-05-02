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
At the end, this function calls itself, making it a recursive function. But I do not want this to happen infinitely. Using a conditional if statement, I can write the function an end clause. This means that the recursive code inside the function will only run if the condition s > 2 is true. 
```JavaScript 
if (s > 2) {

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
  if (s > 15) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5);    
  }
}
 ```
 <iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/VgKY6zMmZ"></iframe>

---

To add detail, I want the recursive nature of the square to animate a bit, so that it moves around like a body of water does. 
To do this I randomise the end clause value for s between values 8 and 16. The result is this;
```JavaScript
function setup() {
  createCanvas(576, 324)
  rectMode(CENTER)
  frameRate(7.5)
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
  if (s > random(8,16)) {
    recursive_square(x + s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y + s*0.5, s *0.5);
    recursive_square(x - s *0.5, y - s*0.5, s *0.5);
    recursive_square(x + s *0.5, y - s*0.5, s *0.5);    
  }
}
```
<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/SbyLPhPaK"></iframe>

###### Note: I have reduced the frame rate of the render to slow down the animation ######
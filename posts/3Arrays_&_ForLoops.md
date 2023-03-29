---
title: Calling functions to objects in arrays
publish_date: 2023-03-19
disable_html_sanitization: true
---

I want to be able to have 80 circles on the screen without having to call each function 80 times, the way I achieve this is by starting a new empty array before the setup( ) function and name it circles.

```Javascript
let circles = [];
```

Now within the setup( ) function, I can use a boilerplate, for loop, to generate 80 circles with my desired inital parameters and send them into the circles[ ] array. 

```Javascript
  for(let i = 0; i < 80; i++) {
    circles[i] = new Circle (random (width), random (height), random (20, 40));
  }
```

From here I go outside draw( ) and setup( ) functions and define a new one called drawCircles( ), that I will later call in the draw( ) function.

Using another, for loop, I iterate over the length of the circles[ ] to make sure the loop ends after reaching the last circle in the circles[ ] array. For each `circle[i]` in the array, I call the functions from my Circle class.

```Javascript
  for(let i = 0; i < circles.length; i++) {
    circles[i].display ();
    circles[i].rise ();
    circles[i].findMouse ();
    circles[i].repel ();
    circles[i].portal ();
    }
```

This for loop will access each circle inside the circle[ ] array and call the functions to them, meaning that all 80 them separately will have their own properties and work independantly. Nice

---
In the following example I call 80 circles to the screen with varying initial positions and sizes.

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/KFheD9eE4"></iframe>


###### At the beginning of this stage while I was looking at way to do this, I was looking at the slides from my teacher and went to, and looked through their blog. I found a post called 'Improving the CSS Course Banner', this post has previous student examples of this assignment and I found [this](https://editor.p5js.org/reilivia/sketches/v-ln9OeoB) one by **reilivia** to be particularly useful for implementing the for loops. ######
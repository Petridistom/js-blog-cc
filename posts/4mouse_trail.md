---
title: Iterating a mouse trail
publish_date: 2023-03-24
disable_html_sanitization: true
---

The next feature I wanted to add to my code was a circle that follows the mouse and also leaves a trail behind it. 

<iframe width = 300 height = 442 src="https://editor.p5js.org/cassie/full/HJC08Is67"></iframe>

###### This example was found [here](https://editor.p5js.org/cassie/sketches/HJC08Is67) on p5 posted by the user **cassie**. ######

To start, they initialise two new variables a `mousePositions` array and `Max_POS` value set to 50.

Inside the draw( ) function they create a circle with x postion `mouseX` and y position `mouseY` so that it follows the mouse. Next they use a line of code to add the position of the circle into the `mousePositions` array. 

```Javascript
 mousePositions.push({x: mouseX, y: mouseY});
```

To determine how long they want the trail to be they use an if statement to check  if the length of the array exceeds the `MAX_POS` value.

```Javascript
  if (mousePositions.length > MAX_POS) {
  	 mousePositions.shift();
  }
```
the .shift( ) method removes any items in the array past the 50th position, determined by `MAX_POS`.

Then using a, for loop, they draw an ellipse at each `mousePosition` coordinate pair with dimensions i by i.

```Javascript
  for (let i = 0; i < mousePositions.length; i +=1) {
  	ellipse(mousePositions[i].x, mousePositions[i].y, i, i);
  }
```

This loop draws an amount of circles equal to the length of the `mousePositions` array, in increasing size, until it draws the final circle at the mouse with size equal to the `MAX_POS` value.

---

<iframe width  = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/nfwlhc2-q"></iframe>

I have adapted this code into my sketch and renamed the variables `mousePositions` to `trailPositions` and `MAX_POS` to `MAX_LENGTH` to avoid any confusion between variables that draw the trail and variables that draw the circles. I also have added my own style in the finished design.
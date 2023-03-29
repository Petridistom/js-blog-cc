---
title: Repel objects from the mouse
publish_date: 2023-03-11
disable_html_sanitization: true
---

The first and most important feature of this redesign is to have an object on the screen that is repelled away by  the mouse. That is our starting point for this design. 


```JavaScript
let maxDistEffect = 200; // Where you want the effect to start
let maxForce = 2; // The power of the effect
let dampening = 0.1; // The dampening effect

// properties of the square 
let rectSize = 100;
let position, velocity, acceleration;

let mousePosition;

function setup() {
  createCanvas(576, 324);
  rectMode(CENTER); // In order to work from the center of the square
  
  // Initializing the values of the square
  acceleration = createVector();
  velocity = createVector();
  position = createVector(width / 2, height / 2);
}

function draw() {
  background(220);
  
  mousePosition = createVector(mouseX, mouseY);

  // update the values
  acceleration = p5.Vector.sub(position, mousePosition).setMag(
    map(position.dist(mousePosition), 0, maxDistEffect, maxForce, 0, true)
  );
  velocity.add(acceleration);
  position.add(velocity.mult(1 - dampening));
  
  // draw the square
  rect(
    position.x,
    position.y,
    rectSize,
    rectSize
  );
  
  // OPTIONAL: bounce from the limits of the canvas
  bounce();
}

function bounce() {
  if (position.x - rectSize / 2 < 0) {
    position.x = rectSize - position.x;
    velocity.x *= -1;
  } else if (position.x + rectSize / 2 > width - 1) {
    position.x = 2 * (width - 1) - rectSize - position.x;
    velocity.x *= -1;
  }
  if (position.y - rectSize / 2 < 0) {
    position.y = rectSize - position.y;
    velocity.y *= -1;
  } else if (position.y + rectSize / 2 > height - 1) {
    position.y = 2 * (height - 1) - rectSize - position.y;
    velocity.y *= -1;
  }
}
```

<iframe width = 576 height= 366  src="https://editor.p5js.org/Petridistom/full/QYou8u3ME"></iframe>

The code from the above example was posted here on [Reddit](https://www.reddit.com/r/p5js/comments/qsyeks/how_to_make_object_move_away_from_cursor_with/) by user u/stntoulouse.

---
In order for the object (square) to be moved we assign it variables `position` `acceleration` and `velocity`
so that we can do math on them later. In the beginning, before setup(), we create new variables for the `dampening` effect, the distance we want the effect to start at `maxDistEffect`, and the strength of the force we want `maxForce`.

Before we can update the values of the square to make it move away from the mouse we first need to initialize it with starting `position`, `velocity` and `acceleration`. The position is arbitrary and set to the center of the canvas. Thee other two variables are set as empty vectors for now.

The last variable feature to add before updating the square's values is `mousePosition` we assign it a vector who's origin is always at the position of the mouse, since we want the force to start from here.

---

Now we can update the square's properties with the following code

```JavaScript
  acceleration = p5.Vector.sub(position, mousePosition).setMag(
    map(position.dist(mousePosition), 0, maxDistEffect, maxForce, 0, 
    true)
  );

  velocity.add(acceleration);
  position.add(velocity.mult(1 - dampening));
  
```

Here we have started by subtracting the vector `mousePosition` from the square's `position` vector. This gives us 
the **displacement** between, ie. a new vector that gives the place the force will come from, and which direction
it will push. 

We are then setting the magnitude of this **displacement** vector to a mapping, starting from 0 to the distance 
we want the effect to start at `maxDistEffect` (this makes the repel force 0 until the mouse gets close enough to the square, the `maxDistEffect` distance). And then starting from the `maxForce` value to 0 (this makes the repel force start at 0 and increase until it reaches the `maxForce` value, as the mouse moves closer to the square).

###### Note, the extra boolean argument in map() 'true', stops the object from orbiting the mouse at the `maxDistEffect` distance and allows the object to be left alone when the mouse is not near it. I do not know why this happens. ######

---

The last thing to do is draw the square with the following code:

```Javascript
  // draw the square
  rect(
    position.x,
    position.y,
    rectSize,
    rectSize
  );
```

###### Note, the code also includes a function called bounce() which makes the object bounce off the walls of the sketch so it is contained, I will not be adapting this into my own code. ######

---

I have taken this code and implemented a new function called portal(), that sends the object to the opposite side of the screen when it crosses an edge, turning the edges into portals. This is adds some complexity to the interaction for the final design.

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/5Rv-iF7yz"></iframe>

```Javascript
  //define a function called portal
  portal() {
    
    
    //check if the circles have crossed the left edge of the canvas.
    if (this.position.x < 0) {
      
    //if so send them to the right edge.
    this.position.x = width;
  } 
    
    
    //otherwise, check if the circles have crossed the right edge of the canvas.
    else if (this.position.x > width) {
      
    //if so, send them to the left edge.
    this.position.x = 0;
  }
    
    
    //check if the circles have crossed the bottom edge. 
    if (this.position.y > height) {
    
      //if so, send the circle to y = 20. 
      //sending them to the arbitrary y = 20 stops some glitching.
      this.position.y = 20;
    }
    
    //check if the circles have crossed the top edge.
    if (this.position.y < 0) {
    
      //if so, send the circles to the bottom of the screen
      this.position.y += height
    }
    
  } 
```

---

As it is right now, this code is not easily repeatable, if I want to add a second object or more I have to create repeated variables and write repeated sections of code for each new object that I want to display. In the next blog post I will be adapting this code into an object class and making it repeatable for my convenience.

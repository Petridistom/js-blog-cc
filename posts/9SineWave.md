---
title: Breathing Ball
publish_date: 2023-05-26
disable_html_sanitization: true
---
### Sine Waves as Diameter ###

For my community of practice, I will be generating a breathing ball visual for me and my girlfriend to synchronise our breathing with, for meditation. I have chosen my community of practice to be the yoga sessions I sometimes do together with my girlfriend. This breathing ball wll help us sync our breathing cycles together and keep us in the same rythm while we practice yoga. 

To begin, I delcare a `sig` variable for replacing the diameter argument when drawing a circle ( ) in p5. 

In the draw function;
```javascript
let sig = sin (frameCount * TWO_PI / 360)
```

`sin (frameCount * TWO_PI / 360)` returns a value between -1 and 1. That is incremented by time (frameCount),and by a factor of TWO_PI / 360. This makes the value of sig move back and forth between -1 and 1, (around the unit circle) as the frameCount goes up. This is what makes the circle breath. 

`frameCount * TWO_PI` is the amplitude for the wave, and `360` is the period. 

Because the frameRate of the canvas is set to 24 frames per second. The period `360` divided by the frameRate `24` gives `(360 / 24) = 15` seconds per trip aroud the unit circle. Making one breathing cycle last 15 seconds long.

---

At this point if we use `sig` as the diameter of the circle, its size will only range from -1 to 1. I want to affect this range so that the circle can start and finish at larger values. 

In the code;

```javascript
// incrementing the vale of sig will change its range

// increment by 1
sig += 1   // gives [ 0 , 2 ]

// multiply by 100
sig *= 100 // gives [ 0 , 200 ]

// increment by 10
sig += 10  // gives [ 10 , 210 ]
```
This means that the circles size will now range from 10 to 210 instead of -1 to 1

---

So, now when I draw a circle with sig as the diameter, we get this animation.

Here is an example where the range has been edited to [ 10, 210 ]

```javascript
function setup() {

  // create a canvas 576 by 324 pixels
  createCanvas(576, 324);
  
  // removes stroke
  noStroke ()
  
  // set the frameRate to 24 fps
  frameRate (24)
}

function draw() {
  
  // set the background black
  background(0);
  
  // set a variable `sig` to the sin of frameCount * 2PI / 360
  let sig = sin (frameCount * TWO_PI / 360) // [ 0, 1 ]
  // (360 / 24 fps) = 15s seconds per breath cycle
  
  // incriment sig to affect its range
  sig += 1   // [ 000 , 002]
  sig *= 100 // [ 000 , 200]
  sig += 10  // [ 010 , 210]
    
  // set fill to deeppink
  fill('deeppink')
  
  // draw a circle at the center of the screen
  // with diameter of `sig`
  ellipse ( width / 2, height / 2, sig)
}
```
<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/2w5pFqYp4"></iframe>

###### Note: The code for this example was written for and taught to me by my teacher [Thomas Capogreco](https://thomas.capogre.co/). ######
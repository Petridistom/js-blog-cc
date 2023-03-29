---
title: Color and text
publish_date: 2023-03-25
disable_html_sanitization: true
---

To spice up and personalise my design I will be using 
```Javascript
colorMode(HSB)
```
with the `frameCount` variable to add color animation to the circles and to the trail following the mouse.

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/ENBLQZGas"></iframe>

---
The final touches to be made are to add text to the screen that shows RMIT Creative Coding Specialisation. 

The text is not the main focus of this design and so it will just be simple in design, a font and color animation to have it fit its style be cohesive

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/WOTpTje1j"></iframe>

The text is displayed behind the circles and so to maintain contrast between the text and the circles, the `frameCount` variable is halved so that the text color rarely matches the circles color, with one exception at `frameCount = 0` this keeps the text a bit more readable than without it.

---

All the design pieces are now complete and have been put together [here](https://editor.p5js.org/Petridistom/sketches/AKnfm3WN0). 

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/AKnfm3WN0"></iframe>

###### I added small feature that uses the variable `clickiplier` and a new function mousePressed() {} to make the `frameCount` jump by 50 frames to make the colors skip when the mouse is pressed ######

```Javascript
function mousePressed () {
  frameCount += clickiplier;
}
```

In the next blog post I will start a new project on Net Art. 
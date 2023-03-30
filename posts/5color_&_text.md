---
title: Color and text
publish_date: 2023-03-25
disable_html_sanitization: true
---

To spice up and personalise my design I will be using,
```Javascript
colorMode(HSB)

and 

fill(frameCount % 360, 25, 100)
```
To add color animation to the circles and mouse the trail.

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/ENBLQZGas"></iframe>

---
The final touches are to add text to the screen that shows RMIT Creative Coding Specialisation. The text is not the main focus of this design and so it will just be simple in design, a font and color animation to have its style be cohesive

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/WOTpTje1j"></iframe>

The text is displayed behind the circles. To maintain contrast between the text and the circles, the `frameCount` variable is halved in the text fill( ) so that its color rarely matches the circles color, with one exception at low `frameCount` values. This keeps the text more readable than without it.

---

All the design pieces are now complete and have been put together [here](https://editor.p5js.org/Petridistom/sketches/AKnfm3WN0). 

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/AKnfm3WN0"></iframe>

###### I added small feature that uses the variable `clickiplier` and a new function called mousePressed( ) { } to make the `frameCount` jump by 50 frames so the colors skip when the mouse is pressed. ###### 

```Javascript
function mousePressed () {
  frameCount += clickiplier;
}
```

In the next blog post I will start a new project on Net Art. 
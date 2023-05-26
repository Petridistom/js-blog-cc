---
title: Sand
publish_date: 2023-05-03
disable_html_sanitization: true
---
### Sand particles ###

The next feature for the Pond is an object class for Sand particles that will spawn with the mouse held down and slowly fall down the screen. 

I create the object class for the sand using the same class object technique as from [post 2](https://petridis-js-blog-cc.deno.dev/2OOP) in this blog.

---

I construct the sand with parameters `x` `y` `s` in a separate Sand.js file and set them to this.variables for the functions defined below, with new variables this.r and this.d for transformations later.

```Javascript
class Sand {
  // define properties
  // of each granule
  constructor (x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.d = 0;
    this.r = 0;
  }
```

A simple display( ) function is all that is necessary to draw each particle.

```Javascript
display() {
    // stye and draw
    // each granule
    noStroke()
    fill(255)
    rect(this.x, this.y, this.s, this.s)
  }
```
At this point, in the sketch.js file, I set up an empty granules = [ ] array to hold the sand particles, and set a `maxLength` variable equal to 100, to determine the maximum amount of sand granules that can be displayed at once. 

```Javascript
// assign empty array to `granules`
let granules = [];

// set max amount of sand
const maxLength = 100;
```

Outside of the draw function, I define a new function called spawnSand( ), that has all of its code nested in an if statement, if (mouseIsPressed) { }. This means that the code inside the spawnSand fuction only runs when the mouse is being held down. 

If the mouse is being pressed, then I want a new Sand object to be created at the mouse position, 2 pixels large and stored in the granules array. As follows;

```Javascript
if (granules.length < maxLength) {
      // make a new sand granule,
      // & add it to the 'granules' array
      granules.push (new Sand (mouseX, mouseY, 2))
    }
  }
```
Below, I check the length of the granules array to see if it has reached the max value, and then execute .shift( ) to remove older Sand objects. 

```Javascript
// removes older granules so
  // new ones can spawn
  if (granules.length === maxLength) {
    granules.shift()
  }
```

The last thing to do for inside the spawnSand( ) function is to iterate over each granule array item and run the functions from the Sand class object. As follows;

```Javascript
    // use the .forEach () array method
    // to pass each granule, one at a time,
    // as an argument into the g function
    granules.forEach ((g) => {
      
    // run functions from
    // sand class object
    g.display ()
    // g.move ()
  })
```

###### the g.move( ) function is coded out for now until I write it later on in this post. ######

Using the .forEach( ) method to access each granule in the array, and an arrow function defined to run the Sand object's functions, for each Sand object in granules.

---

With all this, I call the spawnSand( ) function inside the draw( ) function, to have it run once every frame, giving the following results;

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/6QonEB9Ya"></iframe>

---

To get the particles acting like real sand, I define a new constructor function inside the Sand class object.  A move( ) function that first generates a random number from 0 to 1, and then checks that number in conditional statements to see on each frame which transformation to make to a single granule. 

Start with;

```Javascript
move() {
    
    // get random decimal
    this.r = random(1)
    
    // 50 percent chance 
    // transformation 1 runs
    if (this.r > 0.5){

    }
    
    // 50 percent chance 
    // transformation 2 runs
    if (this.r < 0.5) {

    }
  }
}
```

The above move ( ) function has two different ways to run, and either way has a 50% of running per frame, one at a time. 

I fill in the if statements with transformation code to make the particles move. 

```Javascript
move() {
    
    // get random decimal
    this.r = random(1)
    
    // 50 percent chance 
    // transformation 1 runs
    if (this.r > 0.5){
      //1 
      if (0 <= this.d && this.d <= 10) {
        this.x += random(-2,2);
        this.d ++
      }
      if (this.d >= 10) {
        this.d = 0
      }
    }
    
    // 50 percent chance transformation
    // 2 runs
    if (this.r < 0.5) {
      //2
      this.y += 3
    }
  }
```

Transformation 1, will do 1 of 2 things depending on the value of `this.d`. Starting at `this.d = 0`, `this.x` is updated by a random value between -2 and 2, so that the particles move side to side a bit while falling.  Once `this.d` = 10, it is reset back to zero.

Transformation 2, will increase the `this.y` value of the particles by 3 pixels, each time it runs, making them flow down the page.

After uncommmenting the g.move( ) line in the sketch.js file, I get the following result;

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/Jtxe5Oy0A"></iframe>
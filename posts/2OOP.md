---
title: Object oriented programming
publish_date: 2023-03-15
disable_html_sanitization: true
---

###### From now on, instead of refering to 'objects', I will be calling them circles because that is what the objects will be in the final design. ######

---

In order to be able to display as many circles as I want on the screen and have each be their own
entity that interacts with the mouse, I define their properties outside of the main sketch.js file in a new file called Circle.js and create a new object class named Circle. I use this new class to construct the properties of each circle that I will be doing the math to, and then following with the functions that do the math.

###### This [blog](http://thomas.capogre.co/rmit/ccs/2022/09/06/classes.html) post written by my teacher was useful for understanding this concept and applying object oriented programming to my code. ######

I create the constructor as follows:
```Javascript
  //define parameters positionx, positiony 
  //and size for the construction of each circle
  constructor(posx, posy, size) {
    
    //create a circle size variable
    //set its value to the size parameter
    this.circlesize = size;
    
    //create a postion variable
    //set its value to be a vector with
    //origin coordinates at the parameters posx and posy
    this.position = createVector(posx, posy);
    
    //create a velocity variable and set its
    //value to be a vector with no origin
    this.velocity = createVector();
    
    //create an acceleration variable and set its
    //value to be a vector with no origin
    this.acceleration = createVector();
    
    //create max distance variable and set it to 100
    this.maxDistEffect = 100; 
    
    //create a max force variable and set it to 3
    //this is the repel force
    this.maxForce = 3;
    
    //create a dampening force variable and set it to 0.1
    //this slows down the circles after theyre repelled
    this.dampening = 0.1; 
    
    //create a yspeed variable that determines how fast
    //each circle will rise up
    //make it random between -1.5 and 0
    this.yspeed = random(-1.5, 0)
    
  } 
```

The variables `position`, `velocity`, `acceleration`, `maxDistEffect,` `maxForce` and `dampening` have been moved into the constructor and given the prefix 'this.' so that they are recognised locally inside of the class for when using them in the functions. I have also added new variables `this.circlesize` and `this.yspeed` so that I can have circles of varying size and moving upwards at varying speed. The constructor also has input parameters **posx**, **posy** and **size**, these inputs allow each circle to be initialised with varying positions and sizes on the screen, determined from inside the sketch.js file.

---

With the variables moved into the Circle.js file, I can now copy over the code that updates the position of each circle and puts it into separate defined functions that I can later call inside the sketch.js file.

###### In order for things to work, the Circle.js file needs to be linked to the html file in the p5 sketch. Typing `<script src=Circle.js></script>` in the body section of the html, links Circle.js file.

---

I define new functions:

```Javascript
display() {
        circle( 
      this.position.x,
      this.position.y,
      this.circlesize
    );
}

findMouse() {
this.mousePosition = createVector(mouseX, mouseY);
}

repel() {
...
}

rise() {
this.position.y += this.yspeed
}

portal() {
...
}
```
###### The repel and portal functions are too large to show and can be found behind the embedded p5 sketch below, inside the Circle.js file.

It is important when copying over the code that every variable is renamed to the local version by adding **this.** infront of them, otherwise things will not work. 

---

Now that I have adapted the code into an object class, I have written Object Oriented Programming (OOP) and  I can return to our sketch.js file to call as many objects as I like.



In the following example I draw two separate circles using the class object method. Each can seperately interact with the mouse.

<iframe width = 576 height = 366 src="https://editor.p5js.org/Petridistom/full/SfTV0PWAJ"></iframe>

I draw each circle to the screen by defining a new variable inside the setup( ) function, `circle1` and `circle2` for each and set this variable equal to a new **Circle** with my own starting values for the **posx**, **posy** and **size** parameters. ie 

```Javascript
circle1 = new Circle (width /3, height /2, 100);

circle2 = new Circle (width*2 /3, height /2, 100);
```
 Then inside the draw( ) function, I call to each circle, the functions that are defined inside the Circle class.

 ```Javascript
  circle1.display();
  circle1.findMouse();
  circle1.repel();
  circle1.rise();
  circle1.portal();
  
  circle2.display();
  circle2.findMouse();
  circle2.repel();
  circle2.rise();
  circle2.portal();
 ```

With this method I still have some repeating code. For the next blog post, I will look at how to add the circles into an array and how to call each function to each circle by just calling them once.
/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Thomas' Blog",
  description: "Welcome to my JavaScript adventures.",
   //header: <header>Creative JavaScript</header>,
   //section: <section>Your custom section</section>,
   //footer: <footer>Thomas P</footer>,
  avatar: "images/rainbow-road.jpg",
  avatarClass: "rounded-full",
  author: "Petridis Tom",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});

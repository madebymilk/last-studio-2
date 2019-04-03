/*jshint esversion: 6 */

//Example
//bodyTag.style.backgroundColor = "green";
//bodyTag.innerHTML = "Hi I'm Javascript your site is ruined";

// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body

// Step 1: Decide which tags in html we want to use & save them as constants at the top of the page
const bodyTag = document.querySelector("body");

// Step 2: Decide which user events ie, click, scroll, etc, we want to trigger our code on. Here we want to listen out for any scroll events on our page
document.addEventListener("scroll", function() {

  // Do something when the page is scrolled
  // console.log("Page has been scrolled! Wooo!");

  //Step 3: Find out and store how far from the top of the page the scrollbar is
  // Use window when referring to the scrollbar is it is on the browser frame
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // If the distanceFromTop is greater than 1000 pixels, do something

  if (distanceFromTop > 1000) {
    // do this
    //console.log("More than 1000 pixels");
    // bodyTag.style.backgroundColor = "red";

    bodyTag.classList.add("brogue-active");

  } else {
    // do something else
    //console.log("Less than 1000 pixels");
    // bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4400) {
    // do this
    //console.log("More than 1000 pixels");
    // bodyTag.style.backgroundColor = "red";

    bodyTag.classList.add("stationary-active");

  } else {
    // do something else
    //console.log("Less than 1000 pixels");
    // bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("stationary-active");
  }
});

// Lightbox
// When we click on an image
// We want to show the lightbox
// Inside the lightbox we want to show the image we clicked on
// When we click on the lightbox we want it to disappear

// Step 1: Decide which tags in HTML we want to use and save them in constants

// Save all of our images into a constant - this will be a list of images
const images = document.querySelectorAll("section img");
// Save the lightbox from our html inside a constant
const lightbox = document.querySelector(".lightbox");
// Save the lightbox image from our html inside a constant
const lightboxImage = document.querySelector(".lightbox img");


// Let's look at what's saved in images
console.log(images);

// Our images constant contains a list of images. We want to add an event listener to each image. To do this we use a loop. In javascript this is called a forEach function. It loops through all of our images & applies the same code.

images.forEach(image => {

  // Step 2: Add a click event listener to all of our images
  image.addEventListener("click", function() {

    console.log("image clicked!");
    //Step 3: Show the lightbox
    lightbox.classList.add("fadeIn");
    //Step 4: Show the right image
    // Save the image src attribute from the image we click on
    // The keyword "this" references the image we have clicked on - THIS image. .getAttribute allows us to store an attribute. We want the src attribute because it contains the image location.
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    // Set the lightbox image src attribute to the one we save
    lightboxImage.setAttribute("src", imageSrc);

  });

});

// Step 4 When we click on the lightbox, remove the fadeIn class

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});
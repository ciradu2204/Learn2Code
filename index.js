 
// showSlides function
// source: w3school https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

var slideIndex = 0; // creating and initializing the slideIndex var which stores the number of looping
showSlides();// call the showslide function
var i; // creating an index(i) var to use in the loop

function showSlides(){
    var slides= document.getElementsByClassName("mySlides"); // this variable stores an array of 2 images
    for(i=0; i<slides.length; i++){ // repeat for every image in the slides array
        slides[i].style.display ="none"; // each image is displayed none     
    } 
    slideIndex++; // after each looping, increment by one the slideIndex variable
    if(slideIndex>slides.length){slideIndex= 1} // everytime the slideIndex var is greater than two, it is reset back to 1;
    slides[slideIndex-1].style.display="block"; // The slideIndex is used to know which image is displayed block while the other is still none
    setTimeout(showSlides,10000); // the showSlides should be called gain after every 10 seconds
}







 

 
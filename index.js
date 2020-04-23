 
//  showSlides function
// w3school https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
var slideIndex = 0;
showSlides();
var i;
var  p = document.getElementsByClassName("title");

function showSlides(){
    var slides= document.getElementsByClassName("mySlides"); 
    for(i=0; i<slides.length; i++){
        slides[i].style.display ="none";
        
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex= 1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,10000);

  
}

function showMsg(){
    document.getElementsByClassName("msg").style.display="block";
}



// function changeTitleBack(){
//     var next = document.getElementById("NextIcon");

//        for(i=3; i<= p.length;i--){
//         document.querySelectorAll("p").item = i;

//         }
              
// }


// function changeTitleNext(){
//     // var back = document.getElementById("backIcon");
//     for(i=0; i<=p.length;i++){
//         var result = p[i].innerHTML;
//         document.getElementById('demo').innerHTML= result;
//         console.log(p[i]);
//     }
// }
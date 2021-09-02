// function for toggle navbar

function myFunction(){
    var m=document.querySelector(".menu-after-toggle");
    if(m.classList.contains('menu-after-toggle-visible')){
        m.classList.remove("menu-after-toggle-visible");
    }
    else{
        m.classList.add("menu-after-toggle-visible");
    }
   
}

//function for counter up

$('.count').counterUp({
    delay: 10,
    time: 1500
});



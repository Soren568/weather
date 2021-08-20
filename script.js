// Completed: Remove cookies "alert" box
// NOT COMPLETED Bonus: Change temperatures from celsius to Fahrenheit 

function cookieRemove(elem){
    elem.parentNode.remove(elem);
}

function changeTemp(){
    var high1 = document.querySelector(".high1");
    var low1 = document.querySelector(".low1");
    var high2 = document.querySelector(".high2");
    var low2 = document.querySelector(".low2");
    var high3 = document.querySelector(".high3");
    var low3 = document.querySelector(".low3");
    var high4 = document.querySelector(".high4");
    var low4 = document.querySelector(".low4");
    var tempValue = document.querySelector(".temp-dropdown").value;
    if(tempValue == "F"){
        high1.innerText = "75°"
        low1.innerText = "65°"
        high2.innerText = "80°"
        low2.innerText = "66°"
        high3.innerText = "69°"
        low3.innerText = "61°"
        high4.innerText = "78°"
        low4.innerText = "70°"
    }
}
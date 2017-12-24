
/* global document: false, prompt:false, localStorage:false, window:false */


var myImage = document.querySelector("img");





myImage.onclick = function()
{
    var mySrc = myImage.getAttribute("src");
    
    if (mySrc === "images/test-carrot.png")
    {
        myImage.setAttribute("src", "images/circle.png");
    }
    else 
    {
        myImage.setAttribute("src", "images/test-carrot.png");
    }
}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");
var number2 = 0;

var minusNumber = -1;

var numberSave;

function setUserName() 
{
    
    
    var myName = prompt("Please enter your name.");
    
    if (myName.length > 24)
    {
        alert("That name was too long, max 24 keys");
        
        return;
    }
    
    if (number2 > 0)
    {
        myHeading.style.fontSize = (numberSave+number2) + "px";  
        
        number2 = 0;
    }
    
    
    
    var number = parseInt (window.getComputedStyle(myHeading, null).getPropertyValue("font-size"));
    var length = myName.length;
    
    
    
    if (length > 7)
    {
         myHeading.style.fontSize = number - (length - minusNumber) + "px";  
        number2 = number2 + (length-minusNumber);
      
        numberSave = number - (length - minusNumber);
        
    }
    
  
    
    localStorage.setItem("name", myName);
    myHeading.textContent = myName;
    
    
   

}

if (!localStorage.getItem("name"))
    {
        setUserName();
    }
else
    {
        var storedName = localStorage.getItem("name");
        
        var length = storedName.length;
        var number = parseInt (window.getComputedStyle(myHeading, null).getPropertyValue("font-size"));
        
        
        if (length > 7)
    {
         myHeading.style.fontSize = number - (length - minusNumber) + "px";  
        
        number2 = number2 + (length-minusNumber);
      
        numberSave = number - (length - minusNumber);
    }
        
        
        
        myHeading.textContent = storedName;
    }

myButton.onclick = function()
{
    setUserName();
}

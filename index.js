
function randomNumberGen(){
if(attempt>=1){
  alert("Your soul animal is "+animalName[randomNumbers]);//for avoiding multiple try
}
else{
var userName = prompt("Enter Your Name here");

while(userName.length <=3){                          //checking the string value for assured name input from User
  var userName = prompt("Please Enter Your Name, more than 3 charecters are required");
  }


 randomNumbers = Math.floor(Math.random() * 25)+1;//adding 1 to resolve the 0 issue.
document.querySelector("img").setAttribute("src", "./images/"+randomNumbers+".png");// setting the image url
document.getElementsByClassName("animal-text")[0].innerHTML = "Hey! "+userName+ ", " +animalName[randomNumbers] + " is your soul animal!";
attempt++;

}
}
var animalName = [" ","Deer", "Crocodile","Gold Fish","Baby Zebra","baby Elephant",
                  "Horse", "Owl", "Rihno", "Baby Tiger","Hippo",
                  "Pigeon", "Unicorn", "Giraffe", "Puppy",
                  "Cow", "Kitten","Baby Goat", "Baby Chimp",
                  "Baby Lion", "Monkey","Peacock", "Red Panda", 
                  "Panda", "Bear", "Black Panther"];

 var attempt = 0;
 var randomNumbers;
document.getElementsByClassName("btn")[0].addEventListener("click", randomNumberGen); 


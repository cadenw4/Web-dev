// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */

function Area(){
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let msg = document.getElementById("msg");
  let areaf = length * width;
if (areaf > 0){
  msg.innerHTML = "The area is " + areaf;
}
else{
  msg.innerHTML = "Inappropriate measurement"
}
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output").value;
  let picture = "";
  output.innerHTML = `<img src="${picture}">`;

  if (animal == "Bear" && emotion == "Funny"){
    picture =  "WDUnit4/WDLesson4_2Practical/funnyBear.jpg";
  }

}
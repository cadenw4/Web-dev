/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element


*/


function recPerimeter(){
      let rn1 = document.getElementById("number1");
      let rn2 = document.getElementById("number2");
      let RPO = document.getElementById("RectPerimeterOutput");
    let RPerimeter = (parseFloat(rn1.value) * 2) + (parseFloat(rn2.value) * 2); 

RPO.innerHTML = RPerimeter;
}

function recArea(){
      let rn11 = document.getElementById("number12");
      let rn22 = document.getElementById("number21");
      let RAO = document.getElementById("RectAreaOutput");
      let RArea = parseFloat(rn11.value)*parseFloat(rn22.value);
      RAO.innerHTML = RArea;
}



/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){


function cirPerimeter(){
let cn1 = document.getElementById("radius");
let Cresult = document.getElementById("Ccircumfrence")
let Cform = 2*parseFloat(cn1.value)*pi
Cresult.innerHTML = Cform;
}
}


/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}
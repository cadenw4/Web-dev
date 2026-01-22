/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function distance(){
      let dx1 = parseFloat(document.getElementById("dnx1").value)
      let dx2 = parseFloat(document.getElementById("dnx2").value)
      let dy1 = parseFloat(document.getElementById("dny1").value)
      let dy2 = parseFloat(document.getElementById("dny2").value)
      let dd = document.getElementById("DOutput")
      let dv = Math.sqrt(Math.pow(dx2 - dx1, 2) + Math.pow(dy2 - dy1, 2));
      dd.innerHTML = "Your distance between the two points is: " + dv + " units"

}
/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function comp(){
      let P = parseFloat(document.getElementById("bal").value)
      let N = parseFloat(document.getElementById("app").value)
      let T = parseFloat(document.getElementById("time").value)
      let R = parseFloat(document.getElementById("rate").value)
      let cc = document.getElementById("Coutput")
      let cv = P*Math.pow(1+(R/N), (N*T))
      cc.innerHTML = "Your balance will be" + cv + " dollars"

}


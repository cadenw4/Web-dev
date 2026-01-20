// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
    let grade1 = parseFloat(document.getElementById("G1").value);
    let grade2 = parseFloat(document.getElementById("G2").value);
    let grade3 = parseFloat(document.getElementById("G3").value);
    let avg = (grade1 + grade2 + grade3)/3
    let AvgOutput = document.getElementById("AvgResult")
    AvgOutput.innerHTML = "Average is " + avg
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
        let x1 = parseFloat(document.getElementById("xx1").value);
        let x2 = parseFloat(document.getElementById("xx2").value);
        let y1 = parseFloat(document.getElementById("yy1").value);
        let y2 = parseFloat(document.getElementById("yy2").value);
        let slopeF = (y2-y1)/(x2-x1)
        let slopeOutput = document.getElementById("SlopeO")
        slopeOutput.innerHTML = "The slope is " + slopeF
        }


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function BMI(){
        let BMIW = parseFloat(document.getElementById("lb").value);
        let BMIH = parseFloat(document.getElementById("in").value);
        let BMIF = (BMIW/(BMIH*BMIH))* 703
        let BMIO = document.getElementById("MIBR")
        BMIO.innerHTML = "Your BMI is " + BMIF
        }

function X(){
    let AA = parseFloat(document.getElementById("A1").value);
    let BB = parseFloat(document.getElementById("B2").value);
    let CC = parseFloat(document.getElementById("C3").value);
    let root1 = (-BB + Math.sqrt(discriminant)) / (2 * a);
    let AvgOutput = document.getElementById("AvgResult")
    AvgOutput.innerHTML = "Average is " + avg
}
async function init(){

  let link = "motorvehicle.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

for(let i=0; i < data.length; i+= 1){
  let collisions = data[i]
  build += `<div class ="fitted card">
  <h2>${collisions.on_street_name}</h2>
  <h2>${collisions.off_street_name}</h2>
  <br>
  <h4>${collisions.contributing_factor_vehicle_1}</h4>
  <h4>${collisions.contributing_factor_vehicle_2}</h4>
  <br>
   <h4>${collisions.crash_date}</h4>
  <h4>${collisions.crash_time}</h4>
  </div>`
}


  output.innerHTML = build;

}

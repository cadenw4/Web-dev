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
  <br>
  <p>People Injured: ${collisions.number_of_persons_injured}</p>
  <p>People Killed: ${collisions.number_of_persons_killed}</p>
  <p>Pedestrians Injured: ${collisions.number_of_pedestrians_injured}</p>
  <p>Pedestrians Killed: ${collisions.number_of_pedestrians_killed}</p>
  <p>Cyclists Injured: ${collisions.number_of_cyclist_injured}</p>
  <p>Cyclists Killed: ${collisions.number_of_cyclist_killed}</p>
  <p>Motorists Injured: ${collisions.number_of_motorist_injured}</p>
  <p>Motorists Killed: ${collisions.number_of_motorist_killed}</p>
  </div>`
}


  output.innerHTML = build;

}

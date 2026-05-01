async function init(){

  let link = "motorvehicle.json"
  info = await fetch(link);
  data = await info.json();
  let injured = parseFloat(document.getElementById("injury")).value;
  let output = document.getElementById("output");
  let build = "";



  for(let i = 0; i < data.length; i+=1){

    let collisions = data[i];
      if(collisions.on_street_name == null){
  collisions.on_street_name = ""
}
  if(collisions.off_street_name == null){
  collisions.off_street_name = ""
}
    build += `<div class="fitted card">
                 <h2>${collisions.crash_date} ${collisions.crash_time}</h2>
                 <h3>${collisions.on_street_name}</h3>
                 <hr>
                 <p>${collisions.off_street_name}</p>
                 <p>People Injured: ${collisions.number_of_persons_injured}</p>
                 <p>People Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_2}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterBySt(){
  let output = document.getElementById("output");
  let street = document.getElementById("st").value;
  let injured = parseFloat(document.getElementById("injury")).value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
      if(collisions.on_street_name == null){
  collisions.on_street_name = ""
}
if(collisions.off_street_name == null){
  collisions.off_street_name = ""
}
    if (street == collisions.on_street_name){
    build += `<div class="fitted card">
                 <h2>${collisions.crash_date} ${collisions.crash_time}</h2>
                 <h3>${collisions.on_street_name}</h3>
                 <hr>
                 <p>${collisions.off_street_name}</p>
                 <p>People Injured: ${collisions.number_of_persons_injured}</p>
                 <p>People Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_2}</p>
              </div>` 
              ct +=1   
  }

  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
}

function filterByInj(){
  let output = document.getElementById("output");
  let street = document.getElementById("st").value;
  let injured = (document.getElementById("injury")).value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
        if(collisions.on_street_name == null){
  collisions.on_street_name = ""
}
  if(collisions.off_street_name == null){
  collisions.off_street_name = ""
}
    if (injured == collisions.number_of_persons_injured){
    build += `<div class="fitted card">
                 <h2>${collisions.crash_date} ${collisions.crash_time}</h2>
                 <h3>${collisions.on_street_name}</h3>
                 <hr>
                 <p>${collisions.off_street_name}</p>
                 <p>People Injured: ${collisions.number_of_persons_injured}</p>
                 <p>People Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_2}</p>
              </div>`

              ct +=1    
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
}

function filterByBoth(){
  let output = document.getElementById("output");
  let injured = document.getElementById("injury").value;
  let street = document.getElementById("st").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
        if(collisions.on_street_name == null){
  collisions.on_street_name = ""
}
  if(collisions.off_street_name == null){
  collisions.off_street_name = ""
}
    if (injured == collisions.number_of_persons_injured && street == collisions.on_street_name){
    build += `<div class="fitted card">
                 <h2>${collisions.crash_date} ${collisions.crash_time}</h2>
                 <h3>${collisions.on_street_name}</h3>
                 <hr>
                 <p>${collisions.off_street_name}</p>
                 <p>People Injured: ${collisions.number_of_persons_injured}</p>
                 <p>People Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_2}</p>
              </div>`    
              ct +=1
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;

}
}


function reset(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let build = "";
for(let i = 0; i < data.length; i+=1){
    let collisions = data[i];
        if(collisions.on_street_name == null){
  collisions.on_street_name = ""
}
  if(collisions.off_street_name == null){
  collisions.off_street_name = ""
}
    build += `<div class="fitted card">
                 <h2>${collisions.crash_date} ${collisions.crash_time}</h2>
                 <h3>${collisions.on_street_name}</h3>
                 <hr>
                 <p>${collisions.off_street_name}</p>
                 <p>People Injured: ${collisions.number_of_persons_injured}</p>
                 <p>People Killed: ${collisions.number_of_persons_killed}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${collisions.contributing_factor_vehicle_2}</p>
              </div>`    

  }
  output.innerHTML = build;
  result.innerHTML = ""
}





function filter(){
  let output = document.getElementById("output");
  let injured = document.getElementById("injury").value;
  let street = document.getElementById("st").value;
 
    if(injured == "" && street != ""){
      console.log("Street")
      filterBySt()
    }else if(injured != "" && street == ""){
      console.log("Injury")
      filterByInj()
    }else if(injured != "" && street != "" ){
      console.log("Both")
      filterByBoth()
    }
    else if(injured=="" && street ==""){
      console.log("reset")
      reset()
    }
  // if(injured == "" && street == collisions.on_street_name){
  //   filterBySt()}
  //   else if (injured == collisions.number_of_persons_injured && street == ""){
  //   filterByInj()
  //   }
  //     else if (injured == collisions.number_of_persons_injured && street == collisions.on_street_name ){
  //   filterByBoth()}

  
}


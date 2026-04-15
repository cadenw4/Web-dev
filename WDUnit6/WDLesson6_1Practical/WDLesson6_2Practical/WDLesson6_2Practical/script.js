function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
  <div class = "card">;
    <h2>${school.name}</h2>;
    <img src = "${school.image}">
    <p>${school.address}</p>;
    </div>
    `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"keshi",
    "image":"https://img.buzzfeed.com/buzzfeed-static/static/2024-09/9/22/asset/486523b92007/sub-buzz-1303-1725922759-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "album":"https://i.scdn.co/image/ab67616d0000b27344ce5e5926e0d277b70f0bd5",
    "url":"https://www.keshimusic.com/"
  }

  let build =+ `
  <div class = "card">;
  <h2>${artist.name}</h2>;
  <img src = "${artist.image}";
  <img src = "${artist.album}";
  <a href = "${artist.url}"></a>;
  </div>
  `
output.innerHTML = build;
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.

}



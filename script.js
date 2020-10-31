window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
         let index = Math.floor(Math.random()*json.length);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}"></img>
            `
     }); //end .then
  }); //end fetch

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value))) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } 

      pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `${copilotNameInput.value} is ready for launch`;

      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
         event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
         event.preventDefault();
      } else {
         launchStatus.innerHTML = "Shuttle Ready For Launch";
         launchStatus.style.color = "green";
      }; //end if else block



      
   }); //end form
}); //end window load event


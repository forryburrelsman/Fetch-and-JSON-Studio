// TODO: add code here

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            let container = document.getElementById("container");
            //container.addEventListener("click", function() {
            for (let astronaut of json)  {
                

            container.innerHTML += `
            <div class = "astronaut">
                <div class = "bio">
                    <h2> ${astronaut.firstName} ${astronaut.lastName} </h2>
                    
                    <ul> 
                        <li>ID ${astronaut.id}</li>
                        <li>Active ${astronaut.active} </li>
                        <li>Hours In Space: ${astronaut.hoursInSpace}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>  
                </div>
                <img class = "avatar" src = "${astronaut.picture}" >
            </div>`
            



        }
  
});
    });
});

    


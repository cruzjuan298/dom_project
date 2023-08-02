// Add your code to this file
document.querySelector("h1").style["text-decoration"] = "underline"; 
document.querySelector("body").style["background"] = "blue";
document.querySelector("h2").style["textAlign"] = "center"; 

let pokemon_images_array = document.getElementsByClassName("pokemon_images"); 
for(let i = 0; i < pokemon_images_array.length; i++){ 
    pokemon_images_array[i].style["border"]= "5px dashed yellow" 
}; 

document.querySelector("footer")

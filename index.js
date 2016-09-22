/* First define what we need to do. We need to loop through each of the Planets with Javascript
or something like that... 

Generate the display title of the Astro Weight Calculator by reversing the string, 
'rotaluclaC thgieW ortsA', using JavaScript and binding the result to a span tag 
using getElementById() syntax.

Calculate the weight by multiplying input by gravity

Populate the select element options dynamically using this array of objects:

*/

var planets = [
      {planet: 'Sun', gravity: 27.9},
      {planet: 'Mercury', gravity: 0.377},
      {planet: 'Venus', gravity: 0.9032},
      {planet: 'Earth', gravity: 1},
      {planet: 'Moon', gravity: 0.1655},
      {planet: 'Mars', gravity: 0.3895},
      {planet: 'Jupiter', gravity: 2.640},
      {planet: 'Saturn', gravity: 1.139},
      {planet: 'Uranus', gravity: 0.917},
      {planet: 'Neptune', gravity: 1.148},
      {planet: 'Pluto', gravity: 0.06}
    ];

var button = document.getElementsByTagName("button");

/* Retrieve inputted weights, retrieve gravity multiplier, round 
    to the nearest decimal

 */

function calculator()
{    
     var select = document.getElementById('planets');
 
     var options = select.options;
 
     var selectedOption = options[sel.selectedIndex];
 
     var planetName = selectedOption.innerHTML;
 
     var planetWeight = select.value;
     
     var userWeight = document.getElementById("weight").value;
        
     var totalWeight = userWeight * planetWeight;
        
     var roundTotalWeight = Math.round(totalWeight);

     var output = document.getElementById('results');
        
     output.innerHTML="If you were on "+planetName+ " " + " " +"you would weight"+ " " +roundTotalWeight+ " " + "lbs!";
}

/*
san_diego2010 [11:13 AM]  
function reverseString(str) {
     return str.split('').reverse().join('');
}
     var astro = reverseString('Astro Weight Calculator');
     document.getElementById("reverse").innerHTML = astro;

*/

/*
function calculator () {
    // Retrieves inputted weight from Id of weight
    var weight = document.getElementById("weight").value;
    // Retrieves the gravity multiplier
    var gravity = document.getElementById("gravity").value;

    var calculation = weight * gravity;

    //Rounds to the nearest decimal
    calculation = calculation.toFixed(0)

    // Print calculated weight results to the front-end by using if or else statement depending on the planet
    var planetName = document.getElementById("planets")[document.getElementById("planets").selectedIndex].text;
    if (planetName == 'sun' || planetName == 'moon') {
        document.getElementById("results").innerHTML = "If you were on the " + planetName + " you would weigh " + calculation + " lbs.";
    } else {
        document.getElementById("results").innerHTML = "If you were on " + planetName + " you would weigh " + calculation + " lbs.";

    }
}

*/


var sel = document.getElementById('planets');
for(var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    // Append the select to an element in the dom
    sel.appendChild(opt);
}

var myTitle = "rotaluclaC thgieW ortsA";
document.getElementById("displayTitle").innerHTML= reverse(myTitle);
function reverse(stringToReverse) {
  var rev="";
  for(var i = stringToReverse.length -1; i >= 0; i--){

rev += stringToReverse[i];
  }
  return rev;
}
/* First define what we need to do. We need to loop through each of the Planets with Javascript,
Generate the display title of the Astro Weight Calculator by reversing the string, 
'rotaluclaC thgieW ortsA', using JavaScript and binding the result to a span tag 
using getElementById() syntax.

Calculate the weight by multiplying input by gravity.

Populate the select element options dynamically using the array of objects var planets:
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

/* Retrieve inputted weights, retrieve gravity multiplier, multiply and round 
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


    // Print calculated weight results to the front-end by using if or else statement depending on the planet through .innerHTML
      if (planetName === 'Sun' || planetName === 'Moon') {
        document.getElementById("results").innerHTML = "If you were on the " + planetName + " you would weigh " + roundTotalWeight + " lbs.";
    } else {
        document.getElementById("results").innerHTML = "If you were on " + planetName + " you would weigh " + roundTotalWeight + " lbs.";
    }
}

/* Alternate functional coding path for calculator

function calculator () {

    // Retrieves inputted weight from Id of weight
    var weight = document.getElementById("weight").value;

    // Retrieves the gravity multiplier
    var gravity = document.getElementById("gravity").value;

    var calculation = weight * gravity;

    //Rounds to the nearest decimal
    calculation = calculation.toFixed(0)

*/


// Populate the dropdown select menu using a for loop in JavaScript
var sel = document.getElementById('planets');
for(var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    sel.appendChild(opt);
}


// Reverse string using a loop
var myTitle = "rotaluclaC thgieW ortsA";
document.getElementById("displayTitle").innerHTML= reverse(myTitle);
function reverse(stringToReverse) {
  var rev="";
  for(var i = stringToReverse.length -1; i >= 0; i--){
rev += stringToReverse[i];
  }
  return rev;
}

/* Alternate functional coding path for reversing string.

function reverseString(str) {
     return str.split('').reverse().join('');
}
     var astro = reverseString('Astro Weight Calculator');
     document.getElementById("displayTitle").innerHTML = astro;

*/
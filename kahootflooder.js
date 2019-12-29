
function sleep(milliseconds) { //define sleep function
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var Kahoot = require("kahoot.js-updated"); //npm
var bots = 1000; //number of bots
var pin = 7862634; //game Pin
var name = "Kaz's kahoot bot"  //name of bots
var fname = name //in this case, fname means false name and is used to avoid redundant names
var i = 0;
do {
  i += 1;
  console.log(i); //print the number of bots that have been created
  var fname = name;
  fname += i  //so that you don't have redundant names of bots
  var client = new Kahoot;
  console.log("Joining kahoot...");
  client.join(pin, fname); //join the kahoot with the pin and the selected name and the number of the bot
  client.on("joined", () => {
      console.log("I joined the Kahoot!");
    sleep(100);
      });
} while (i < bots); //do this i times

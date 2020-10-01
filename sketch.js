let games = [{
    name: "cards",
    mechanic: "bluffing"
  },
  {
    name: "2D",
    mechanic: "pixel"
  },
  {
    name: "racing",
    mechanic: "Time track"
  } /*, "fps", "sandbox"*/
];

let randomIndex;
// let counter = 0;
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);

  // This is play changing BACKGROUND COLOR
  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);


  /*console.log(games[3]);*/
  /*console.log(games.length); */

  /*games[1] = "2d platformer";
  console.log(games);*/

  /* pop & psuh || shift & unshift*/
  //console.log("initial array is " /*+ games*/)
  //console.log(games);
  /* splice */
  // games.splice(4/*index*/, 1/*number*/);
  // console.log("array after splice")
  // console.log(games);

  /*games.unshift("rpg");
  console.log("array after unshift")
  console.log(games);*/

  // console.log(games[0].name);
  // console.log(games[0].mechanic);


}

function draw() {
  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }


}

// This is play to TIMEOUT changing BACKGROUND function
// function changeBackground() {
//   counter++;
//   console.log(counter);
//   if (counter <= 5) {
//     background(random(255), random(255), random(255));
//     setTimeout(changeBackground, 1000);
//   } else {
//   }
// }

function randomizer() {
  animating = false;

  if (games[0]) {
    background(random(200, 220));
    //Pull Random Item
    // console.log(random(5));
    randomIndex = int(random(games.length));
    // console.log(games[randomIndex].name);
    text(`${games[randomIndex].name}'s mechanic is
     ${games[randomIndex].mechanic}`, 50, 50 /*number means position on canvas*/ );
    // text(games[randomIndex].name + "'s mechanic is "
    //+ games[randomIndex].mechanic, 50, 50 /*number means position on canvas*/ );
    //And other code: text(`${games.name} hahaha`, 50, 50);
    //delete it out of random index
    games.splice(randomIndex, 1);
    // console.log(games);
  } else {
    background(random(200, 220));
    text("nothing left!!", 50, 50)
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

  // if (games[0]) {
  //   background(random(200, 220));
  //   //Pull Random Item
  //   // console.log(random(5));
  //   randomIndex = int(random(games.length));
  //   // console.log(games[randomIndex].name);
  //   text(games[randomIndex].name, 50, 50 /*number means position on canvas*/ );
  //   //text(`${games.name} hahaha`, 50, 50);
  //   //delete it out of random index
  //   games.splice(randomIndex, 1);
  //   // console.log(games);
  // } else {
  //   background(random(200, 220));
  //   text("nothing left!!", 50, 50)
  // }
}

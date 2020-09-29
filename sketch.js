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

function setup() {
  createCanvas(400, 400);

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

function draw() {}
function mousePressed(){
  background(random(200, 220));
  //Pull Random Item
  // console.log(random(5));
  randomIndex = int(random(games.length));
  // console.log(games[randomIndex].name);
  text(games[randomIndex].name, 50, 50 /*number means position on canvas*/);
  //delete it out of random index
  games.splice(randomIndex, 1);
  // console.log(games);
}

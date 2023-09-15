//value of first roll
let a;
//value of second roll
let b;
//value of your rolls added
let c;

//oponets first roll
let x;
//oponets second roll
let y;
//sum of rolls
let z;
//your score value
let score = 0;

let gameOver = false;


//what the button will do
function playGame() {
  //if your fail it starts over
  if (gameOver) {
    return
  }

  //randum number for a and prints the number
  a = Math.floor(Math.random() * 6 ) + 1;
  document.getElementById("a").innerText = a.toString();


  //randum number for b and prints the number
  b = Math.floor(Math.random() * 6 ) + 1;
  document.getElementById("b").innerText = b.toString();

  c = a+b;  // your numbers
  document.getElementById("c").innerText = c.toString();
  
  //randum number for x and prints the number
  x = Math.floor(Math.random() * 6 ) + 1;
  document.getElementById("x").innerText = x.toString();

//randum number for y and prints the number
  y = Math.floor(Math.random() * 6 ) + 1;
  document.getElementById("y").innerText = y.toString();

  z = x+y;  // oponets numbers
  document.getElementById("z").innerText = z.toString();
  

//if your dice roll was higher thank your oponets you get 10 point
  if(c > z) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }

  //Otherwise gameover 
  else if (c<z) {
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
   gameOver = true;
  }

  
}


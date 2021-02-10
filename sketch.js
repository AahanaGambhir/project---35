/*var balloon, database;

function preload() {
  HotAirBalloonBg = loadImage("sprites/Hot Air Ballon-01.png")
  HotAirBalloon = loadImage("sprites/Hot Air Ballon-02.png")
}

function setup() {
  createCanvas(500,500);
 database = firebase.database();
  balloon = createSprite(100, 350, 50, 50);
  balloon.addImage(HotAirBalloon);
  balloon.scale = 0.5;

  var balloonPosition = database.ref('balloon/position')
  balloonPosition.on("value", readPosition, showError)
}

function draw() {
  background(HotAirBalloonBg);
  
  if(keyDown(LEFT_ARROW)){
    writePosition(-10, 0)
//balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  writePosition(10, 0)
    //balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
  writePosition(0, -10)
    //balloon.y = balloon.y -10;
}
else if(keyDown(DOWN_ARROW)){
  writePosition(0, 10)
   // balloon.y = balloon.y +10
}

  drawSprites();
}

function readPosition(data) {
  position = data.val();
  balloonPosition = position.x;
  balloonPosition = position.y;
}

function writePosition(x,y) {
  database.ref('balloon/position').set({
    'x': position.x + x,
    'y': position.y + y
  })
}*/



var balloon, database;

function preload() {
  HotAirBalloonBg = loadImage("sprites/Hot Air Ballon-01.png")
  HotAirBalloon = loadImage("sprites/Hot Air Ballon-02.png")
}

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    balloon = createSprite(100, 350, 50, 50);
    balloon.addImage(HotAirBalloon);
    balloon.scale = 0.5;

    var balloonPosition = database.ref('balloon/position');
    balloonPosition.on("value", readPosition, showError);
}

function draw(){
  background(HotAirBalloonBg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-2, 0);
        //changePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(2, 0)
        //changePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0, -2)
        //changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0, 2)
        //changePosition(0,+2);
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x, y) {
    database.ref('ball/position').set({
        x: position.x + x,
        y: position.y + y    
})
}

function showError() {
    console.log("error")
}
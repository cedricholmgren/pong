// game.js

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
var game = new ex.Engine({
    width: 800,
    height: 600
});
// todo build awesome game here
var fart = new ex.Actor(50, game.getDrawHeight() - 400, 50, 125);
fart.color = ex.Color.Green
fart.collisionType = ex.CollisionType.Fixed;
game.add(fart)
game.input.keyboard.on("press", (evt) => {
    switch (evt.key) {
        
        case 87: // "w"
            fart.pos.y = fart.pos.y - 30
        

        break;
        case 83: // "s"
            fart.pos.y = fart.pos.y + 30
        break;
        default:
        
    }
})
var sweat = new ex.Actor(750, game.getDrawHeight() - 400, 50, 125);
sweat.color = ex.Color.Red
sweat.collisionType = ex.CollisionType.Fixed;
game.add(sweat)
game.input.keyboard.on("press", (evt) =>{
    switch (evt.key) {

        case 79: // "o"
            sweat.pos.y = sweat.pos.y - 30
        break;
        
        case 76: // "l"
            sweat.pos.y = sweat.pos.y + 30}
}
)
var poop = new ex.Actor(100, 300, 20, 20);
poop.color = ex.Color.Yellow;
poop.vel.setTo(100, 100)
poop.collisionType = ex.CollisionType.Elastic;
game.add(poop);
poop.on('update', function () {
    if (this.pos.y + (this.getHeight() / 2) > game.getDrawHeight()) {
        this.vel.y *= -1.1
    }
    if (this.pos.y < (this.getHeight() / 2)) {
        this.vel.y *= -1.1;
    }

    if (this.pos.x < 0) {
        game.stop()
        alert("left side lost, right side won")
    }

    if (this.pos.x > game.getDrawWidth()) {
        game.stop()
        alert("right side lost, left side won")
    }
}); 

// Start the engine to begin the game.
game.start();

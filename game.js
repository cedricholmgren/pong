// game.js

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
var game = new ex.Engine({
    width: 800,
    height: 600
});
// todo build awesome game here
var fart = new ex.Actor(750, game.getDrawHeight() - 400, 50, 125);
fart.color = ex.Color.Red
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
// Start the engine to begin the game.
game.start();

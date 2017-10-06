// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    //If the enemy goes off screen, we need to reset the position to start again
    if(this.x > 500) {
        //initial enemy x-axis position
        this.x = -60;
        this.randomSpeed();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.randomSpeed = function() {
    var speedMultiply = Math.floor(Math.random() * 5 + 1);
    this.speed = 75 * speedMultiply;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed) {
    // Setting the player initial location
    this.x = x;
    this.y = y;

    this.speed = speed;

    //loading the image by setting this.sprite
    this.sprite = "images/char-boy.png";
}
Player.prototype = {
    //Player class instance methods
    update: function() {

    },
    //Draw the player on the screen, required methods for game
    render: function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    },
    handleInput: function(keyPressed) {
        //key press listener 'left' 'right' 'up' 'down'
        if(keyPressed === 'left') {
            /* x will change */
        } else if(keyPressed === 'right') {

        } else if(keyPressed ===  'up') {

        } else if(keyPressed === 'down') {

        } else {
            console.log("wrong key preessed!");
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

//Instantiate all enemies
for(var i = 0;i < 3;i++) {
    //[75 - 375]
    var tempSpeed = Math.floor(Math.random() * 5 + 1) * 75;
    allEnemies.push(new Enemy(0,60 + 85 * i, tempSpeed));
}

var player = new Player(0,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

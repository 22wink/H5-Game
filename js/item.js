var xiaotou1 = new Image();
xiaotou1.src="images/xiaotou1.png";
var xiaotou2 = new Image();
xiaotou2.src="images/xiaotou2.png";
var xiaotou3 = new Image();
xiaotou3.src="images/xiaotou3.png";

class gold {
    constructor(game) {
        this.game = game;
        this.init();
    }

    init() {
        this.type = Math.floor(Math.random() * 100000) % 8;
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
        this.alive = true;
        this.update();
    }

    update() {
        switch (this.type) {
            case 0:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth();
                this.height = this.game.getWidth() / 2;
                this.IM = xiaotou1;
                this.score = 50;
                break;
            case 1:
                this.speed = this.game.getWidth() / 8;
                this.width = 1.5 * this.game.getWidth();
                this.height = 1.5 * this.game.getWidth() / 2;
                this.IM = xiaotou1;
                this.score = 100;
                break;
            case 2:
                this.speed = this.game.getWidth() / 20;
                this.width = 2.5 * this.game.getWidth();
                this.height = 2.5 * this.game.getWidth() / 2;
                this.IM = xiaotou1;
                this.score = 250;
                break;
            case 3:
                this.speed = this.game.getWidth() / 15;
                this.width = 1.5 * this.game.getWidth();
                this.height = 1.5 * this.game.getWidth();
                this.IM = xiaotou2;
                this.score = 11;
                break;
            case 4:
                this.speed = this.game.getWidth() / 40;
                this.width = 1.8 * this.game.getWidth();
                this.height = 1.8 * this.game.getWidth();
                this.IM = xiaotou2;
                this.score = 20;
                break;
            case 5:
                this.speed = this.game.getWidth() / 65;
                this.width = 2 * this.game.getWidth();
                this.height = 2 * this.game.getWidth();
                this.IM = xiaotou2;
                this.score = 30;
                break;
            case 6:
            case 7:
                this.speed = this.game.getWidth() / 2.5;
                this.width = this.game.getWidth() / 2;
                this.height = this.game.getWidth() / 2.5;
                this.IM = xiaotou3;
                this.score = 600;
                break;
        }
    }

    randomXY() {
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
    }

    draw() {
        // this.game.rotate(0);
        this.game.context.drawImage(this.IM, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    size() {
        return Math.sqrt(this.width * this.width + this.height * this.height) / 2;
    }
}
class Form {

    constructor() {

        this.startButton = createButton('Start');

    }

    display() {

        this.startButton.position(1300, 750);
        this.startButton.size(200, 100);
        this.startButton.style("color:red; font-size:50px; font-family:System; background-color:yellow;")

        if (keyDown("enter")) {

            this.changeState();

        }

        this.startButton.mousePressed(() => {
            this.changeState();
        })
    }
    changeState() {

        gameState = 1;
        console.clear();
        this.startButton.hide();
        var d = new Date();
        time = Math.round(d.getTime() / 1000);

    }
}
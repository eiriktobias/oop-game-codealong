class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;

        this.domElement = null; // we will store a ref. to the dom element of the player

        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }

    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
        
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}


const player = new Player();


// attach event listeners...
document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft"){
        player.moveLeft();
    } else if (event.code === "ArrowRight"){
        player.moveRight();
    }
})

class RareElement {

    constructor(x, y, width, height) {

       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.image = loadAnimation("Image/RareElement1", "Image/RareElement2");
        this.addAnimation("anim", this.image)        
    }    
}
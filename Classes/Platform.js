class Platform {

    constructor(x, y, width, height, lift) {

       
        this.sprite = createSprite(x, y, width, height);
        
        this.width = width;
        this.height = height;         
        this.sprite.shapeColor = "yellow";        
        
        if(lift){

            this.image = loadImage("Images/Lift.png");
            this.sprite.addImage(this.image);

        }else{
        
            this.sprite.setCollider("rectangle", 0, 0, width, height);
            this.sprite.visible = false;

        }       

        platFormGroup.add(this.sprite);              
    }    
}
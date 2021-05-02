class Block{
    constructor(x,y,width,height){
var options = {
    restitution:0.4,
friction:1.0,
//isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
this.image=loadImage("block.png")
this.visiblity=255;
World.add(world,this.body);
 }
display(){
if (this.body.speed<3){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
}

    else{
       
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop();
    }
    }
    





}
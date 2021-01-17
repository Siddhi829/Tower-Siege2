class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
    }
  

  display(){
   if(this.body.speed<2.5){
     super.display();

   }
    else{
      World.remove(world,this.body);
      
    }

  }

};
      
    
    
  

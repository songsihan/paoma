
/**
 * 游戏中的马
 */
module game {
    export class Horse extends egret.DisplayObjectContainer{
        private sp: egret.MovieClip;
        private k: number;
        private isTurn: Boolean;
        private posX: number = 2490;
        private isSetup: Boolean = false;
        private isSetcircel: Boolean = false;
        private angle: number = (2*Math.PI/360) * 225;
        private dataMap:any;
        private circleActFrame: number = 0;
        private index: number;
        private totalLength: number = 0;

        public constructor(map, index) 
        {
            super();
            this.index = index;
            this.setHorseAct("downAct", true);
            this.k = 79/ 230
            this.x = 0;
            this.y = 0;
                
            this.dataMap = map;
            this.posX = this.dataMap.circelStarPosx;

            this.scaleX = 2 / 3;
            this.scaleY = 2 / 3;
        }
        
        public setHorseAct(actnName:string, isRepeate = false)
        {        
            
            console.log("setHorseAct:%s", actnName)
                var data = RES.getRes( actnName + this.index + "_json");//根据皮肤类型+方向获取描述
             
                var texture = RES.getRes(actnName + this.index + "_png");//根据皮肤类型+方向序列图
             
                var mcFactory = new egret.MovieClipDataFactory(data, texture);//获取MovieClipData工厂类
             
                if (this.sp != null)
                {
                        this.removeChild(this.sp);
                        this.sp.stop();
                        this.sp = null;
                }
             
                this.sp = new egret.MovieClip(mcFactory.generateMovieClipData());//创建一个MC
                this.addChild(this.sp);//添加到显示列表
 
           this.sp.anchorOffsetX = this.sp.width / 2
            this.sp.anchorOffsetY = this.sp.height / 2
           //this.anchorOffsetX = this.sp.width /2
           // this.anchorOffsetY = this.sp.height /2
         //   this.width = this.sp.width
           // this.height = this.sp.height

            //this.sp.frameRate = 30;
            if (isRepeate) 
            {
                this.sp.gotoAndPlay(1, -1);
                 this.sp.x = -20
                 this.sp.y = -60
            }
            else
            {
                this.sp.gotoAndPlay(1, 1);
              //this.sp.gotoAndStop(0) 
                this.sp.y = -70
                this.sp.x = -20
            }

        }
        
        public setPosition(x, y)
        {

            this.x = x 
            this.y = y 
        }
        
        public getPositionX()
        {
            return this.x 
        }
        
        public getPositionY()
        {
            return this.y 
        }

        public updatePos() {
            console.log("this posx : %d, this, this circelEndPosY is:%d", this.getPositionX(), this.getPositionY())
              //  console.log("this width : %d, this, this height is:%d", this.width, this.height) 
              //  console.log("this spWidth : %d, this, this spheight is:%d", this.sp.width, this.sp.height)   
  // return
            var lastX = this.x;
            var lasty = this.y;
            if(this.getPositionX() >= (this.dataMap.circlePosx[0] - 50 )&& this.circleActFrame < 25) // 半圆
            {
                this.isTurn = true;

                if(this.isSetcircel == false) {
                    this.setHorseAct("circleAct")
                    this.isSetcircel = true
                }
                
                this.setPosition(this.dataMap.circlePosx[this.circleActFrame], this.dataMap.circlePosy[this.circleActFrame]);
                this.circleActFrame = this.circleActFrame + 1

              //  this.sp.gotoAndPlay(this.circleActFrame, 1);
               // this.sp.gotoAndStop(this.circleActFrame)
               /*if(this.getPositionY() <= 1263) {

                    this.posX = 2823 + Math.cos((2*Math.PI/360) * 405) * this.dataMap.r; //2960
                    this.setCirclePath();

                }
                else {
                    this.setCirclePath();
                }*/



            } else {
                if(this.isTurn == true) {
                    if(this.isSetup == false) {
                        this.setHorseAct("upAct", true)
                        this.isSetup = true
                    }
                    this.setLinePath(-this.dataMap.speed);

                }
                else {
                    this.setLinePath(this.dataMap.speed);
 
                }
            }
            
            
            this.totalLength = Math.sqrt( (this.x - lastX)*(this.x - lastX) + (this.y - lasty)*(this.y - lasty))

        }
        
        
    public setCirclePath()
    {
        var hudu = (2 * Math.PI / 360) * this.angle
        this.angle = this.angle + Math.PI / 28;
        var x = 2823 + Math.cos(this.angle) * this.dataMap.r;
        var y = -1250 + Math.sin(this.angle) * this.dataMap.r;
        this.setPosition(x,-y);
    }
    
    
    public setLinePath(speed:number)
    {
        speed = speed + (Math.random() - 0.5)*10;
        var x: number = this.getPositionX() + speed;
        var y: number = this.getPositionY() + speed * this.k;
        this.setPosition(x,y);
    }
    
    public getTotalLength()
    {
        return this.totalLength
    }
    
    public getIndex()
    {
        return this.index;
    }
    
        
    }
}
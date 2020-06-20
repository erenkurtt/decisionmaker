
function getTrueOrFalse(){
    CanvasArea.start(1);
    true1=new component2(window.innerWidth,window.innerHeight,"doit.png",0,0);
    false1=new component2(window.innerWidth,window.innerHeight,"donot.png",0,0);
    truetext=new component2(window.innerHeight/5,window.innerWidth/8,"doit1.png",window.innerWidth/3.4,window.innerHeight/4);
    falsetext=new component2(window.innerHeight/3.5,window.innerWidth/8,"donot2.png",window.innerWidth/4.35,window.innerHeight/4);
    tryagain=new component(window.innerHeight/5,window.innerWidth/5,"tryagain.png",window.innerWidth/3.35,window.innerHeight/2);
    back=new component(window.innerHeight/5,window.innerWidth/5,"back.png",0,window.innerHeight/1-window.innerWidth/5);

}
function CoinFlipping(){
    CanvasArea.start(2);
    cbackground=new component2(window.innerWidth,window.innerHeight,"coinbackground.png",0,0);
    tails=new component(window.innerHeight/5,window.innerWidth/2.8,"tails.png",window.innerWidth/3.4,window.innerHeight/4);
    heads=new component(window.innerHeight/5,window.innerWidth/2.8,"heads.png",window.innerWidth/3.4,window.innerHeight/4);
    tryagain=new component(window.innerHeight/5,window.innerWidth/5,"tryagain.png",window.innerWidth/3.35,window.innerHeight/2);
    back=new component(window.innerHeight/5,window.innerWidth/5,"back.png",0,window.innerHeight/1-window.innerWidth/5);
}
function whichDinner(){
    CanvasArea.start(3);
    cbackground=new component2(window.innerWidth,window.innerHeight,"coinbackground2.png",0,0);
    chickensoup=new component2(window.innerHeight/5,window.innerWidth/2.8,"chickensoup.png",window.innerWidth/14,window.innerHeight/4);
    chickendinner=new component2(window.innerHeight/5,window.innerWidth/2.8,"chicken.png",window.innerWidth/1.9,window.innerHeight/4);
    spagetti=new component2(window.innerHeight/5,window.innerWidth/2.8,"spagetti.png",window.innerWidth/1.9,window.innerHeight/4);
    tomato=new component2(window.innerHeight/5,window.innerWidth/2.8,"tomato.png",window.innerWidth/14,window.innerHeight/4);
    vegetable=new component2(window.innerHeight/5,window.innerWidth/2.8,"vegetable.png",window.innerWidth/1.9,window.innerHeight/4);
    vermicelli=new component2(window.innerHeight/5,window.innerWidth/2.8,"vermicelli.png",window.innerWidth/14,window.innerHeight/4);
    yogurtsoup=new component2(window.innerHeight/5,window.innerWidth/2.8,"yogurtsoup.png",window.innerWidth/14,window.innerHeight/4);
    meatball=new component2(window.innerHeight/5,window.innerWidth/2.8,"meatball.png",window.innerWidth/1.9,window.innerHeight/4);
    fish=new component2(window.innerHeight/5,window.innerWidth/2.8,"fish.png",window.innerWidth/1.9,window.innerHeight/4);
    lentilsoup=new component2(window.innerHeight/5,window.innerWidth/2.8,"lentilsoup.png",window.innerWidth/14,window.innerHeight/4);
    tryagain=new component(window.innerHeight/5,window.innerWidth/5,"tryagain.png",window.innerWidth/3.35,window.innerHeight/1.7);
    back=new component(window.innerHeight/5,window.innerWidth/5,"back.png",0,window.innerHeight/1-window.innerWidth/5);
}
function randomActivity(){
    CanvasArea.start(4);
    cbackground=new component2(window.innerWidth,window.innerHeight,"coinbackground2.png",0,0);
    rdlibrary=new component(window.innerHeight/3,window.innerWidth/1.6,"3rdlibrary.png",window.innerWidth/5.25,window.innerHeight/4.5);
    thlibrary=new component(window.innerHeight/3,window.innerWidth/1.6,"5thlibrary.png",window.innerWidth/5.25,window.innerHeight/4.5);
    movie1=new component(window.innerHeight/3,window.innerWidth/1.6,"74imbd.png",window.innerWidth/5.25,window.innerHeight/4.5);
    movie2=new component(window.innerHeight/3,window.innerWidth/1.6,"77imbd.png",window.innerWidth/5.25,window.innerHeight/4.5);
    movie3=new component(window.innerHeight/3,window.innerWidth/1.6,"79imbd.png",window.innerWidth/5.25,window.innerHeight/4.5);
    movie4=new component(window.innerHeight/3,window.innerWidth/1.6,"82imbd.png",window.innerWidth/5.25,window.innerHeight/4.5);
    movie5=new component(window.innerHeight/3,window.innerWidth/1.6,"83imbd.png",window.innerWidth/5.25,window.innerHeight/4.5);
    game1=new component(window.innerHeight/3,window.innerWidth/1.6,"rpggame.png",window.innerWidth/5.25,window.innerHeight/4.5);
    game2=new component(window.innerHeight/3,window.innerWidth/1.6,"tpsgame.png",window.innerWidth/5.25,window.innerHeight/4.5);
    game3=new component(window.innerHeight/3,window.innerWidth/1.6,"platform.png",window.innerWidth/5.25,window.innerHeight/4.5);
    music=new component(window.innerHeight/3,window.innerWidth/1.6,"listenmusic.png",window.innerWidth/5.25,window.innerHeight/4.5);
    exercise=new component(window.innerHeight/3,window.innerWidth/1.6,"exercise.png",window.innerWidth/5.25,window.innerHeight/4.5);
    text1=new componenttext("Listen a blues song",50,window.innerHeight/2);
    back=new component(window.innerHeight/5,window.innerWidth/5,"back.png",0,window.innerHeight/1-window.innerWidth/5);
    tryagain=new component(window.innerHeight/5,window.innerWidth/5,"tryagain.png",window.innerWidth/3.35,window.innerHeight/1.5);

}

var CanvasArea={
    canvas : document.createElement("canvas"),
    start : function(val) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.position="absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.rand = Math.floor((Math.random() * 10) + 1);
        this.rand2 = Math.floor((Math.random() * 10) + 1);
        this.rand3 = Math.floor((Math.random() * 16) + 1);
        this.count=0;
        this.var=val;
        if(val==1){
            this.interval=setInterval(updateCanvas,60);
        }
        else if(val==2){
            this.interval=setInterval(updateCanvas2,60);
        }
        else if(val==3){
            this.interval=setInterval(updateCanvas3,60);
        }
        else if(val==4){
            this.interval=setInterval(updateCanvas4,60);
        }
        window.addEventListener('click', function (e) {
            CanvasArea.x = e.pageX;
            CanvasArea.y = e.pageY;
            setTimeout(() => {
                CanvasArea.x = false;
                CanvasArea.y = false;
            }, 100);
            
        })
        
    }, 
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } ,
      stop : function() {
        clearInterval(this.interval);
        
    }
}
function component(width, height, picsrc, x, y) {
    this.image=new Image();
    this.image.src=picsrc;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.update = function() {
        ctx = CanvasArea.context;
        ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height)
        }
        this.clicked = function() {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var clicked = true;
            if ((mybottom < CanvasArea.y) || (mytop > CanvasArea.y) || (myright < CanvasArea.x) || (myleft > CanvasArea.x)) {
                clicked = false;
            }
            return clicked;
        }
    }
    function component2(width, height, picsrc, x, y) {
        this.image=new Image();
        this.image.src=picsrc;
        this.width = width;
        this.height = height;
        this.speedX = 3;
        this.count=0;
        this.x = x;
        this.y = y; 
        
        this.update = function() {
            ctx = CanvasArea.context;
            ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }  
}

    function componenttext(text, x, y) {
  
        this.update = function() {
            ctx = CanvasArea.context;
            ctx.font = "bold 30px Segoe UI";
            ctx.fillStyle = "white";
            
            this.text=text;
            this.x=x;
            this.y=y;
            ctx.fillText(text, x, y);
      }  
    }
    function updateCanvas() {
        CanvasArea.clear();  
        if(CanvasArea.rand%2==0){
            true1.update();
            truetext.update();
        }
        else{
            false1.update();
            falsetext.update();
        }
        tryagain.update();
        if(tryagain.clicked()){
            CanvasArea.stop();
            new getTrueOrFalse();
        }
        if(back.clicked()){
            window.open("index.html","_self");
            CanvasArea.stop();
        }
        back.update();
          
    }
    function updateCanvas2(){
        CanvasArea.clear(); 
        cbackground.update();
        
        if(tails.clicked() || heads.clicked()){
            
            if(CanvasArea.rand%2==0){
                tails.image.src="heads.png";
            }
            else{
                heads.image.src="tails.png";
            }
        }
        else{
            CanvasArea.count+=1;
            if(CanvasArea.count%2==0){
            tails.update();
            }
            else{
            heads.update();
            }
        }
        tryagain.update();
        if(tryagain.clicked()){
            CanvasArea.stop();
            new CoinFlipping();
        }
        if(back.clicked()){
            window.open("index.html","_self");
            CanvasArea.stop();
        }
        back.update();
    }
    function updateCanvas3(){
        CanvasArea.clear();
        cbackground.update();
        if(CanvasArea.rand==1 || CanvasArea.rand== 2){
            chickensoup.update();
        }
        else if(CanvasArea.rand==3 || CanvasArea.rand== 4){
            yogurtsoup.update();
        }
        else if(CanvasArea.rand==5 || CanvasArea.rand== 6){
            vermicelli.update();
        }
        else if(CanvasArea.rand==7 || CanvasArea.rand== 8){
            tomato.update();
        }
        else if(CanvasArea.rand==9 || CanvasArea.rand== 10){
            lentilsoup.update();
        }
        if(CanvasArea.rand2%5==0){
            chickendinner.update();
        }
        else if(CanvasArea.rand2%5==1){
            meatball.update();
        }
        else if(CanvasArea.rand2%5==2){
            spagetti.update();
        }
        else if(CanvasArea.rand2%5==3){
            vegetable.update();
        }
        else if(CanvasArea.rand2%5==4){
            fish.update();
        }
        tryagain.update();
        if(tryagain.clicked()){
            CanvasArea.stop();
            new whichDinner();
        }
        if(back.clicked()){
            window.open("index.html","_self");
            CanvasArea.stop();
        }
        back.update();
    }
    function updateCanvas4(){
        
        CanvasArea.clear();
        cbackground.update();
        switch(CanvasArea.rand3){
            case 1:
                rdlibrary.update();
                break;
            case 2:
                thlibrary.update();
                break;
            case 3:
                movie1.update();
                break;
            case 4:
                movie2.update();
                break;
            case 5:
                movie3.update();
                break;
            case 6:
                movie4.update();
                break;
            case 7:
                movie5.update();
                break;
            case 8:
                game1.update();
                break;
            case 9:
                game2.update();
                break;
            case 10:
                game3.update();
                break;
            case 11:
                music.update();
                break;
            default:
                exercise.update();
                break;
        }
        text1.update();
        tryagain.update();
        if(tryagain.clicked()){
            CanvasArea.stop();
            new randomActivity();
        }
        if(back.clicked()){
            window.open("index.html","_self");
            CanvasArea.stop();
        }
        back.update();

    }
    
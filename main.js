
//funcion anonima
(function(){

    //funcion que nos crea en espacio de ping pong y le pasamos por parametros las dimensiones
    self.Board = function(width,height){
        this.width =width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars =[];
        this.ball = null;

    }

    self.Board.prototype ={
        get elements(){

            let elements = this.bars;
            elements.push(this.ball)
            return elements;
        }
    }

{}})();

//Funcion de la pelota -> NUEVO
(function(){
    self.Ball = function(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_y = 0;
        this.speed_x = 3;
        this.board = board;
        board.ball = this;
        this.kind = "circle"

    }

})();
//Funcion para crear las barras
(function(){
    //constructor de la barra donde le pasamos las dimensiones
    self.Bar = function(x,y,width,height,board){
        this.x =x;
        this.y =y,
        this.width = width;
        this.height = height;
        this.board = board;

        this.board.bars.push(this);

        this.kind = "rectangle";
        this.speed =20; //Velocidad de las barras

    }

    self.Bar.prototype ={
        //funciones para mover la barra
        down: function(){
            this.y += this.speed;

        },
        up: function(){
            this.y -= this.speed;

        },
        toString: function(){
            return "x: "+this.x +" y: "+this.y;
        }
    }
})();


(function(){
    self.BoardView = function(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");

    }
    self.BoardView.prototype={

        clean: function(){
            this.ctx.clearRect(0,0,this.board.width,this.board.height)
        },

        draw: function(){
            for (let i =  this.board.elements.length-1;i >= 0; i--) {
                const elementos = this.board.elements[i];

                draw(this.ctx,elementos);
                
            };
        },

        play: function(){
            this.clean();
            this.draw();
        }
    }
    //Metodo que dibuja los elementos
    function draw(ctx,element){

            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height)
                    break;
                case "circle":
                    ctx.beginPath();
                    ctx.arc(element.x,element.y,element.radius,0,7)
                    ctx.fill();
                    ctx.closePath()
                    break;
            }
    
        
    
    }

})()

var board = new Board(800,400)
var bar = new Bar(20,100,40,100,board)
var bar2 = new Bar(735,100,40,100,board)
var canvas = document.getElementById("canvas")
var board_view = new BoardView(canvas,board)
var ball = new Ball(350,100,10,board)







//Evento que captura el moviemiento de las teclas, para mover las barras
document.addEventListener("keydown",function(ev){
    ev.preventDefault();
    
    if(ev.KeyCode ==38){
        bar.up();
    }
    else if(ev.KeyCode==40){
        bar.down();
    }
    else if(ev.KeyCode ===87){
        bar2.up();
    }
    else if(ev.KeyCode===83){
        bar2.down();
    }
    console.log(""+bar2)
});

//agrgamos moviemiento a las barras - NUEVO
window.requestAnimationFrame(controller);


/*Funcion principal  que se muestra cuando se carga la ventana*/
function controller(){
    
    board_view.play();
    
    //board_view.clean()
    //board_view.draw()
    window.requestAnimationFrame(controller);

    
}


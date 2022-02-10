
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
        this.speed =10; //Velocidad de las barras

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
        draw: function(){
            for (let i =  this.board.elements.length-1;i >= 0; i--) {
                const elementos = this.board.elements[i];

                draw(this.ctx,elementos);
                
            }
        }
    }
    //Metodo que dibuja los elementos
    function draw(ctx,element){
        if(element != null && element.hasOwnProperty("kind")){

            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height)
                    break;
            }
    
        }
    
    }

})()

let board = new Board(800,400)
var bar = new Bar(20,100,40,100,board)
var bar = new Bar(735,100,40,100,board)
let canvas = document.getElementById("canvas")
let board_view = new BoardView(canvas,board)

//Evento que captura el moviemiento de las teclas, para mover las barras
document.addEventListener("keydown",function(ev){
    
    if(ev.KeyCode ==38){
        bar.up();
    }
    else if(ev.KeyCode==40){
        bar.down();
    }
    console.log(bar)
});

window.addEventListener("load",main);

/*Funcion principal  que se muestra cuando se carga la ventana*/
function main(){
    

    board_view.draw()

    
}

console.log("Holaaaa")
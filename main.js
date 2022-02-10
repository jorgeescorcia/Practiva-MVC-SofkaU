(function(){

    //funcion que nos crea en espacio de ping pong y le pasamos por parametros las dimensiones
    var self_Board = function(width,height){
        this.width =width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars =[];
        this.ball = null;

    }

    self_Board.prototype ={
        get elements(){

            let elements = this.bars;
            elements.push(ball)
            return elements;
        }
    }

{}})();


(function(){
    self_BoardView = function(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");

    }
})

window.addEventListener("load",main);

/*Funcion principal donde hacemos el llamados de las funciones
 creadas anteriormente*/
function main(){
    let board = new self_Board(800,400)
    let canvas = document.getElementsById("canvas")
    let board_view = new self_BoardView(canvas,board)

    
}
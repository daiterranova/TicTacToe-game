//que necesito ?
// un tablero
let boardGame = new Array(9);

boardGame = [];



/*listado de casilleros indexado del 0 al 8 
cada casillero puede adquirir uno de 3 valores(jugo x,jugo o o no jugado)
despues de cada jugada chequear si gano alguien y si hubo empate
guardar a que jugador le toca jugar */




let turn = 'x';

let squares = document.getElementsByClassName('board');

let whoWins = () =>{
//chequea si alguien gano, necesita acceder a la informacion guardada en el tablero y saber de quien era el turno
//cuando se gana?
// cuando uno de los dos jugadores completa la combinacion
// 0-2,3-5,6-8 o 0,4,8 o 2,4,6
    
   /*  if(boardGame[0] == 'x' && boardGame[1] =='x' && boardGame[2] == 'x' || boardGame[3] == && boardGame[4] && boardGame[5] || boardGame[6] && boardGame[7] && boardGame[8] || boardGame[0] && boardGame[4] && boardGame[8] || boardGame[2] && boardGame[4] && boardGame[6] == 'x' ){
        
       console.log('gana x')  
    }
    else if(boardGame[0] && boardGame[1] && boardGame[2] || boardGame[3] && boardGame[4] && boardGame[5] || boardGame[6] && boardGame[7] && boardGame[8] || boardGame[0] && boardGame[4] && boardGame[8] || boardGame[2] && boardGame[4] && boardGame[6]=== 'o' ){
       console.log('gana o')  
    }
    else{} */
}


let tie = (string) => {
    //tiene que chequear si nadie gano y no hay mas jugadas posibles. necesita acceder a la info del tablero y de quien era el turno 
    console.log(`no mas jugadas,${string}`)
}

let render = (boardGame,turn) => {
    // objetivo de esta funcion : muestra la informacion del tablero a los jugadores. necesita acceder al tablero y a turno   
        for(let i = 0;i < squares.length;i++){
          squares[i].textContent = boardGame[i];
        }; 
    
        let turnElement = document.getElementById('turn').textContent = `Juega: ${turn}`;
    
    }

  
function onClick (turn,boardGame) {
    //tiene que detectar donde se hizo click en el tablero
    // y mostrar el paso siguiente,
    //si me hacen click, depende quien juega,quiero mostrar x o circulo 
    
  for (let i = 0; i < squares.length; i++) {
      //queremos que cuando se haga click en tal casillero, si ese casillero esta vacio, asigne 'x' u 'o' dependiendo de quien sea el turno.
        squares[i].addEventListener('click',() => { 
                if (squares[i].textContent == "") {
                boardGame[i] = turn;
                if (turn == "x") {
                    turn = "o";
                } else {
                    turn = "x";
                }
                }
                render(boardGame,turn);
            }) 
        
        } 
    // llamar a las funciones
        // ganar 
        //todavia no estan bien implementadas, solo queria ver si funcionaban
        whoWins()
        //empate  
        tie('empate')
  
 }

onClick(turn,boardGame)
render(boardGame,turn)
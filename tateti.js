//que necesito ?
// un tablero


let boardGame = new Array(9);// aca esta el estado interno del tablero, es la informacion que tiene adentro el tablero (parte logica)
let turn = 'x';
let winner = null;
let squares = document.getElementsByClassName('board');// estos son los casilleros de html(interfaz grafica,representacion grafica,lo que se muestra)



/*listado de casilleros indexado del 0 al 8 
cada casillero puede adquirir uno de 3 valores(jugo x,jugo o o no jugado)
despues de cada jugada chequear si gano alguien y si hubo empate
guardar a que jugador le toca jugar */

//bloque whoWins



let whoWins = (winner) =>{

//chequea si alguien gano, necesita acceder a la informacion guardada en el tablero y saber de quien era el turno
//cuando se gana?
// cuando uno de los dos jugadores completa la combinacion
// 0-2,3-5,6-8 o 0,4,8 o 2,4,6
    
    if(boardGame[0] == 'x' && boardGame[1] =='x' && boardGame[2] == 'x' || boardGame[3] == 'x' && boardGame[4] == 'x' && boardGame[5] =='x' || boardGame[6] =='x' && boardGame[7] == 'x' && boardGame[8] =='x' || boardGame[0] =='x' && boardGame[4]=='x' && boardGame[8] =='x' || boardGame[2] == 'x' && boardGame[4] =='x' && boardGame[6] == 'x' ){
       
        winner = 'x';
       
    }
    else if(boardGame[0] == 'o' && boardGame[1]  == 'o' && boardGame[2] == 'o'  || boardGame[3] == 'o'  && boardGame[4] == 'o'  && boardGame[5] == 'o'  || boardGame[6] == 'o'  && boardGame[7] == 'o' && boardGame[8] == 'o' || boardGame[0] == 'o'  && boardGame[4]== 'o'  && boardGame[8] == 'o' || boardGame[2] == 'o'  && boardGame[4] == 'o'  && boardGame[6]=== 'o' ){
       
       winner ='o'; 
      
    }
    
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//bloque tie

let tie = (string) => {
    //tiene que chequear si nadie gano y no hay mas jugadas posibles. necesita acceder a la info del tablero y de quien era el turno 
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////




//bloque render

// render deberia ser el unico encargado de interactuar con el html , en este caso es el unico que le va a pasar que mostrar a squares.

let render = (boardGame,turn,winner) => {
    // objetivo de esta funcion : muestra la informacion del tablero a los jugadores. necesita acceder al tablero y a turno   
    
        for(let i = 0;i < squares.length;i++){
          squares[i].textContent = boardGame[i]; // la propiedad text content va a ser el valor del tablero en ese lugar.
        }; 
    
        let turnElement = document.getElementById('turn').textContent = `Juega: ${turn}`;
        let winnerElement = document.getElementById('winner').textContent = `Ganador: ${winner}`;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bloque onclick


function onClick (turn,boardGame) {
 // manejar la logica sin interactuar directamente con el html(squares)

    //tiene que detectar donde se hizo click en el tablero
    // y mostrar el paso siguiente,
    //si me hacen click, depende quien juega,quiero mostrar x o circulo 
  
  for (let i = 0; i < squares.length; i++) {
      //queremos que cuando se haga click en tal casillero, si ese casillero esta vacio, asigne 'x' u 'o' dependiendo de quien sea el turno.
        squares[i].addEventListener('click',() => { 
                if (boardGame[i] == null) {                  
                    boardGame[i] = turn;
                if (turn == "x") {
                    turn = "o";
                } else {
                    turn = "x";
                }
                console.log(boardGame[i])
                console.log(boardGame)
                }
                whoWins(winner);
                tie();
                render(boardGame,turn,winner);
            }) 
        
        }
 }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


onClick(turn,boardGame)


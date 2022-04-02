//que necesito ?
// un tablero
let boardGame = new Array(9);

boardGame = ['x','x','o','x',undefined,null];



/*listado de casilleros indexado del 0 al 8 
cada casillero puede adquirir uno de 3 valores(jugo x,jugo o o no jugado)
despues de cada jugada chequear si gano alguien y si hubo empate
guardar a que jugador le toca jugar */




let turn = 'x';


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

   //aca lo que hago es agarrar cada casillero de la tabla que hice en el archivo html y asignarle cada valor que haya guardado en el array que representa al tablero.
    //ahora el array esta vacio,pero la idea es que sea el lugar donde se almacene la informacion de cada jugada. 

    //que es lo que estoy modificando?
        //el array boardGame
    //podria recorrer el array con un for
    //ahora bien, como capturo cada elemento,cada casillero,a fin de poder asignarle el valor que tiene adentro cada casillero?
        //que tienen en comun? la clase y el tag
        //getelementbytagname devuelve una lista
    //tengo dos listas que recorrer y es asignar``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````''''''''''============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
        let squares = document.getElementsByClassName('board')

/* 
        Array.from(squares).forEach(function (element) {
            console.log(element)
          }); */
        for(let i = 0;i < squares.length;i++){
          squares[i].textContent = boardGame[i];
        }; 
   

   /* document.getElementById('1').textContent = boardGame[0];
   document.getElementById('2').textContent = boardGame[1];
   document.getElementById('3').textContent = boardGame[2];
   document.getElementById('4').textContent = boardGame[3];
   document.getElementById('5').textContent = boardGame[4];
   document.getElementById('6').textContent = boardGame[5];
   document.getElementById('7').textContent = boardGame[6];
   document.getElementById('8').textContent = boardGame[7];
   document.getElementById('9').textContent = boardGame[8]; */
   
    //todavia no estoy muy segura con respecto a turno por lo que esta sucediendo en la funcion onclick.pienso que deberia poder acceder a turno para renderizar, pero en onclick estoy mostrando algo al usuario.
   // aca deberia poder mostrar a quien le toca jugar:

    let turnElement = document.getElementById('turn').textContent = `Juega: ${turn}`;
    
    }
   



//funcionalidad a implementar : mostrar en el HTML a quien le toca jugar
//0)armar el html con el que se va a mostrar a quien le toca

//1)almacenamiento y flujo de a quien a le toca  (hacer que el valor actual del turno le llegue a render())
//2)mostrar esa informacion almacenada en el html 


function onClick (turn,boardGame) {
    //tiene que detectar donde se hizo click en el tablero
    // y mostrar el paso siguiente,
    //si me hacen click, depende quien juega,quiero mostrar x o circulo 

    
   var primerCasillero = document.getElementById('1')  ; //obtengo el elemento con id '1' de mi archivo html y lo guardo en variable.                                                                                                     
   primerCasillero. addEventListener('click',() => { // aca le agrego un detector de eventos, donde digo que cuando le hagan click a ese elemento suceda lo siguiente:

        boardGame[0] = turn;
        
        if(turn == 'x'){ 
            turn = 'o';
        } else{
            turn = 'x';
        }
        
        render(boardGame,turn);

        




    // version vieja



        /*if(turn == 'x'){ //en caso de que el turno sea de 'x'
            primerCasillero.innerHTML = turn; // a ese casillero le asigno el valor de turno para que muestre 'x'
            window.alert('juega circulo'); // tiro un alert que indica a quien le toca ahora
            turn = 'o'; //cambio el valor de turno para que ahora sea circulo 'o'
            boardGame[0] = primerCasillero.innerHTML; //aca al primer casillero del tablero le asigno al casillero lo que contiene el casillero. estoy dudando un poco de este paso, xq siento que estoy pisando info del tablero.
            
            render(boardGame)
            // llamo a render para que muestre la info del tablero. me parece que no esta funcionando igual, o no es
        }
        else{
            primerCasillero.innerHTML = turn; // si el turno no es de 'x'
            window.alert('juega x');
            turn = 'x';
            boardGame[0] = primerCasillero.innerHTML;
        }*/
    }) 

    
        
    // llamar a las funciones
        // ganar 
        //todavia no estan bien implementadas, solo queria ver si funcionaban
        whoWins()
        //empate  
        tie('empate')
  
    }

onClick(turn,boardGame)
render(boardGame,turn)
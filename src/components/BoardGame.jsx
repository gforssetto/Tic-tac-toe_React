

const initialGameState = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function Gameboard({ onSelectSquare , turns }) {

    let gameBoard = initialGameState;

    for(const turn of turns){
        const { square , player } = turn;
        const { row , col } = square;

        gameBoard[row][col] = player
    }

    // const[ gameBoard , setGameBoard ] = useState(initialGameState);

    // function handleSelectedSquare(idxRow , idxCol){
    //     setGameBoard((prevGameState)=>{
    //         const updatedBoard = [...prevGameState.map(( innerArray )=>[...innerArray])];
    //         updatedBoard[idxRow][idxCol] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare()
    // }

    return <ol id="game-board">
        {gameBoard.map((row, idxRow) => <li key={idxRow}>
            <ol>
                {row.map((playerSimbol, idxCol)=> <li key={idxCol}>
                    <button onClick={() => onSelectSquare(idxRow,idxCol)}>{playerSimbol}</button>
                </li> )}
            </ol>
        </li>)}
    </ol>;
}
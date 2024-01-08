function generateBoard(){
    const boardArray = new Array(81);
    boardArray.fill('');

    const numOfGivens = generateNumOfGivens('HARD');

    const uiBoard = document.createElement('div');
    uiBoard.classList.add('uiBoard');

    document.body.appendChild(uiBoard);

    let givensAdded = 0;
    
    boardArray.forEach((boardSquare) => {

        const uiSquare = document.createElement('div');
        uiSquare.classList.add('uiSquare');
        uiSquare.style.border = 'solid 1px';

        /*
        if(givensAdded !== numOfGivens){
            boardSquare = getRandomPlayableNum();
            uiSquare.textContent = boardSquare;
            givensAdded++;
        }
        */

        //USED TO GET SQUARE INDEXES (DELETE WHEN DONE USING)
        if(givensAdded !== 81){
            uiSquare.textContent = givensAdded;
            givensAdded++;
        }
        //

        uiBoard.appendChild(uiSquare);

    });
}

generateBoard();

//USE SUB ARRAYS TO TRACK FORMATS
//const squares = [[subarray of boardSquare indexes that make up the boxes][another subarray][and so on...]]
//const rows = [[],[]]
//const columns = [[],[]]

function generateNumOfGivens(level){
    let minGivens;
    let maxGivens;

    if(level === 'EASY'){
        //numOfGivens bet. 69 - 77
        minGivens = 69;
        maxGivens = 77;
    }else if(level === 'MEDIUM'){
        //numOfGivens bet. 43 - 68
        minGivens = 43;
        maxGivens = 68;

    }else{
        //numOfGivens bet. 17 - 42
        minGivens = 17;
        maxGivens = 42;
    }

    let numOfGivens = Math.floor(Math.random() * (maxGivens - minGivens + 1)) + minGivens;
    console.log(numOfGivens);

    return numOfGivens;
}

function createFormats(){
    const rowsArr = [];
    const columnsArr = [];
    const boxesArr = [];

    let indexCounter = 0;
    let maxLength = 9;
    
    //UPDATE WHEN boardArray BECOMES ACCESSIBLE TO THIS FUNCTION
    //  for(let i = 0; i <= boardArray.length; i++)
    for(let i = 0; i <= 80; i++){

        const row = [];
        const column = [];
        const box = [];

        if(indexCounter < maxLength){
            
            row.push(i);
            column.push()


            indexCounter++;
        }else{
            indexCounter = 0;
            row.length = 0;
            column.length = 0;
            box.length = 0;
        }
    }
}

function getFormats(){

}

//GENERATE RAND NUM BETWEEN 1 & 9 INCLUSIVE
function getRandomPlayableNum(){
    const SMALLEST_PLAYABLE_NUM = 1;
    const LARGEST_PLAYABLE_NUM = 9;

    let playableNum = Math.floor(Math.random() * (LARGEST_PLAYABLE_NUM - SMALLEST_PLAYABLE_NUM + 1)) + SMALLEST_PLAYABLE_NUM;

    return playableNum;
}

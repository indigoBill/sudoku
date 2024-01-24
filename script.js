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
            boardSquare = generateRandomPlayableNum();
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

function addGivensToBoard(numOfGivens){
    //USE sections TO ADD GIVENS TO BOARD AT RANDOM AREAS AS OPPOSED TO LOADING THEM W/O ANY RULE CHECKING (LINES 21 - 25)

    let givensAdded = 0;

    while(givensAdded <= numOfGivens){
        let boardPosition = getRandomBoardPosition();

        checkBoardPosition(boardPosition);

        givensAdded++;
    }
}

function getRandomBoardPosition(){
    const HIGHEST_BOARD_POSITION = 80;
    const LOWEST_BOARD_POSITION = 0;

    let randBoardPosition = Math.floor(Math.random() * (HIGHEST_BOARD_POSITION - LOWEST_BOARD_POSITION + 1)) + LOWEST_BOARD_POSITION;

    return randBoardPosition;
}

function checkBoardPosition(randPosition){
    
}

function getLevel(){
    let selectedLevel = prompt('SELECT LEVEL: EASY, MEDIUM, HARD').toUpperCase();

    const levels = ['EASY','MEDIUM','HARD'];

    if(levels.contains(selectedLevel)){
        return selectedLevel;
    }

    return;
}

function playGame(){
    generateBoard();
    let numOfGivens = generateNumOfGivens(getLevel());
    addGivensToBoard(numOfGivens);
}

function generateNumOfGivens(level){
    let minGivens;
    let maxGivens;
    let numOfGivens;

    if(level === 'EASY'){
        //numOfGivens bet. 69 - 77
        minGivens = 69;
        maxGivens = 77;
    }else if(level === 'MEDIUM'){
        //numOfGivens bet. 43 - 68
        minGivens = 43;
        maxGivens = 68;

    }else if(level === 'HARD'){
        //numOfGivens bet. 17 - 42
        minGivens = 17;
        maxGivens = 42;
    }

    numOfGivens = Math.floor(Math.random() * (maxGivens - minGivens + 1)) + minGivens;
    console.log(numOfGivens);

    return numOfGivens;
}

const sections = (function(){
    const allRowSections = [];
    const allColSections = [];
    const allBoxSections = [];
    const MAX_ARR_LENGTH = 9;

    function generateRowSections(){
        const largestFirstElementInRowArr = 72;

        for(let firstElementInRowArr = 0; firstElementInRowArr <= largestFirstElementInRowArr; firstElementInRowArr+=9){

            const rowArr = [];
            let result = firstElementInRowArr;
    
            while(rowArr.length < MAX_ARR_LENGTH){
    
                if(!(rowArr.includes(firstElementInRowArr))){
                    rowArr.push(firstElementInRowArr);
                }else{
    
                    result++;
                    rowArr.push(result);
                }
            }
    
            allRowSections.push(rowArr);
        }
    }

    function generateColSections(){   
        const largestFirstElementInColArr = 9;

        for(let firstElementInColArr = 0; firstElementInColArr < largestFirstElementInColArr; firstElementInColArr++){

            const columnArr = [];
            let result = firstElementInColArr;
            const INCREMENTOR = 9;

            while(columnArr.length < MAX_ARR_LENGTH){

                if(!(columnArr.includes(firstElementInColArr))){
                    columnArr.push(firstElementInColArr);
                }else{

                    result += INCREMENTOR;
                    columnArr.push(result);
                }
            }
            allColSections.push(columnArr);
        } 
    }

    function generateBoxSections(){
        const largestFirstElementInBoxArr = 60;

        for(let firstElementInBoxArr = 0; firstElementInBoxArr <= largestFirstElementInBoxArr; ){

            const boxArr = [];
            let mainIncrementor;
            let result = firstElementInBoxArr;
            const MAX_BOXES_IN_A_BOX_ROW = 3;
            const INCREMENTOR = 7;
            const MAX_BOXES_IN_A_GRID_ROW = 3;
    
            while(boxArr.length < MAX_ARR_LENGTH){
    
                boxArr.push(result);
    
                if(boxArr.length % MAX_BOXES_IN_A_BOX_ROW === 0){
                    result+=INCREMENTOR;
                }else{
                    result++;
                }
            }
            allBoxSections.push(boxArr);
            
            if(allBoxSections.length % MAX_BOXES_IN_A_GRID_ROW === 0){
                mainIncrementor = 21;
            }else{
                mainIncrementor = 3;
            }
    
            firstElementInBoxArr+=mainIncrementor;
        }
    }

    generateRowSections();
    generateColSections();
    generateBoxSections();

    function getAllSections(){
        console.log([allRowSections, allColSections, allBoxSections]);
        return [allRowSections, allColSections, allBoxSections];
    }

    return { getAllSections };
})();

sections.getAllSections();

//NOT GOOD CODE TO HAVE IT RANDOMLY GENERATE NUMS IT WASTES TIME INSTEAD BUILD A SYSTEM THAT CHECKS THE 
//ROWS COLS AND BOXES AND RETRIEVES THE POSSIBLE PLAYABLE NUMS
//USE THIS SYSTEM TO FILL THE BOARD W/ GIVENS

//GENERATE RAND NUM BETWEEN 1 & 9 INCLUSIVE
function generateRandomPlayableNum(){
    const SMALLEST_PLAYABLE_NUM = 1;
    const LARGEST_PLAYABLE_NUM = 9;

    let playableNum = Math.floor(Math.random() * (LARGEST_PLAYABLE_NUM - SMALLEST_PLAYABLE_NUM + 1)) + SMALLEST_PLAYABLE_NUM;

    return playableNum;
}


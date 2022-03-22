//Get the grid container
const gridContainer = document.querySelector('.grid-container');

//Get grid size input
const gridSize = document.querySelector('#grid-size');

//Setup clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

//Setup change button
const changeButton = document.querySelector('#set-grid-size');
changeButton.addEventListener('click', changeGrid);

//Draw grid
drawGrid(50);

function changeGrid() {
    
}

function drawGrid(number) {
    //Get height and width of the squares
    let containerWidth = gridContainer.clientWidth; //Using clientWidth to not include border
    let boxMargin = 1;
    let borderWidth = 1;
    let sideLength = (containerWidth / number) - (boxMargin * 2);
    let numOfBoxes = number * number;

    console.log(containerWidth);
    console.log(sideLength);

    //Create array of div elements
    for(i=0; i < numOfBoxes; i++) {
        //Create div
        const div = document.createElement('div');

        //Style the div
        div.style.width = `${sideLength}px`;
        div.style.height = `${sideLength}px`;
        div.style.margin = `${boxMargin}px`;
        div.style.border = `${borderWidth}px solid black`; 
        div.style.boxSizing = "border-box"; //Border box to account for padding and border
        div.setAttribute('id', i);

        //Add event listener for hover
        div.addEventListener('mouseover', function(event) {
            //Change color of the box
            event.target.style.backgroundColor = "black";
        });

        //Append to grid container
        gridContainer.append(div);
    }
}

function clearGrid() {
    //Get all boxes within the grid container
    const boxes = gridContainer.querySelectorAll("*");

    //Set color back to white
    boxes.forEach(box => box.style.backgroundColor = "white");
}
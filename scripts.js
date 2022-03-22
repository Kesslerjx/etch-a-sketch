//Get the grid container
const gridContainer = document.querySelector('.grid-container');

//Draw grid
drawGrid(20);

function drawGrid(number) {
    //Get height and width of the squares
    let containerWidth = gridContainer.clientWidth; //Using clientWidth to not include border
    let boxMargin = 2;
    let borderWidth = 2;
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

        //Append to grid container
        gridContainer.append(div);
    }
}
// color selector 
// size selection input 
// this are globally called varibales for the remainder of the code
const colorInput = document.getElementById('colorPicker'); //calls for the color Picker
const sizeInput = document.getElementById('sizePicker'); // calls for the size Picker 
const canvas = document.getElementById('pixelCanvas');  // calls for the Canvas 


// size submitted call makeGrid()

sizeInput.addEventListener('click',makeGrid); // adds a listener for the click event to make the grid 

// this function sets the rows and columns for the table based on user input
function makeGrid(event) {                  
    event.preventDefault();
    canvas.innerHTML = '';
    let r = document.getElementById("inputHeight").value;
    let c = document.getElementById("inputWidth").value;
    
    for (let i = 0; i < r; i++) {
        let row = document.createElement('TR'); 
        canvas.appendChild(row);
            for (let j = 0; j < c; j++) {
            let cell = document.createElement('TD') 
            row.appendChild(cell);
        }
    }
}

 // this adds the listener for the click of the grid squeare and the color 
canvas.addEventListener('click', function(event) { 
    let colorPixel = event.target;
    if (colorPixel.tagName==='TD'){
        let color = colorInput.value;
        colorPixel.style.backgroundColor = color;
    }
})
// color selector 
// size selection input 
const colorInput = document.getElementById('colorPicker');
const sizeInput = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas'); 


// size submitted call makeGrid()

sizeInput.addEventListener('click',makeGrid);

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


canvas.addEventListener('click', function(event) {
    let colorPixel = event.target;
    if (colorPixel.tagName==='TD'){
        let color = colorInput.value;
        colorPixel.style.backgroundColor = color;
    }
})
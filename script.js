let buttons = document.querySelectorAll(".b");  // Select all buttons
let inp = document.querySelector("input");  // Select the input field

console.log(buttons);

// Iterate through all the buttons
for (let button of buttons) {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        inp.value += button.innerText; 
         let d = button.innerText;
         
    });
}

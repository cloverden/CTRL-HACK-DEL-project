
//script for running button clicks//

function onButtonClick() {
        const button_sub = document.querySelector('.button input[type="submit"]');
       if (button_sub) {
        button_sub.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('Submission complete');
        }); 
    } else {
        console.error("No button"); 
    }; 
} 

window.onload = onButtonClick;

/*const url = new URL( 
    "http://localhost:3000/cooking" 
); 
url.toString()*/ 

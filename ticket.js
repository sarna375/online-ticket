// function next(){
//     const ticketSec=document.getElementById('ticket');
//     ticketSec.classList.add('hidden');
// }

// const successSec=document.getElementById('success');
// successSec.classList.remove('hidden');


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


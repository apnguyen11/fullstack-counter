// import { builtinModules } from "module";

const increment = document.getElementById('increment');
increment.addEventListener("click", function() {
    postIncData('/increment');
})
// console.log('started')
// function clicked(){
//     console.log('clicked function')
// }
function postIncData(url, data) {
    console.log('clicked')
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        console.log(response)
        return response.json();
    }).then(function(counter) {
        console.log(counter);
        let counterDOM = document.getElementById("counter1");
        counterDOM.textContent = counter;
    });
   
};

const decrement= document.getElementById('decrement');
decrement.addEventListener("click", function() {
    postIncData('/decrement');
})

function postDecData(url, data) {
    console.log('clicked')
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        console.log(response)
        return response.json();
    }).then(function(counter) {
        console.log(counter);
        let counterDOM = document.getElementById("counter1");
        counterDOM.textContent = counter;
    });
   
};

const reset= document.getElementById('reset');
reset.addEventListener("click", function() {
    postResData('/reset');
})

function postResData(url, data) {
    console.log('clicked')
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        console.log(response)
        return response.json();
    }).then(function(counter) {
        console.log(counter);
        let counterDOM = document.getElementById("counter1");
        counterDOM.textContent = counter;
    });
   
};

// function renderIncrement(inc) {
//     let div = document.getElementById("counter1");
   
//     div.innerHTML = inc;
//     console.log(inc)
// };

// function getCounterValue() {
//     fetch('/value') // GET
//         .then(function(response) {
//             return response.json();
//         }).then(function(counter) {
//             console.log(counter);
//             let counterDOM = document.getElementById("counter1");
//             counterDOM.textContent = counter;
//         });
// };











// function getIncrement(){
//     fetch('/increment')
//         .then (function(response){
//             return response.json();
//         })
//         .then(function(myJson){
//             renderIncrement(myJson);
//         });
    

// }
// getIncrement();

// function renderIncrement(increment){
//     let div = document.getElementById('counter1');
//     div.innterHTML = increment
//     console.log(increment, "incrment postedd!#")

// }

// function postIncData(url, data){
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .catch(error => error)
// }




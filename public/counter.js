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



var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 10,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();










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




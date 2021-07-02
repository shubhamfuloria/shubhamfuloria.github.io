x = 3600;
for (let i = 0; i < x; i++) {

        let node = document.createElement('div');

        document.querySelector('.main-pad').appendChild(node);
}




//styling sketch pad


// pad.style.grid-template-columns = 'repeat(5, 1fr)';
// pad.style.grid-template-rows = 'repeat(5, 1fr)';

let nodes = document.querySelector('.main-pad').children;
let nodesArray = Array.from(nodes);

nodesArray.forEach(function(elm){

        elm.addEventListener('mouseover', function(){

                elm.style.background = 'black';
        })
})

document.querySelector('.clear-btn').addEventListener('click', function(){
        nodesArray.forEach(function(elm){

                elm.style.background = 'white';
        })
})
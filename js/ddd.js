let mainWraper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');


function ajax(){
    let requist = new XMLDocument();
    requist.open('GET', 'http://jsonplaceholder.typicode.com/posts')

    requist.addEventListener('load', function(){
        let data = JSON.parse(requist.responseText);
        
        data.forEach(element => {
            createPost(element);
        });
       
    });
    requist.send();
}
function createPost(item) {
    let divWraper = document.createElement('div'); //შევქმენი დივი
    divWraper.classList.add('posts');
    divWraper.setAttribute('data-id', item.id);

    let h1 = document.createElement('h1'); //შევქმენი 
    h1.innerText = item.id;

    let text = document.createElement('div'); //შევქმენი მეორე დივი
    text.classList.add('title');
    text.innerText = item.title;
    
    divWraper.appendChild(h1);  //ჩავსვი დივში
    divWraper.appendChild(text); //ჩავსვი დივში

    divWraper.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        openoverlay(id);
    }); 

    mainWraper.appendChild(divWraper);
}

function openoverlay(id) {
    overlay.classList.add('active');
    console.log(id);
}
close.addEventListener('click', function(){
    overlay.classList.remove('active');
})

ajax();
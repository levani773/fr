let mainWraper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');
let content = document.getElementById('content');
let addPost = document.getElementById('add');
let postOverlay = document.getElementById('postOverlay');
let form = document.getElementById('form');


//http://jsonplaceholder.typicode.com/posts

function ajax(url, callback) {
    let requist = new XMLHttpRequest();
    requist.open('GET', url);

    requist.addEventListener('load', function() {
        let data = JSON.parse(requist.responseText);
        callback(data);  
       
    });

    requist.send();
}

ajax('https://jsonplaceholder.typicode.com/posts', function(data) {
    printdata(data);
});

function printdata(data) {
    data.forEach(element => {
        createPost(element);
    });
}

function createPost(item) {
    let divWraper = document.createElement('div'); //შევქმენი დივი
    divWraper.classList.add('posts');
    divWraper.setAttribute('data.id', item.id);

    let deletebutton = document.createElement('button');
    event.stopPropagation();
    deletebutton.setAttribute('data.id', item.id);
    deletebutton.innerText = 'delete';


    let h1 = document.createElement('h1'); //შევქმენი 
    h1.innerText = item.id;

    let text = document.createElement('div'); //შევქმენი მეორე დივი
    text.classList.add('title');
    text.innerText = item.title;
    
    divWraper.appendChild(h1);  //ჩავსვი დივში
    divWraper.appendChild(text); //ჩავსვი დივში
    divWraper.appendChild(deletebutton);

    deletebutton.addEventListener('click', function(event){
        let id = event.target.getAttribute('data.id');
        deletepost(id);
    });

    divWraper.addEventListener('click', function(event) {
        let id = event.target.getAttribute('data.id');
        openoverlay(id);
    }); 

    mainWraper.appendChild(divWraper);
}

function openoverlay(id) {
    overlay.classList.add('active');
    let url = 'https://jsonplaceholder.typicode.com/posts/${id}';
    ajax(url, function(data) {
        overlayfunction(data);
    }) 
    //console.log(id);
}
function deletepost(id) {
    let url = 'https://jsonplaceholder.typicode.com/posts/${id}';
    fetch(url, {
        method: 'delete',
    })    
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function overlayfunction(item) {
    let spanuserid = document.createElement('span');
    spanuserid.innerText = item.userid;

    let pid = document.createElement('p');
    pid.innerText = item.id;

    let title = document.createElement('h2');
    title.innerText = item.title;

    let description = document.createElement('p');
    description.innerText = item.body;

    content.appendChild(spanuserid);
    content.appendChild(pid);
    content.appendChild(title);
    content.appendChild(description);
}

close.addEventListener('click', function() {
    overlay.classList.remove('active');
    content.innerHTML = ' ';
})

addPost.addEventListener('click', function() {
    postOverlay.classList.add('active');
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
})

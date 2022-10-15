let mainWraper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');
let content = document.getElementById('content');

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

ajax('http://jsonplaceholder.typicode.com/posts', function(data) {
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
    divWraper.setAttribute('data-id', item.id);

    let h1 = document.createElement('h1'); //შევქმენი 
    h1.innerText = item.id;

    let text = document.createElement('div'); //შევქმენი მეორე დივი
    text.classList.add('title');
    text.innerText = item.title;
    
    divWraper.appendChild(h1);  //ჩავსვი დივში
    divWraper.appendChild(text); //ჩავსვი დივში

    divWraper.addEventListener('click', function(event) {
        let id = event.target.getAttribute('data-id');
        openoverlay(id);
    }); 

    mainWraper.appendChild(divWraper);
}

function openoverlay(id) {
    overlay.classList.add('active');
    let url = 'http://jsonplaceholder.typicode.com/posts/$[id]';
    ajax(url, function(data) {
        overlayfunction(data);
    }) 
    console.log(id);
}

function overlayfunction(item) {
    let spanuserid = document.createElement('span');
    spanuserid.innerText = item.userId;

    let pId = document.createElement('p');
    pId.innerText = item.Id;

    let title = document.createElement('h2');
    title.innerText = item.title;

    let description = document.createElement('p');
    description.innerText = item.body;

    content.appendChild(spanuserid);
    content.appendChild(pId);
    content.appendChild(title);
    content.appendChild(description);
}

close.addEventListener('click', function() {
    overlay.classList.remove('active');
});


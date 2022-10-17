
let button = document.querySelector('.button');
let input = document.querySelector('.input-form');
let ul = document.querySelector('.input-ul');
let form = document.querySelector('.form-wraper');

form.addEventListener('submit',function(event){
    event.preventDefault();
   // get input value
   let value = input.value;
   // add input value
   if (value != ' '){
    let li = document.createElement('li');

   let btndelete = document.createElement('button');
    btndelete.textContent = 'delete';
    btndelete.addEventListener('click', function(){
        li.remove();
    })
   
   li.textContent = value;
   li.appendChild(btndelete);
   ul.appendChild(li);
   input.value = ' ';
   }
   

});

document.querySelector('.clearlist').addEventListener('click', function(){
    ul.innerHTML = ' ';
})
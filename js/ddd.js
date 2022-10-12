
let currentpage = 1;

let totalpages;

function getusersinfo(page) {
   function render(){
        let response = this.responseText;
        let responsedata = JSON.parse(response);
       
        var fragment = document.createDocumentFragment();

        responsedata.data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.first_name;
            li.classList.add('list');

            fragment.appendChild(li);
        });
       
        document.getElementById('list').innerHTML =' ';
        document.getElementById('list').appendChild(fragment);
        totalpages = responsedata.total_pages();
    
   }
   
   let requist = new XMLHttpRequest();
   requist.addEventListener('load',render);
   requist.open('GET', 'https://reqres.in/api/users?page=' + page);
   requist.send();
   }

    document.getElementById('prev').addEventListener('click', function() {
       if ( currentpage == 1) {
        return;
       }
        currentpage -= 1;

    getusersinfo(currentpage);
})

document.getElementById('next').addEventListener('click', function() {
    if ( currentpage == totalpages) {

    }
    currentpage += 1;

    getusersinfo(currentpage);
});

getusersinfo();
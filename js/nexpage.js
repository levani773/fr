let currentPage = 1;

function getUserInfo(page) {
fetch('https://reqres.in/api/users?page=' + page , {
    method: 'GET'
})
.then(function(response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.json();
})
.then(function(responsedata){

    var fragment = document.createDocumentFragment();

    responsedata.data.forEach( item => {
        let li = document.createElement('li');
        li.textContent = item.first_name;
        li.classList.add('list');
        fragment.appendChild(li);
    })
        
        document.getElementById('list').appendChild(fragment);
    })


.catch(function(error){
    if (error == 404) {
        console.log('page not found');
    }else{
    console.log('error');
}
});
}
document.getElementById('loadmore').addEventListener('click', function() {
    currentPage += 1;
    getUserInfo(currentPage);
})
getUserInfo(currentPage)
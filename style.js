fetch('user.json', {
    method: 'GET'
})
.then(function(response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.json();
})
.then(function(responsedata){
    console.log(responsedata);

    let ul = document.createElement('ul');
    ul.classList.add('ul-list');

    var fragment = document.createDocumentFragment();

    responsedata.data.forEach( item => {
        let li = document.createElement('li');
        li.textContent = item.first_name;
        li.classList.add('list');
        fragment.appendChild(li);

    })
        ul.appendChild(fragment);
        document.getElementById('api').appendChild(ul);
    })


.catch(function(error){
    if (error == 404) {
        console.log('page not found');
    }else{
    console.log('error');
}
});
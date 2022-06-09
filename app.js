var getData = document.getElementById('get');
var sendData = document.getElementById('send');
// Gatting Data form html form 

getData.addEventListener('click',get);
sendData.addEventListener('click',send);

function get(){

    const xhr = new XMLHttpRequest();

    xhr.onload = function () { 
        // console.log(this.response);
        var doucmentshere = document.getElementById('getDataFromValue');

        doucmentshere.innerHTML = this.response;
     }

     xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
     xhr.responseType = "json";
     xhr.send();

}

function send(){
 
}
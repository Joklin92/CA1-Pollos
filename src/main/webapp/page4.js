document.getElementById("btn").addEventListener("click", fetching);
document.getElementById("btn2").addEventListener("click", fetchAll);

function fetching(e) {
    e.preventDefault();
    var url = 'https://jsonplaceholder.typicode.com/users/' + document.getElementById("numb").value;
    var person;

    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (json) {

                findPerson(json);
            });
        } else {
            console.log('Network request for person.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
};
function findPerson(json) {
    var person = json;
    var personDisplay = document.querySelector('pre');
    personDisplay.innerHTML = "";
    personDisplay.innerHTML += "Person name: " + json.name
        + "\r\nPerson phone: " + json.phone
        + "\r\nPerson address: " + json.address.street + ", "
        + json.address.city + ", "
        + json.address.zipcode +
        "\r\nPerson geo: " + "lat: " + json.address.geo.lat
        + " lng: " + json.address.geo.lng;
}

var homepage = 'https://jsonplaceholder.typicode.com/users/';
function fetchAll(e) {
    e.preventDefault();
    var personDisplay = document.querySelector('table');
    $.get(homepage, function(response) {
       console.log(response);
          for(var i = 0; i< response.length;i++) {

        var name = JSON.stringify(response[i].name); 
        var phone = JSON.stringify(response[i].phone); 
        personDisplay.innerHTML += '<tr>'+ '<td>'+ name + '</td>' +
         '<td>' + phone + '</td></tr>';
          }
        /*
       var myJSON = JSON.stringify(response);
       document.getElementById("userInfo").innerHTML = myJSON;
    */ 
    });
    }

function findAll(json) {
var personDisplay = document.querySelector('pre');
personDisplay.innerHTML = "";
personDisplay.innerHTML += "Person name: " + json.name
+ "\r\nPerson phone: " + json.phone;

}

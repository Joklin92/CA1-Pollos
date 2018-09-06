document.getElementById("btn").addEventListener("click", fetching);
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

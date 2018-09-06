var homepage = "https://jsonplaceholder.typicode.com/users/";
var fetch = document.getElementById("submitInput").onclick = fetcher;
var all = document.getElementById("getAll").onclick = fetchAll;

function fetcher() {
    $.get(homepage + document.getElementById("userInput").value, function(response) {        
        var id = JSON.stringify("id: "+response.id);
        document.getElementById("id").textContent = id;
        var name = JSON.stringify("name: "+response.name);
        document.getElementById("name").textContent = name;
        var username = JSON.stringify("username: "+response.username);
        document.getElementById("username").textContent = username;
        var email = JSON.stringify("email: "+response.email);
        document.getElementById("email").textContent = email;        
        var street = JSON.stringify("street: "+response.address.street);
        document.getElementById("street").textContent = street;      
        var suite = JSON.stringify("suite: "+response.address.suite);
        document.getElementById("suite").textContent = suite;      
        var city = JSON.stringify("city: "+response.address.city);
        document.getElementById("city").textContent = city;      
        var zipcode = JSON.stringify("zip-code: "+response.address.zipcode);
        document.getElementById("zip-code").textContent = zipcode;      
        var lat = JSON.stringify("lat: "+response.address.geo.lat);
        document.getElementById("lat").textContent = lat; 
        var lng = JSON.stringify("lng: "+response.address.geo.lng);
        document.getElementById("lng").textContent = lng;
        var phone = JSON.stringify("phone: "+response.phone);
        document.getElementById("phone").textContent = phone;
        var website = JSON.stringify("website: "+response.website);
        document.getElementById("website").textContent = website;
        var companyName = JSON.stringify("companyName: "+response.company.name);
        document.getElementById("companyName").textContent = companyName;
        var catchPhrase = JSON.stringify("catchPhrase: "+response.company.catchPhrase);
        document.getElementById("catchPhrase").textContent = catchPhrase;
        var bs = JSON.stringify("bs: "+response.company.bs);
        document.getElementById("bs").textContent = bs;
        

     });
    }


function fetchAll() {
$.get(homepage, function(response) {
  // console.log(response);
      
    var name = JSON.stringify("name: "+response.name);
    document.getElementById("name").textContent = name +"<br>";    
    var phone = JSON.stringify("phone: "+response.phone);
    document.getElementById("phone").textContent = phone+"<br>";
 /*
   var myJSON = JSON.stringify(response);
   document.getElementById("userInfo").innerHTML = myJSON;
*/ 
});
}
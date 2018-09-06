var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];

var all = boys.concat(girls);
console.log(all);
//Displaying in HTML side
document.getElementById("boys").innerHTML = boys.join(', ');
document.getElementById("girls").innerHTML = girls.join(', ');
document.getElementById("all").innerHTML = all.join(', ');
var clickCounter = 0;

/*
make it so when you are adding a boy/girk, it adds to the boy/girl list, and all list
*/
var boyAddTag = document.getElementById("addboy").onclick = addBoy;
function addBoy(){
    const boy = document.getElementById('newboy').value;
    console.log(boys);
    console.log(all);

    console.log(boy);
    console.log("Adding boy after break point here!");
    
    boys.push(boy);
    all.push(boy);
    console.log(boys);
    console.log(all);

    document.getElementById("boys").innerHTML = boys.join(', ');
    document.getElementById("all").innerHTML = all.join(', ');
};

var girlAddTag = document.getElementById("addgirl").onclick = addGirl;
function addGirl(){
    const girl = document.getElementById('newgirl').value;
    console.log(girls);
    console.log(all);

    console.log(girl);
    console.log("Adding girl after break point here!");

    girls.push(girl);
    all.push(girl);
    console.log(girls);
    console.log(all);

    document.getElementById("girls").innerHTML = girls.join(', ');
    document.getElementById("all").innerHTML = all.join(', ');
};

/*
Makes it so when you remove a person it removes the specific one
*/
var boyRemoveTag = document.getElementById("removeboy").onclick = removeBoy;

function removeBoy(){
    const toRemove = document.getElementById('newboy').value;    
    console.log(boys)
    console.log(all);

    console.log(toRemove);
    console.log("Removing boy after this break point!");

    var foundAll = all.indexOf(toRemove);
    var foundBoy = boys.indexOf(toRemove);

    while (foundAll !== -1 && foundBoy !== -1) {
        all.splice(foundAll, 1);
        foundAll = all.indexOf(toRemove);
        boys.splice(foundBoy, 1);
        foundBoy = boys.indexOf(toRemove);

        console.log(boys);
        console.log(all);

        document.getElementById("boys").innerHTML = boys.join(', ');
        document.getElementById("all").innerHTML = all.join(', ');
    }
};

var girlRemoveTag = document.getElementById("removegirl").onclick = removeGirl;

function removeGirl(){
    const toRemove = document.getElementById('newgirl').value;    
    console.log(girls)
    console.log(all);

    console.log(toRemove);
    console.log("Removing girl after this break point!");

    var foundAll = all.indexOf(toRemove);
    var foundGirl = girls.indexOf(toRemove);

    while (foundAll !== -1 && foundGirl !== -1) {
        all.splice(foundAll, 1);
        foundAll = all.indexOf(toRemove);
        girls.splice(foundGirl, 1);
        foundGirl = girls.indexOf(toRemove);

        console.log(girls);
        console.log(all);

        document.getElementById("girls").innerHTML = girls.join(', ');
        document.getElementById("all").innerHTML = all.join(', ');
    }
};

/*
Reverses the order
*/
var reverseAll = document.getElementById("reverse").onclick = reverseOrder;
function reverseOrder(){
    all.reverse();
    console.log(all.join(', '));
    document.getElementById("all").innerHTML = all.join(', ');
};

document.getElementById("sort").onclick = function(e){
    clickCounter += 1;
    all.sort(sortingOrder);
    console.log("click: " + clickCounter);
    if(clickCounter % 2 === 0)
    {
        all.reverse(reverseOrder);
        console.log("Names reversed: ", all); 
         
    } else {
        console.log("Names Sorted: " + all);
    }
    document.getElementById("all").innerHTML = all.join(', ');
}

function sortingOrder(a, b) {
    /* Storing case insensitive comparison */
    var comparison = a.toLowerCase().localeCompare(b.toLowerCase());
    /* If strings are equal in case insensitive comparison */
    if (comparison === 0) {
        /* Return case sensitive comparison instead */
        return a.localeCompare(b);
    }
    /* Otherwise return result */
    
    return comparison;
};

document.getElementById("first").onclick = removeFirst;
function removeFirst(){
    all.shift(all);
    console.log(all);
};

document.getElementById("last").onclick = removeLast;
function removeLast(){
    all.pop(all);
    console.log(all);
};

//Removes first element from EVERY list after they are sorted
document.getElementById("first").onclick = function(e){
    /*var sortedNames = all.sort(sortingOrder);
    var sortedBoys = boys.sort(sortingOrder);
    var sortedGirls = girls.sort(sortingOrder);
    console.log(sortedNames);
    console.log(sortedBoys);
    console.log(sortedGirls);*/

    console.log("Removing first element after this");
    all.shift();
    boys.shift();
    girls.shift();

    console.log(all.join(', '));
    console.log(boys.join(', '));
    console.log(girls.join(', '));
    document.getElementById("all").innerHTML = all.join(', ');
    document.getElementById("boys").innerHTML = boys.join(', ');
    document.getElementById("girls").innerHTML = girls.join(', ');
};

document.getElementById("last").onclick = function(e){
    /*var sortedNames = all.sort(sortingOrder);
    var sortedBoys = boys.sort(sortingOrder);
    var sortedGirls = girls.sort(sortingOrder);
    
    console.log(sortedNames);
    console.log(sortedBoys);
    console.log(sortedGirls);*/
    
    console.log("Removing last element after this");
    all.pop();
    boys.pop();
    girls.pop();

    console.log(all.join(', '));
    console.log(boys.join(', '));
    console.log(girls.join(', '));
    document.getElementById("all").innerHTML = all.join(', ');
    document.getElementById("boys").innerHTML = boys.join(', ');
    document.getElementById("girls").innerHTML = girls.join(', ');
}
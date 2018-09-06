var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

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
function addBoy() {
    const boy = document.getElementById('newboy').value;
    console.log(boys);
    console.log(all);

    console.log(boy);
    console.log("Adding boy after break point here!");

    boys.push(boy);
    all.push(boy);
    console.log(boys);
    console.log(all);

    update();
};

var girlAddTag = document.getElementById("addgirl").onclick = addGirl;
function addGirl() {
    const girl = document.getElementById('newgirl').value;
    console.log(girls);
    console.log(all);

    console.log(girl);
    console.log("Adding girl after break point here!");

    girls.push(girl);
    all.push(girl);
    console.log(girls);
    console.log(all);

    update();
};
const update = function () {
    document.getElementById("girls").innerHTML = girls.join(', ');
    document.getElementById("all").innerHTML = all.join(', ');
    document.getElementById("boys").innerHTML = boys.join(', ');
}
/*
Makes it so when you remove a person it removes the specific one
*/
document.getElementById("removeboy").onclick = () => { return remove(true); };

document.getElementById("removegirl").onclick = () => { return remove(false); };

function remove(boy) {
    if (document.getElementById("first").checked) {
        if (boy) {
            var toRemove = boys[0];
            for(var i = 0; i < all.length; i++)
            {
                if(all[i] == toRemove) {
                    all.splice(i, 1);
                }
            }
            boys.shift();
        } else {
            var toRemove = girls[0];
            for(var i = 0; i < all.length; i++)
            {
                if(all[i] == toRemove) {
                    all.splice(i, 1);
                }
            }
            girls.shift();
        }

    } else {
        if (boy) {
            var toRemove = boys[boys.length -1];
            for(var i = 0; i < all.length; i++)
            {
                if(all[i] == toRemove) {
                    all.splice(i, 1);
                }
            }
            boys.pop();
        } else {
            var toRemove = girls[girls.length -1];
            for(var i = 0; i < all.length; i++)
            {
                if(all[i] == toRemove) {
                    all.splice(i, 1);
                }
            }
            girls.pop();
        }
    }
    update();
};

/*
Reverses the order
*/
var reverseAll = document.getElementById("reverse").onclick = reverseOrder;
function reverseOrder() {
    all.reverse();
    console.log(all.join(', '));
    document.getElementById("all").innerHTML = all.join(', ');
};

document.getElementById("sort").onclick = function (e) {
    clickCounter += 1;
    all.sort(sortingOrder);
    console.log("click: " + clickCounter);
    if (clickCounter % 2 === 0) {
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

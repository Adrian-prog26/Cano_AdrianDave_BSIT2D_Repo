var dogName = "Callie";
var dogWeight = 23;
if (dogWeight > 28) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Luna";
var dogWeight = 22;
if (dogWeight > 25) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Gin";
var dogWeight = 24;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Viance";
var dogWeight = 24;
if (dogWeight > 19) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

function bark(name, weight) {
    if(weight > 20) {
        console.log(name + "Says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}


bark("Callie", 60);
bark("Luna", 15);
function receivesAFunction (callback) {
    callback();
}
receivesAFunction(Spy);

function Spy () {
    console.log("hi")
}

function returnsANamedFunction() {
    return function namedFunction() {3 + 3};
}

function returnsAnAnonymousFunction() {
    return x => (1+2)
   
}


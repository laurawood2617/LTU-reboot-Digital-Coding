//global scope
//can be accessed anywhere within the code

//local scope
//only accessible within a function in the code. Can only be made accessible using return function.

var globalScope = 'Global Scope';

console.log (globalScope);

function scope() {
    var localScope = 'Local Scope';

    console.log(globalScope);

    return localScope;
}

var scopeValue= scope();

console.log (scopeValue);


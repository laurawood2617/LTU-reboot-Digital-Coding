/*
Declaring a function

To declare a function, you use the function keyword followed by the function name, a list of parameters and the function body.


function functionName (parameters) {

    function body 

    Code goes here


}

Once we have created a function we need to envoke it and ask it to do what it should. We do this by writing the name of the function and the parameters of the function on a separate line of code

You can add more than one parameter to a specific function, these can be called arguments.
*/

function greeting (name) {

    console.log('Hello ' + name);
}

greeting ('Laura');

function nameAndAge (name, age) {

    console.log (name + ' is ' + age + 'years old');
}

nameAndAge ('Laura', 23);
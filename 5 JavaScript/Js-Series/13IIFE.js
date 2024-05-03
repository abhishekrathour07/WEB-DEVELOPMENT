// IIFE ==> Immediately Invoked Function Expression

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


( () =>  console.log(`DB CONNECTED TWO`)
 )();
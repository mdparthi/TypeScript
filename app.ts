// Arrow functions

var numbers = [1,2,3,4,5]

// ES 5 syntax
// var newArr = numbers.map(function(value){
//     return value * 2;
// })

// ES 6 syntax
var newArr = numbers.map((value) => value*2);

console.log(newArr);

// Template String
    // Multiline string
    //Include variables in string

    var firstName = "Foo";
    console.log(`Hello
    ${firstName} !`);

// Constants amd block scopes
    // let
    // const

    function demo (arr){
        if(arr.length){
            var load = "Loading...";
            console.log(load);
            // console.log(flash) // if we define as 'var' undefined
        } else {
            // var flash = "Flashing";
            let flash = "Flashing";
        }
    }

demo(["foo","bar", "bam"]);

// Destructuring

let arr =["Foo", "Bar", "Ban"];
let [arr1,  arr3] = arr;
console.log(arr3);

let mObject = {
    drawText : (text) => { console.log("Drawing " + text)},
    drawCircle : (r) =>{console.log(Math.PI * r * r)}
}

let {drawCircle, drawText} = mObject;
drawCircle(3);
drawText("Sample Text!");

// Spread and Rest params

// function demo1(...args){
//     console.log(args[1]);
// }

function demo1(song, ...args){
    console.log(args[1]);
}


demo1("song", "lyrics", "script" );
demo1("song", "lyrics" );
demo1("song" );

// let arr =["Foo", "Bar", "Ban"];
// arr value is present in the begining of the progm
let friends = ["Baz", arr] // [ 'Baz', [ 'Foo', 'Bar', 'Ban' ] ] 
let friends1 = ["Baz", ...arr] // [ 'Baz', 'Foo', 'Bar', 'Ban' ]
console.log(friends1);

//Decorators ( ES 7 features)
// Available from angular core package
    // Class
    // Property
    // Parmeter
    // Method

// Decorators are simple functions,
// which accepts config 

// Class level decorators

    // Component ()
    // Injectable() services
    // Directive()
    // Pipe()
    // NgModule()

// Property decorators

    // Input()
    // Output()
    // HostBinding()

// Parameter
    // Inject()

// Method 
    // HostListener

// Additional types
    // any
    // enum
    // void

    // Classes jave thier own type

    class Foo{}
    class Bar{}
    class Bam{
        constructor(foo : Foo, bar : Bar) {}

        // // let foo = new Foo() inside constructor
        // constructor(private foo : Foo, bar : Bar) {}
    }



//module pattern
var myModule = (function () {
  //private methods and properties are encapsulated in the method's COVE

  var _privateVar = "Hello World";

  function privateMethod() {
    console.log("Hello world");
  }

  //public methods and properties are returned within an object by the IIFE
  return {
    publicMethod: function () {
      console.log("Hello World");
    },
    publicMethod2: function () {
      privateMethod();
    },
  };
})();

//revealing module pattern
//it reveals only the methods or properties we want to be publicly available
var myModule2 = (function () {
  var _privateProperty = "Hello world";
  var publicProperty = "I am a public property";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty,
  };
})();

//module pattern
myModule.publicMethod(); //outputs hello world
myModule.publicMethod2(); //outputs hello world because it can access the closure
// myModule.privateMethod(); //undefined because it's protected by the module closure
// myModule._privateVar; // undefined because it's protected by the module closure

//revealing module pattern
myModule2.publicMethod(); //prints hello world, because public method has access to closure
console.log(myModule2.publicProperty); //prints I am a public property because it's returned by the module

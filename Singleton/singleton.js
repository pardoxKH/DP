var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log("Same Instance?", instance1 === instance2); //prints true, we are only allowing one instance to be instantiated

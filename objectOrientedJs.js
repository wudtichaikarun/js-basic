console.log('%c Object Oriented JS and Prototypal Inheritance', 'background: #222; color: #bada55; font-size: 1rem;');

/* -----------------------------------------------------
*  UNDERSTANDING THE PROTOTYPE
--------------------------------------------------------*/
console.group('%c - Understanding the Prototype','color: green');

  var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullname: function () {
      return this.firstname + ' ' + this.lastname;
    }
  }

  var ro = {
    firstname: 'Ro',
    lastname: 'Mantic'
  }

  // !!! don't do thie ever for demo purposes only
  ro.__proto__ = person;
  console.log(ro.getFullname());
  console.log(ro.firstname);

  var yot = {
    firstname: 'Yot'
  }

  yot.__proto__ = person
  console.log(yot.getFullname());

  var obj = {};
  var fn = function() {};
  var arr = [];

console.groupEnd();

/* -----------------------------------------------------
* REFLECTION AND EXTEND
--------------------------------------------------------*/
console.group('%c - Reflection and Extend set Prototype in wrong!! way', 'color: green');

  var person2 = {
    firstname: 'Default',
    lastname: 'Default',
    getFullname: function () {
      return this.firstname + ' ' + this.lastname;
    } 
  }

  var ton = {
    firstname: 'Ton',
    lastname: 'Pomkhom'
  }

  // !!! don't do thie ever for demo purposes only
  ton.__proto__ = person2;
  console.log(ton);

  for (var prop in ton) {
    // check only properties in ton obj
    if(ton.hasOwnProperty(prop) ) {
      console.log(prop + ': ' + ton[prop]);
    }
  }

  console.group('-- use undersore.js');
    var tom = {
      address: '111 Main St.',
      getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
      }
    }

    var jack = {
      getFirstName: function() {
        return firstname; 
      }
    }

    // _.extend(ton, tom, jack);
    // console.log(ton);

    // ES6 so easy
    // var newTon = {...ton, ...tom, ...jack}
    // console.log(newTon);
    

  console.groupEnd()

  console.group('-- use some code from underscore.JS');

    var isObject = function(obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    }
    
    var allKeys = function(obj) {
      if (!isObject(obj)) return [];
      var keys = [];
      for (var key in obj) keys.push(key);
      return keys;
    }
    
    var createAssigner = function(keysFunc, defaults) {
      return function(obj) {
        // check length ton, tom, jack
        var length = arguments.length; // 3
    
        if(defaults) obj = Object(obj);
        
        if(length < 2 || obj == null) return obj;
    
        // loop in tom, jack no! ton
        for(var index = 1; index < length; index++) {
          var source = arguments[index],
          // invoked function allKeys(source)
          keys = keysFunc(source),
          // - ["address", "getFormalFullName"]
          // - ["getFirstName"]
          l = keys.length;
    
          // loop inside tom or jack if l > 0
          for (var i = 0; i < l; i++) {
            var key = keys[i];
            if(!undefined || obj[key] === void 0) obj[key] = source[key]
          }
        }
    
        return obj
      }
    }
    
    // now keysFunc = allKeys
    extend = createAssigner(allKeys);
    
    // ----------------------------------------------------------
    var ton = extend(ton, tom, jack);
    console.log(ton);
  
  console.groupEnd();

console.groupEnd();

/* -----------------------------------------------------
*  FUNCTION CONSTRUCTOR, 'new'
*     FUNCTION CONSTRUCTORS: a normal function that is used to
*       construct objects. The 'this' variable points a new empty object,
*       and that object is returned from the function automatically.
--------------------------------------------------------*/
console.group('%c - Function constructor `new` set Prototype in right way','color: green');
  
  // Note: function constructor if not return anything it'll return all propertis and method inside function
  function Person(firstname, lastname) {
    // note: es6 just use Person(firstname = 'default firstname', lastname = 'default lastname'){...}
    this.firstname= firstname || 'Default-firstname';
    this.lastname = lastname || 'Default-lastname';
  }

  console.group('-- .prototype add mothod getFullName to function constructor Person()');

    /* add method to function constructor Person
      now all of object at create by new Person() will have method getFullName
    */
    Person.prototype.getFullName = function() {
      return this.firstname + ' ' + this.lastname;
    }

    var Yot = new Person('Yot');
    console.log(Yot);

  console.groupEnd();

  console.group('-- creat new object use operator `new` + constructor function')

    // 1 new: create empty object {} 2.invoked function Person()
    var Ro = new Person()
    console.log('Object Ro: ', Ro);

    // firstname = Piya Because pototype chain object Ton upper object Person
    var Ton = new Person('Piya', 'Pomkhom');
    console.log('Object Ton: ', Ton);
  
  console.groupEnd()

console.groupEnd();

/* -----------------------------------------------------
*    BUILD-IN FUNCTION CONSTRUCTOR
*     keyword 'new' alway have has type = object
--------------------------------------------------------*/
console.group('%c - Build-in function constructor(not!! use)', 'color: green');

    var fn = function() {};
    var obj = {};

    var number = 3;
    console.log('typeof var number = 3: ',typeof(number));

    var newNumber = new Number(3);
    console.log('typeof var newNumber = new Number(3): ', typeof(newNumber));

console.groupEnd()

/* -----------------------------------------------------
*    BUILD-IN FUNCTION CONSTRUCTOR
*      keyword 'new' alway have has type = object
--------------------------------------------------------*/
console.group('%c - Object.create and Pure Prototypal inheritance', 'color: green');

    var person3 = {
      firstname: 'Default',
      lastname: 'Default',
      greet: function() {
        return 'Hi ' + this.firstname;
      }
    }

    var ro3 = Object.create(person3);
    ro3.firstname = 'Ro3';
    ro3.lastname = 'Mantic3';
    console.log(ro3);

    console.group('-- POLYFILL: code that adds a feature which the engine may lack.(old browser)');

      // polyfill
      if (!Object.create) {
        Object.create = function(o) {
          if (this.arguments.length > 1) {
            throw new Error('Object.create implemantation' + 'only accepts the first parameter.');
          }
          function F() {}
          F.prototype = o;
          return new F();
        }
      }

    console.groupEnd();
    
console.groupEnd();
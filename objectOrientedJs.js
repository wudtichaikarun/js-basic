console.log('%c Object Oriented JS and Prototypal Inheritance', 'background: #222; color: #bada55; font-size: 1rem;');

/* -----------------------------------------------------
  Understanding the Prototype
--------------------------------------------------------*/
console.group('%c - understanding the Prototype','color: green');

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
  Reflection and Extend
--------------------------------------------------------*/
console.group('%c - Reflection and Extend', 'color: green');

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



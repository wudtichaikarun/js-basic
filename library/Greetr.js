(function(global, $) {
  
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  var supportedLangs = ['en', 'th'];

  var greetings = {
    en: 'Hello',
    th: 'หวัดดี'
  };

  var formalGreetings = {
    en: 'Greetings',
    th: 'สวัดดีครับ'
  };

  var logMessages = {
    en: 'Logged in',
    th: 'เข้าสู่ระบบ'
  }

  // __pro__ where to add propertie and method
  Greetr.prototype = {

    fullname: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if(supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language suport only 'en' 'th'";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullname();
    },

    greet: function(formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      /**
       *  this refers to the calling object at execution time
      */
     return this;
      
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    }

  };

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || 'Default-firstName';
    self.lastName = lastName || 'Default-lastName';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  // set 2 name to point to this value --> Greetr
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
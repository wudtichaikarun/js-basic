;(function(global, $) {

  // 'new an object
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'th'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    th: 'หวัดดี'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    th: 'สวัดดีครับ'
  };

  // logger messages
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
    },

    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw 'jQuery not loaded';
      }

      if(!selector) {
        throw 'Missing jQuery selector';
      }

      var msg;
      if(formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }

  };

  // the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || 'Default-firstName';
    self.lastName = lastName || 'Default-lastName';
    self.language = language || 'en';
  }

  // don't want to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // set 2 name to point to this value --> Greetr
  // attach our Greetr to the global object, and provide a shorthand 'G$' 
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
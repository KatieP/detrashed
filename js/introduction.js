/* Master script to control introduction three pages and signup */

var introduction = {
  
  init: function(){
    introduction.questions.q_init();
  },

  questions: {

    bg_color_pure_white: "#fff",
    bg_color_warm_white: "#e5e5e5",
    bg_color_warm_red: "#f94343",
    text_color_dark: "#333", 

    q_init:function(){
      
      //inject the questions table into the HTML DOM
      introduction.questions.print_questions();
      
      //color all squares as the default color (unselected color)
      introduction.questions.allSquaresDefaultColor();

      //bind all the button clicks on the page
      introduction.questions.q_bind_button_clicks();
      
      var e = '';
            
      //background styling of the squares on the questions page
      //style first square (since its the only one that will be different to start out...)
      e = document.getElementById("square1");
      if(e != null && e != typeof 'undefined'){
        e.style.background=introduction.questions.bg_color_warm_red; //1st square starts out red
        e.style.color=introduction.questions.text_color_dark; 
      }
    },

    q_bind_button_clicks: function(){
      
      var e = null;
      /*
        SQUARE 1
      */

      //squareChange1 male button binding
      e = document.getElementById('sexM');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange1("M"); //if radio male
        }
      }
      //squareChange1 female button binding
      e = document.getElementById('sexF');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function() {
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange1("F"); //if radio female
        }
      }


      /*
        SQUARE 2
      */

      //squareChange2 Carnivore click
      e = document.getElementById('carnivore');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange2("carnivore"); 
        }
      }

      //squareChange2 Vegetarian click
      e = document.getElementById('vegetarian');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange2("vegetarian"); 
        }
      }

      //squareChange2 Vegan click
      e = document.getElementById('vegan');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange2("vegan");
        }
      }


      /*
        SQUARE 3
      */

      //squareChange3 no-kids 
      e = document.getElementById('no-kids');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange3("no-kids");
        }
      }

      //squareChange3 baby
      e = document.getElementById('baby');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange3("baby");
        }
      }

      //squareChange3 kids
      e = document.getElementById('kids');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange3("kids");
        }
      }


      /*
        SQUARE 4
      */

      //squareChange4 garden-yes
      e = document.getElementById('garden-yes');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange4("yes");
        }
      }

      //squareChange4 garden-no
      e = document.getElementById('garden-no');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          introduction.questions.allSquaresDefaultColor();
          introduction.questions.squareChange4("no");
        }
      }

      /*
        This next button binding deals with the NEXT BUTTON

      */

      //Next Arrow button on the Questions page
      e = document.getElementById('arrow');
      if(e != null && e != typeof 'undefined'){
        e.onclick = function(){
          if(introduction.questions.validateAllSquaresAnswered())
          {
            //go to the next page
            introduction.questions.q_finish();
          }
          else
          {
            //else???
            alert("You must answer all questions!");
          }
        }
      }

    },

    print_questions:function() {
      var center_container = document.getElementById("center-container");

      if (center_container != null && center_container != typeof "undefined" ) {
        
      /*Highlights first box 
      box1 background is red to start
      when box 1 value is filled, box 1 turns off, box 2 turns on
      when box 2 value is filled, box 2 turns off, box 3 turns on
      when box 3 value is filled, box 3 turns off, box 4 turns on
      when box 4 value is clicked, and all boxes are filled, we go to next page
      if user clicks on any other box that data will store and still go through all 4 boxes
      */
        
        
        var questions_table = '<div id = "large-plain-text">Tell us about yourself, traveler</div><table class="tg">' +
            '<tr>' +
              '<td id="square1" class="square top-left">'+             
                'I am a...<br/><br/>' +   
                '<input id="sexM" type="radio"/>Male'+
                '&nbsp;&nbsp;'+
                '<input id="sexF" type="radio"/>Female'+
              '</td>'+
              '<td id="square2" class="square top-right">'+
                'I eat . . . <br/><br/>'+
                '<input id="carnivore" type="radio"/>Carnivore'+
                '&nbsp;&nbsp;'+
                '<input id="vegetarian" type="radio"/>Vegetarian'+
                '&nbsp;&nbsp;'+
                '<input id="vegan" type="radio"/>Vegan'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td id="square3" class="square bottom-left">'+
                'I have . . . <br/><br/>'+
                '<input id="no-kids" type="radio"/>No kids' +
                '&nbsp;&nbsp;'+
                '<input id="baby" type="radio"/>Baby/Expecting'+
                '&nbsp;&nbsp;'+
                '<input id="kids" type="radio"/>Kids over 2 years'+
              '</td>'+
              '<td id="square4" class="square bottom-right">'+
                'I have a garden . . . <br/><br/>'+
                '<input id="garden-yes" type="radio"/>Yes' +
                '&nbsp;&nbsp;'+
                '<input id="garden-no" type="radio"/>No'+
              '</td>'+
            '</tr>'+
        '</table>'+
        '<div id="arrow"><span class="next">Next&nbsp;</span><span class="arrow">{</span></div>';
    
        center_container.innerHTML = questions_table;
      } else {
        console.log("Error: questions print statement didnt work");
      }
    },

    squareChange1:function(flag) {

      var e = null;

      e = document.getElementById('square1');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_pure_white;

      e = document.getElementById('square2');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_warm_red;

      //uncheck the other "sex" flag
      if(flag == "M"){
        document.getElementById("sexF").checked = false;
      } else {
        document.getElementById("sexM").checked = false;
      }

      //Save the value to our user_data object
      introduction.user_data.sex = flag; 
    },

    squareChange2:function(flag) {

      var e = null;

      e = document.getElementById('square2');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_pure_white;

      e = document.getElementById('square3');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_warm_red;

      //uncheck the other "eat" flags
      if(flag == "carnivore"){
        document.getElementById("vegetarian").checked = false;
        document.getElementById("vegan").checked = false;
      } 

      if(flag == "vegetarian"){
        document.getElementById("carnivore").checked = false;
        document.getElementById("vegan").checked = false;
      }

      if(flag == "vegan"){
        document.getElementById("carnivore").checked = false;
        document.getElementById("vegetarian").checked = false;
      }

      //save the data to the user_data variable.
      introduction.user_data.eat = flag;
    },

    squareChange3:function(flag) {
      var e = null;

      e = document.getElementById('square3');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_pure_white;

      e = document.getElementById('square4');
      if(e != null && e != typeof 'undefined')
        e.style.background = introduction.questions.bg_color_warm_red;

      //uncheck the other "kids" flags
      if(flag == "no-kids"){
        document.getElementById("baby").checked = false;
        document.getElementById("kids").checked = false;
      } 

      if(flag == "baby"){
        document.getElementById("no-kids").checked = false;
        document.getElementById("kids").checked = false;
      }

      if(flag == "kids"){
        document.getElementById("no-kids").checked = false;
        document.getElementById("baby").checked = false;
      }

      introduction.user_data.kids = flag;
    },

    squareChange4:function(flag) {
      var e = null;

      //set all the squares to have the default gray background
      introduction.questions.allSquaresDefaultColor();

      //highlight next arrow button
      e = document.getElementById('arrow');
      if(e != null && e != typeof 'undefined'){
        //color the next arrow button red
        e.style.color = introduction.questions.bg_color_warm_red;
      }

      //uncheck the other "kids" flags
      if(flag == "yes"){
        document.getElementById("garden-no").checked = false;
      } 

      if(flag == "no"){
        document.getElementById("garden-yes").checked = false;
      }     

      introduction.user_data.garden = flag;
    },

    validateAllSquaresAnswered: function(){
      var i = introduction.user_data;
      if(i.sex != "" && i.sex != null &&
         i.eat != "" && i.eat != null &&
         i.kids != "" && i.kids != null &&
         i.garden != "" && i.garden != null)
      {
        return true;
      }
      else
      {
        return false;
      }
    },

    allSquaresDefaultColor:function(){
      //style first square
      e = document.getElementById("square1");
      if(e != null && e != typeof 'undefined'){
        e.style.background=introduction.questions.bg_color_pure_white;
        e.style.color=introduction.questions.text_color_dark; 
      }
      //style second square
      e = document.getElementById("square2");
      if(e != null && e != typeof 'undefined'){
        e.style.background=introduction.questions.bg_color_pure_white;
        e.style.color=introduction.questions.text_color_dark; 
      }
      //style third square
      e = document.getElementById("square3");
      if(e != null && e != typeof 'undefined'){
        e.style.background=introduction.questions.bg_color_pure_white;
        e.style.color=introduction.questions.text_color_dark; 
      }
      //style fourth square
      e = document.getElementById("square4");
      if(e != null && e != typeof 'undefined'){
        e.style.background=introduction.questions.bg_color_pure_white;
        e.style.color=introduction.questions.text_color_dark; 
      }
    },

    q_finish: function(){

      var center_container = document.getElementById("center-container");
      if (center_container != null && center_container != typeof "undefined" ) {
        center_container.innerHTML = ""; // clear the center_container

        introduction.sign_up.print_sign_up_form();
      }
    }
     

  },
  
  sign_up: {

    su_init: function(){
      //initialize something about the startup form...
    },

    print_sign_up_form: function(){

      var center_container = document.getElementById("center-container");

      if (center_container != null && center_container != typeof "undefined" ) {
        
        var sign_up = '';
        sign_up += '<div class="container">'+
          '<form id="signup">'+
            '<div class="header">'+
              '<p>Sign in with</p>'+
              '<p>Facebook</p>'+
              '<p>Twitter</p>'+
            '</div>'+
            '<div class="sep"></div>'+
            '<div class="inputs">'+
              '<input type="email" placeholder="username" autofocus />'+
              '<input type="email" placeholder="e-mail" autofocus />'+
              '<input type="password" placeholder="Password" />'+
              '<div class="checkboxy">'+
                '<input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>'+
              '</div>'+
              '<a id="submit" href="#">Let\'s do this</a>'+
            '</div>'+
          '</form>'+
        '</div>'+
        '<div id = "arrow"><href="#">{</a></div>';

        center_container.innerHTML = sign_up;
      }
    }

  },
  
  starter: {

  },

  ajax: {

    get: function(payload){
      
      //Note: the payload parameter should be in a format easy to 
      //      turn into a JSON-RPC string, see documentation on format and structure:
      //      http://www.jsonrpc.org/specification

      //create the xmlhttprequest object
      var xmlhttp;
      if (window.XMLHttpRequest)
      {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
      else
      {
        // code for IE6, IE5 (for legacy IE browsers)
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      
      //to perform a "synchronous" request (aka "blocking")
      /*
        xmlhttp.open("GET","demo_get.asp?t=" + Math.random(),false);
        xmlhttp.send();
      */

      //to send an asynchronous request and invalidate the cache (to get a fresh page)
      //add a random param to the query string
      /*
        xmlhttp.open("GET","demo_get.asp?t=" + Math.random(),true);
        xmlhttp.send();
      */

      var method = "GET";
      var url = "someurl.com/ajax.handler?p="+payload;
      var async = "true";

      //define the "callback" that handles the response from the server
      xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          //ex: document.getElementById("myDiv").innerHTML=xmlhttp.responseText;


        }
      }

      xmlhttp.open(method,url,async);
      xmlhttp.send();
    },

    post: function(){

      //create the xmlhttprequest object
      var xmlhttp;
      if (window.XMLHttpRequest)
      {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
      else
      {
        // code for IE6, IE5 (for legacy IE browsers)
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      
      //to perform a "synchronous" request (aka "blocking")
      /*
        xmlhttp.open("GET","demo_get.asp?t=" + Math.random(),false);
        xmlhttp.send();
      */

      //to send an asynchronous request and invalidate the cache (to get a fresh page)
      /*
        xmlhttp.open("GET","demo_get.asp?t=" + Math.random(),true);
        xmlhttp.send();
      */

      var method = "POST";
      var url = "someurl.com/post.handler";
      var async = "true";

      //define the "callback" that handles the response from the server
      xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          //ex: document.getElementById("myDiv").innerHTML=xmlhttp.responseText;


        }
      }

      xmlhttp.open(method,url,async);
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xmlhttp.send("fname=Henry&lname=Ford");
    }

  },

  user_data: {
    sex: "",
    eat: "",
    kids: "",
    garden: "",
  }

};
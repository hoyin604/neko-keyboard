$(document).ready(function(){
  var setting = {
    "keyDelay" : 150
  };
  var $input = $(".input");
  var keyDownTime_list = [];
  $(document).on("keydown", onDown).on("keyup", onUp).on("keypress", function(ev) {
    //console.log(ev);
  });

  function onDown(ev) {
    var i = ev.which;
    if (keyDownTime_list[i] == undefined) {
      keyDownTime_list[i] = ev.timeStamp;
    }
    //console.log("onDown:" + ev.which);
  }

  function onUp(ev) {
    var i = ev.which;
    var k = ev.key;
    var delay = ev.timeStamp - keyDownTime_list[i];
    keyDownTime_list[i] = undefined;
    if (delay < setting.keyDelay) {
      console.log("onUp: " + k + " " + delay);
      if ((i == 8 || i == 13) || i > 31) {
        if (i == 8) {
          removeLastChar($input);
        } else {
          if (i == 13) {
            k = "<br />";
          }
          AddChar($input, k);
        }
      }
    }
  }

function AddChar($el, char) {
  $el.html($el.html() + char);
}
function removeLastChar($el) {
  var t = $el.html();

  $el.html(t.substr(0,t.length-1));
}

});

function validate() {
  let ids = ["name", "fam", "email", "psw", "psw2"];
  let oks = [null, null, null, null, null];
  ids.map((item, index) => {
    let input = $("#" + item);
    if (input != undefined) {
      input.removeClass("error");
      input.removeClass("valid");

      if ($.trim(input.val()) != "") {
        oks[index] = true;
      }
      if (item === "email") {
        if (!validateEmail($.trim(input.val()))) oks[index] = false;
        if ($.trim(input.val()) === "") oks[index] = null;
      }
      if (item === "psw") {
        if (!validatePsw($.trim(input.val()))) oks[index] = false;
        if ($.trim(input.val()) === "") oks[index] = null;
      }
      if (item === "psw2") {
        if (!validatePsw($.trim(input.val()))) oks[index] = false;
        if (input.val() !== $("#psw").val()) oks[index] = false;
        if ($.trim(input.val()) === "") oks[index] = null;
      }

      if (oks[index]) {
        input.removeClass("error");
        input.addClass("valid");
      }
      if (oks[index] === false) {
        input.addClass("error");
        input.removeClass("valid");
      }
    }
  });

  let result = true;
  oks.map((item) => {
    if (item === null || item === false) result = false;
  });

  return result;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePsw(psw) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(psw);
}

$(function () {
  $(".cellBlock .cell select").selectmenu().selectmenu("menuWidget").addClass("overflow");
  $("input[type=radio]").checkboxradio();
  var formValid = validate();
  if (formValid) $("#submitBtn").removeClass("disabled");
  else $("#submitBtn").addClass("disabled");
  $(".fe").keyup(function () {
    formValid = validate();
    if (formValid) $("#submitBtn").removeClass("disabled");
    else $("#submitBtn").addClass("disabled");
  });

  $('#submitBtn').click(function(){
    if(!$(this).hasClass('disabled')){

      // отправляем на сервер =>

      $('.centerColl').attr('data-step',2);
    }
  })


  var svg = new Walkway({
    selector: '#svg',
    duration: 3500,
    easing: 'linear'
  }).draw(function() {
    console.dir('Finished');
  });

});

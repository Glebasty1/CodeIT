"use strict";
$(document).ready(function () {

  $('#registrationForm').on('submit', registration);
  getCompaniesList();
  getNewsList();

  function registration(e) {
    e.preventDefault();

    var name = $('#name').val();
    var secondname = $('#secondname').val();
    var email = $('#email').val();
    var gender = $('#gender').val();
    var pass = $('#pass').val();
    $.ajax({
      method: "POST",
      url: "http://codeit.pro/frontTestTask/user/registration",
      data: { name: name, secondname: secondname, email: email, gender: gender, pass: pass },
      success: function(res) {
        if(res.status === "OK") {
          console.log(res);
          console.log(res.status);
          window.location.href = 'companies.html';
        } else if(res.status === "Form Error" || res.status === "Error") {
          console.log(res);
          console.log(res.status);
          $('#registrationError').show().html(res.message);
        }
      }
    });
  }

  function getCompaniesList() {
    $.ajax({
      method: "GET",
      url: "http://codeit.pro/frontTestTask/company/getList",
      success: function(res) {
        if(res.status === "OK") {
          console.log("Companies: ", res);
        } else if(res.status === "Form Error" || res.status === "Error") {
          console.log(res);
        }
      }
    });
  }

  function getNewsList() {
    $.ajax({
      method: "GET",
      url: "http://codeit.pro/frontTestTask/news/getList",
      success: function(res) {
        if(res.status === "OK") {
          console.log("News: ", res);
        } else if(res.status === "Form Error" || res.status === "Error") {
          console.log(res);
        }
      }
    });
  }
});
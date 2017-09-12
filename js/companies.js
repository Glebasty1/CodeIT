"use strict";

$(document).ready(function () {

  getCompaniesList();
  getNewsList();

  function getCompaniesList() {
    $.ajax({
      method: "GET",
      url: "http://codeit.pro/frontTestTask/company/getList",
      success: function(res) {
        if(res.status === "OK") {
          let companies = res.list;
          let output = '';
          console.log("Companies: ", res);
          $.each(companies, function(i, company) {
            output += `
            <div class="company-item">
                <p>${company.name}</p>
            </div>
            `;
          })

          $('#total-companies').html(456789);
          $('#companies').html(output);
          
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
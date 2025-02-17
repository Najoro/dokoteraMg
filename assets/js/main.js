$(document).ready(function () {
  Calandar.init();

  Evenement.toogleShowPassword();
  Evenement.initlTelInput();
});

const Evenement = {
  toogleShowPassword: function () {
    $("body").on("click", "#toogle-show-password", function () {
      const $password = $("#password");
      const $this = $(this);
      var icon = $this.find("i");

      if ($password.attr("type") == "password") {
        $password.attr("type", "text");
        icon.removeClass("bi-eye-slash").addClass("bi-eye");
      } else {
        $password.attr("type", "password");
        icon.removeClass("bi-eye").addClass("bi-eye-slash");
      }
    });
  },

  initlTelInput: function () {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      initialCountry: "mg",
      separateDialCode: true,
      loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855"), // for formatting/placeholders etc
    });
  },
};

const Calandar = {
  init: function () {
    var eventDates = ["14/02/2025", "22/02/2025"]; 
    $("#datepicker").datepicker({
      format: "dd/mm/yyyy",
      todayHighlight: true,
      language: 'fr',
      beforeShowDay: function (date) {
        var dateString = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        
        if (eventDates.includes(dateString)) {
          return { 
            classes: "bg-primary text-white rounded-circle square-date",
           };
        }
      },
    });
  },


};

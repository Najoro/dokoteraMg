$(document).ready(function () {
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

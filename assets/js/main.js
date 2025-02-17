$(document).ready(function () {
  const dataDate = [
    {date: "12/02/2025", docteur: "Benja", horaire: "10h 20 - 10h-15"},
    {date: "12/01/2025", docteur: "Benja", horaire: "10h 45 - 10h-15"},
    {date: "15/01/2025", docteur: "Alice", horaire: "14h 00 - 10h-15"},
    {date: "20/02/2025", docteur: "Bob", horaire: "09h 15 - 10h-15"},
    {date: "23/02/2025", docteur: "Claire", horaire: "11h 30 - 10h-15"},
    {date: "05/04/2025", docteur: "Dan", horaire: "08h 00 - 10h-15"},
    {date: "12/05/2025", docteur: "Eve", horaire: "10h 20 - 10h-15"},
    {date: "12/05/2025", docteur: "Eve", horaire: "10h 20 - 10h 45"},
    {date: "12/06/2025", docteur: "Eve", horaire: "10h 20 - 10h-15"},
    {date: "12/07/2025", docteur: "Eve", horaire: "10h 20 - 10h-15"},
    {date: "12/09/2025", docteur: "Eve", horaire: "10h 20 - 10h-15"},
];

  Calandar.rendezVous(dataDate);
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

  rendezVous : function(DataRendezVous) {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let currentDate = new Date();


    function updateMonthYear() {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        $(".month-year").text(`${months[month]} ${year}`);
        Filter.displayAppointments(month, year, DataRendezVous);

    }

    $(".btn-prev").click(function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateMonthYear();
    });

    $(".btn-next").click(function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateMonthYear();
    });

    // Initial display
    updateMonthYear();
  },

};

const Filter = {
  displayAppointments : function(month, year, DateToFilter) {
    const Days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    // Filtrer les rendez-vous en fonction du mois et de l'année
    const filteredAppointments = DateToFilter.filter(appointment => {
        const appointmentDate = new Date(appointment.date.split("/").reverse().join("/"));
        return appointmentDate.getMonth() === month && appointmentDate.getFullYear() === year;
    });

    // Afficher les rendez-vous filtrés
    $(".appointment-list").empty();
    if (filteredAppointments.length > 0) {
        filteredAppointments.forEach(appointment => {
          const appointmentDate = new Date(appointment.date.split("/").reverse().join("/"));
          const dayNumber = appointmentDate.getDate();
          let dayOfWeek = appointmentDate.toLocaleDateString('fr-FR', { weekday: 'short' }); // 'short' donne une version abrégée du jour

            $(".appointment-list").append(
                `<li>
                    <div class="d-flex align-items-center gap-3  my-2 rounded-2" >
                      <div class="d-flex justify-content-center align-items-center flex-column m-2 rounded-2" style="width:60px;height:60px; background : #EEF5DF;">
                        <span class="opacity-75 fs-14-px">${dayOfWeek}</span>
                        <span class="fw-bold fs-5">${dayNumber}</span>
                      </div>
                      
                      <div class="d-flex justify-content-center align-items-start flex-column ">
                        <span class="">${appointment.docteur}</span>
                        <span class="opacity-75 fs-14-px">${appointment.horaire}</span>
                      </div>
                    
                    </div>
                </li>`
            );
        });
    } else {
        $(".appointment-list").append(`<li>
          <div class="rendez-vous my-6">
              <div class="sans-rendez-vous d-flex justify-content-center align-items-center flex-column">
                  <i class="bi bi-calendar-week fs-1 text-primary"></i>
                  <h4 class="fs-5">Aucun rendez-vous à venir</h4>
              </div>
          </div>

          </li>`);
    }
  }


}
$(document).ready(function () {
  const events = [
    {
      id: "1",
      title: "Consultation",
      start: "2025-03-20",
      docteur: "Benja",
      horaire: "10h 20 - 10h 15", 
    },
    {
      id: "2",
      title: "Médicament",
      start: "2025-03-20",
      docteur: "Alice",
      horaire: "11h 00 - 11h 45", 
    },
    {
      id: "3",
      title: "Radio",
      start: "2025-03-20",
      docteur: "Marc",
      horaire: "14h 00 - 14h 30", 
    },
    {
      id: "4",
      title: "Échographie",
      start: "2025-03-20",
      docteur: "Sophie",
      horaire: "09h 00 - 09h 30", 
    },
    {
      id: "5",
      title: "Prise de Sang",
      start: "2025-03-20",
      docteur: "Léa",
      horaire: "15h 00 - 15h 30", 
    },
    {
      id: "6",
      title: "Consultation de Suivi",
      start: "2025-01-25",
      docteur: "Tom",
      horaire: "10h 00 - 10h 30", 
    },
    {
      id: "7",
      title: "Vaccination",
      start: "2025-03-26",
      docteur: "Claire",
      horaire: "13h 30 - 14h 00", 
    },
    {
      id: "8",
      title: "Rééducation",
      start: "2025-06-27",
      docteur: "Paul",
      horaire: "11h 15 - 11h 45", 
    },
    {
      id: "9",
      title: "Consultation d'Urgence",
      start: "2025-12-28",
      docteur: "Nina",
      horaire: "12h 00 - 12h 30", 
    },
    {
      id: "10",
      title: "Prescription Médicale",
      start: "2025-03-01",
      docteur: "Max",
      horaire: "14h 15 - 14h 45", 
    },
    {
      id: "11",
      title: "Examen Clinique",
      start: "2025-03-12",
      docteur: "Eva",
      horaire: "09h 30 - 10h 00", 
    },
    {
      id: "12",
      title: "Analyse de Sang",
      start: "2025-03-19",
      docteur: "Alex",
      horaire: "10h 30 - 11h 00", 
    },
    {
      id: "13",
      title: "Consultation Psychologique",
      start: "2025-03-22",
      docteur: "Julia",
      horaire: "13h 00 - 13h 30", 
    },
    {
      id: "14",
      title: "Examen Radiologique",
      start: "2025-04-07",
      docteur: "Simon",
      horaire: "15h 30 - 16h 00", 
    },
    {
      id: "15",
      title: "Suivi Post-Opératoire",
      start: "2025-03-07",
      docteur: "Lina",
      horaire: "11h 45 - 12h 15", 
    },
    {
      id: "16",
      title: "Évaluation Nutritionnelle",
      start: "2025-05-07",
      docteur: "Kévin",
      horaire: "10h 15 - 10h 45", 
    },
    {
      id: "17",
      title: "Consultation Gynécologique",
      start: "2025-09-08",
      docteur: "Chloé",
      horaire: "12h 30 - 13h 00", 
    },
    {
      id: "18",
      title: "Consultation Pédiatrique",
      start: "2025-03-10",
      docteur: "Julien",
      horaire: "14h 45 - 15h 15", 
    },
    {
      id: "19",
      title: "Intervention Chirurgicale",
      start: "2025-02-10",
      docteur: "Laura",
      horaire: "09h 15 - 09h 45", 
    },
    {
      id: "20",
      title: "Évaluation Cardiaque",
      start: "2025-01-11",
      docteur: "Louis",
      horaire: "10h 00 - 10h 30", 
    },
    {
      id: "21",
      title: "Consultation Dermatologique",
      start: "2025-01-12",
      docteur: "Emma",
      horaire: "11h 30 - 12h 00", 
    },
    {
      id: "22",
      title: "Consultation Endocrinologique",
      start: "2026-01-13",
      docteur: "Mila",
      horaire: "13h 15 - 13h 45", 
    },
    {
      id: "23",
      title: "Séance de Kinésithérapie",
      start: "2026-03-14",
      docteur: "Lucas",
      horaire: "14h 30 - 15h 00", 
    },
    {
      id: "24",
      title: "Consultation Cardiologique",
      start: "2025-02-15",
      docteur: "Sara",
      horaire: "15h 15 - 15h 45", 
    },
    {
      id: "25",
      title: "Bilan de Santé",
      start: "2025-03-16",
      docteur: "Antoine",
      horaire: "16h 00 - 16h 30", 
    },
  ];

  Calandar.rendezVous(events);
  // Calandar.init();

  Calandar.initialiseFullCalandar(events);

  Evenement.toogleShowPassword();
  // Evenement.initlTelInput();
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
  currentDate: new Date(),
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  rendezVous: function (DataRendezVous) {
    const self = this; // Référence à l'objet courant
    $(".btn-prev").click(function () {
      calandarFunctions.previousMonth(DataRendezVous);
    });

    $(".btn-next").click(function () {
      calandarFunctions.nextMonth(DataRendezVous);
    });

    // Affichage initial  
    calandarFunctions.updateMonthYear(DataRendezVous);
  },

  initialiseFullCalandar: function (eventFullCalandar) {
    var calendarEl = $("#calendar")[0];
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      events: eventFullCalandar,
      selectable: true,
      editable: true,
      initialView: "dayGridMonth",
      locale: "fr",
      timeZone: "Africa/Nairobi",
      themeSystem: "bootstrap5", 
      dateClick: function (info) {
        const date = info.dateStr;
        calandarFunctions.displayTodayEvents(date);
      },
      datesSet: function () {
        calandarFunctions.markEventDays();
      },
    });
    this.calendar.render();

    const today = new Date().toISOString().split("T")[0];
    calandarFunctions.displayTodayEvents(today);
  },
};

const calandarFunctions = {
  updateMonthYear: function (DataRendezVous) {
    const month = Calandar.currentDate.getMonth();
    const year = Calandar.currentDate.getFullYear();
    $(".month-year").text(`${Calandar.months[month]} ${year}`);
    Filter.displayFilterEvents(month, year, DataRendezVous);
  },

  previousMonth: function (DataRendezVous) {
    Calandar.currentDate.setMonth(Calandar.currentDate.getMonth() - 1);
    this.updateMonthYear(DataRendezVous);
  },

  nextMonth: function (DataRendezVous) {
    Calandar.currentDate.setMonth(Calandar.currentDate.getMonth() + 1);
    this.updateMonthYear(DataRendezVous);
  },

  displayTodayEvents: function (date) {
    var events = Calandar.calendar.getEvents();
    var $todayEventsDiv = $("#today-events");
    var todayEvents = events.filter((event) => event.start.toISOString().split("T")[0] === date);
    
    $todayEventsDiv.empty();
    if (todayEvents.length > 0) {
      todayEvents.forEach((event) => {
        
        $todayEventsDiv.append(Templante.eachEvent(event))
      })
    } else {
      $todayEventsDiv.html(Templante.noEvent());
    }
  },

  markEventDays: function () {
    var allDays = Calandar.calendar.getEvents();
    var $dayCells = $(".fc-day");

    $dayCells.removeClass("has-events");

    $.each(allDays, function (index, event) {
      var eventDate = event.start.toISOString().split("T")[0];
      var $cell = $('.fc-day[data-date="' + eventDate + '"]');
      if ($cell.length) {
        $cell.addClass("has-events");
      }
    });
  },


};

const Filter = {
  displayFilterEvents: function (month, year, events) {
    const Days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    
    // Filtrer les rendez-vous en fonction du mois et de l'année
    const eventsFilter = events.filter((event) => {
      const date = new Date(event.start);
      return date.getMonth() === month && date.getFullYear() === year;
    });

    // Afficher les rendez-vous filtrés
    $(".appointment-list").empty();
    if (eventsFilter.length > 0) {
      eventsFilter.forEach((event) => {
        $(".appointment-list").append(Templante.eachEvent(event));
      });
    } else {
      $(".appointment-list").append(Templante.noEvent());
    }
  },


};

const Templante = {
  eachEvent: function (event) {
    const eventDate = new Date(event.start);        
    const dayNumber = eventDate.getDate();
    let dayOfWeek = eventDate.toLocaleDateString("fr-FR", {
      weekday: "short",
    });
    eventTitle = event.docteur ? event.docteur : event.title;
    horaire = event.horaire == undefined ? '' : event.horaire;
    return `
      <li>
        <div class="d-flex align-items-center gap-3  my-1 rounded-2" >
          <div class="d-flex justify-content-center align-items-center flex-column m-2 rounded-2" style="width:50px;height:50px; background : #EEF5DF;">
            <span class="opacity-75 fs-14-px">${dayOfWeek}</span>
            <span class="fw-bold fs-6">${dayNumber}</span>
          </div>
          <div class="d-flex justify-content-center align-items-start flex-column ">
            <span class="">${eventTitle}</span>
            <span class="opacity-75 fs-14-px">${horaire}</span>
          </div>
        </div>
      </li>`;
  },
  
  noEvent : function() {
    return `
      <li>
        <div class="rendez-vous my-6">
            <div class="sans-rendez-vous d-flex justify-content-center align-items-center flex-column">
                <i class="bi bi-calendar-week fs-1 text-primary"></i>
                <h4 class="fs-5">Aucun rendez-vous à venir</h4>
            </div>
        </div>
      </li>
    `
  }


};
